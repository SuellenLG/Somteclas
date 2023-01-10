function tocaSom (selectorAudio) {
    const elemento = document.querySelector(selectorAudio);

    if (elemento != null && elemento.localName ==='audio'){
       elemento.play();
    }
    else{
        console.log('elemento não encontrado');
    }
}
 

//document.querySelector('.tecla_pom').onclick=tocaSonPom; (para cada selecao individual)


const listaDeTeclas = document.querySelectorAll('.tecla');

        //while (contador < listaDeTeclas.length) {

            //const tecla = listaDeTeclas[contador];
            //const instrumento = tecla.classList[1];
            //const idAudio = `#som_${instrumento}`;    //templete string


            //console.log(idAudio);

           //tecla.onclick = function () {
            //    tocaSom(idAudio);
           // }

            //contador = contador + 1;

            //console.log(contador);
for(let contador = 0; contador < listaDeTeclas.length; contador ++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;    //templete string


    tecla.onclick = function () {
        tocaSom(idAudio);
    }
    tecla.onkeydown = function(evento){

        if (evento.code ===  'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
        
    }
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}