//Criando/ddeclarando a função tocaSomPom
function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
}
//chamando/invocando a função tocaSomPom pelo clique do botão
document.querySelector('.tecla_pom').onclick = tocaSomPom;

//criando referência constante listaDeTeclas buscando todos os itens pela clase .tecla
const listaDeTeclas = document.querySelectorAll('.tecla');

//invocando a funçãotocaSomPom a partir do item "0", 1º botão
listaDeTeclas[0].onclick = tocaSomPom;