let totalGeral = 0; 
let carrinhoDeCompras = [];
limpar();


function adicionar() {
    let produto = document.getElementById('produto').value;
    let quantidade = parseInt(document.getElementById('quantidade').value); 

    if(!produto || produto.trim() === "") {
        alert("Selecione um produto válido");
        return; 
    }

    if(isNaN(quantidade) || quantidade <= 0) {
        alert("Insira uma quantidade válida");
        return;
    }

    let nomeProduto = produto.split('-')[0];
    let valorUnitario = parseFloat(produto.split('R$')[1]);
    let preco = parseFloat(quantidade * valorUnitario);
    
    let produtoJaAdicionado = carrinhoDeCompras.find(p => p.nome == nomeProduto); 
    if (produtoJaAdicionado) { 
        produtoJaAdicionado.quantidade += quantidade; 
        produtoJaAdicionado.valor = produtoJaAdicionado.valor + preco
    } else {
        let produto = {
            nome: nomeProduto,
            quantidade: quantidade, 
            valor: preco
        };

        carrinhoDeCompras.push(produto); 
    }
    

    let lista = document.getElementById('lista-produtos');
    lista.innerHTML = ''; 

    carrinhoDeCompras.forEach(p => {
        lista.innerHTML = lista.innerHTML + `<section class="carrinho__produtos__produto">
             <span class="texto-azul">${p.quantidade}x</span> ${p.nome} <span class="texto-azul">R$${p.valor.toFixed(2)}</span>
        </section>`;
      }); 

    
    totalGeral = parseFloat(totalGeral + preco);
    let campoTotal = document.getElementById('valor-total'); 
    campoTotal.textContent = `R$ ${totalGeral.toFixed(2)}`;
    document.getElementById('quantidade').value = 0;
}

function limpar() {
    totalGeral = 0; 
    carrinhoDeCompras = []; 
    document.getElementById('lista-produtos').innerHTML = ''; 
    document.getElementById('valor-total').textContent = 'R$ 0'; 
}