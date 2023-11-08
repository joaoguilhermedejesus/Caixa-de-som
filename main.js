//Criando/ddeclarando a função tocaSom com parâmetro idElementoAudio
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

//criando referência constante listaDeTeclas buscando todos os itens pela clase .tecla
const listaDeTeclas = document.querySelectorAll('.tecla');

//criando referência variável "contador" iniciando = 0
let contador = 0;

//estrutura dee repetição "while" significa "enquanto algo acontecer"
while(contador < listaDeTeclas.length){
    const tecla = listaDeTeclas[contador];
    const efeito = tecla.classList[1];
    const idAudio = `#som_+ ${efeito}`;listaDeTeclas[contador]
    tecla.onclick = function(){
        tocaSom(idAudio)
    }
    contador = contador + 1;
    console.log(contador);
}
