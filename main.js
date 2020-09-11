/*Declaramos las variables*/
let userScore= 0;
let compScore= 0;
const userScore_span= document.getElementById('user-score');
const compScore_span= document.getElementById('comp-score');
const ScoreBoard_div= document.querySelector('marcador');
const result_div= document.querySelector('.result p');
const piedra_div= document.getElementById('pi');
const papel_div= document.getElementById('pa');
const tijera_div= document.getElementById('ti');

/** Creamos la función game */

function game(opcion){
    
}

/*Elementos que ejecutarán el juego cada vez que demos click en las imágenes*/

function main(){
    piedra_div.addEventListener('click', () => game("pi"));
    papel_div.addEventListener('click', () => game("pa"));
    tijera_div.addEventListener('click', () => game("ti"));
}
main();