
function avaliarCompra() {
    let rotuloAvaliacao = document.getElementById('rotuloAvaliacao');

    let x = parseInt( document.getElementById('notas').value);

    rotuloAvaliacao.innerHTML = 'Avaliação da compra: ';
    switch(x){
        case 0: {
            rotuloAvaliacao.innerHTML += 'Ruim';
            rotuloAvaliacao.style.color = "#ff0000";
            break;
        }
        case 5: {
            rotuloAvaliacao.innerHTML += 'Razoável';
            rotuloAvaliacao.style.color = "#00ff00";
            break;
        }
        default: {
            rotuloAvaliacao.innerHTML += 'Ótimo';
            rotuloAvaliacao.style.color = "#0000ff";
            break;
        }
    } 

}

/* TODO2 */
function avaliarSigla() {
    let rotuloSigla = document.getElementById('rotuloSigla');

    let x = document.getElementById('siglas').value;

    rotuloSigla.innerHTML = 'Avaliação da sigla: ';
    switch(x){
        case 'HTML': {
            rotuloSigla.innerHTML += 'Hypertext Markup Language';
            rotuloSigla.style.color = "#ff0000";
            break;
        }
        case 'CSS': {
            rotuloSigla.innerHTML += 'Cascading Style Sheet';
            rotuloSigla.style.color = "#00ff00";
            break;
        }
        default: {
            rotuloSigla.innerHTML += 'eXtended Markup Language';
            rotuloSigla.style.color = "#0000ff";
            break;
        }
    } 

}










var compra = false;
function comprar() {

    let imagem = document.getElementById('carrinho');
    
    compra = !compra; //Inverte o valor atual que está em memória

    if(compra){
        imagem.src = 'img/vendas2.png';
    } else {
        imagem.src = 'img/vendas.png';
    }
    
}