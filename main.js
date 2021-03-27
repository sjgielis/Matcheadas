const boxGame = document.getElementById ('boxGame');
const timer = document.getElementById ('timer');
const info = document.getElementById ('info');
const reset = document.getElementById('reset');

let callModal = true
let startTimer = ''


// tablero de juego

// const items = ["url(./img/bota.jpg)", "url(./img/cara.png)", "url(./img/mago.png)", "url(./img/ok.png)", "url(./img/mym.png)", "url(./img/myp.jpg)"]

let items = ['💖', '🧡', '💛', '💚', '💜', '🤍'];

const facil = 9
const normal = 8
const dificil = 7

// window.onload = welcome();



const tamañoGrilla = (nivel, p) =>{
    p.style.width = `calc(26rem/${nivel} - 1.02rem)`;
    p.style.height = `calc(26rem/${nivel} - 1.02rem)`;
}

const crearTablero = (nivel) => {
    boxGame.innerHTML='';
    for (let i = 0 ; i < nivel; i++){
        for (let j = 0; j < nivel; j++){
            const newP = document.createElement('p');
            newP.dataset.x = i
            newP.dataset.y = j
            tamañoGrilla(nivel, newP)
            newP.innerHTML = items[getRandom (0, 6)]
            newP.addEventListener ('click', ()=>{
                alert('funciono')
            } )
            boxGame.appendChild(newP);
            twemoji.parse(document.body);
        }
    }
    startTimer = setInterval(time2, 1000);
};

const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
} 

// const seleccionarItem = (e) =>{
//     let seleccionado = document.querySelector('.seleccionado')
//     if seleccionado{
//       console.log('tiene la clase ') 
//     }else{
//         e.target.classList.add('seleccionado');

//     }
    
// }





// timer

let time = 30;


// setInterval(()=>{
//     if(time > -1){
//         timer.innerHTML = time
//         time--
//     }else{
//         swal("¡Juego terminado!", {
//             buttons: ["Nuevo juego", "Reiniciar"],
//             })
//         return; 
//     }
//     // function stopTimer() {
//     //     clearInterval(time);
       
//       }
     

// }, 1000)


const time2 = () => {
    
    if(time >= 0){
        timer.innerHTML = time
        time--
    }
    else{
        gameOver()
    }
}

const stopTimer = () =>{
   clearInterval(startTimer);
}

