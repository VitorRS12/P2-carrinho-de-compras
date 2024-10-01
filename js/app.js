let totalGeral = 0; 
let carrinhoDeCompras = [];
limpar();



let pessoa = {
    
}


function adicionar() {
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value; 

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
    
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$ ${preco}</span>
     </section>`;

    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total'); 
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;
}

function limpar() {
    totalGeral = 0; 
    document.getElementById('lista-produtos').innerHTML = ''; 
    document.getElementById('valor-total').innerHTML = 'R$ 0'; 
}