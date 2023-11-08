//Criando/ddeclarando a função tocaSom com parâmetro idElementoAudio
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

//criando referência constante listaDeTeclas buscando todos os itens pela clase .tecla
const listaDeTeclas = document.querySelectorAll('.tecla');

//criando referência variável "contador" iniciando = 0


//estrutura dee repetição "while" significa "enquanto algo acontecer"
for(let contador = 0;contador < listaDeTeclas.length;constaor = contador + 1)
    const tecla = listaDeTeclas [contador]
    const efeito = tecla.classlist[1]; //acessa o 2° item da classe de classe de teclas
    const idAudio = `#som_+ ${efeito}`;listaDeTeclas[contador]
    tecla.onclick = function(){
        tocaSom(idAudio)
    }
    

