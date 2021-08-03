const formCliente = document.forms.cadastroCliente;
const formProduto = document.forms.cadastroProduto;


formCliente.addEventListener('submit', (e) => {
        e.preventDefault();
    
        const {nome, sobrenome, email, telefone} = formCliente; 
        console.log(nome.value, sobrenome.value, email.value, telefone.value)
        localStorage.setItem('cadastro-cliente', JSON.stringify({nome:nome.value, sobrenome:sobrenome.value, email:email.value, telefone:telefone.value})) 
    
        formCliente.reset()

})

formProduto.addEventListener('submit', (e) => {
    e.preventDefault();

    const {nomeProduto, codigoProduto, quantidade} = formProduto; 
    console.log(nomeProduto.value, codigoProduto.value, quantidade.value)
    localStorage.setItem('cadastro-cliente', JSON.stringify({nomeProduto:nomeProduto.value, codigoProduto:codigoProduto.value, quantidade:quantidade.value})) 

    formProduto.reset()
})
