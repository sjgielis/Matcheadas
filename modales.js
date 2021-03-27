

// Modal bienvenida

const welcome = () =>{
    swal({
        title: "¡Bienvenid@!",
        text: `En MatcheADAs tu objetivo es juntar tres o mas ítems, del mismo tipo,  ya sea en fial o en columna. Para eso, selecciona un ítem adyacente para intercambiarlo de lugar. Si se forma un grupo, esos ítems se eliminarán y ganarás puntos. Sigue armando grupos de 3 o más antes de que se acabe el tiempo.
        
        CONTROLES

        Click izquierdo: selección
        Enter o espacio: selección
        Flechas o WASD: movimiento o intercambio`,
        button: "A jugar!",
    })
    .then((x) => {
        if(callModal) {
          niveles();
          return callModal = false;
        } else if(!callModal){
          //timer(pause);
        }
      });
      stopTimer()
};
   
// Modal Nuevo Juego

const niveles =() =>{
swal("Nuevo Juego", "Selecciona una dificultad", {
    buttons:{
        facil:{
            text: "Fácil",
            value: "fácil"
        },
        medio:{
            text: "Medio",
            value: "medio"
        },
        dificil:{
            text: "Difícil",
            value: "difícil"
        }
    }
})

.then((value) =>{
    switch (value) {
        case "fácil":
            crearTablero(facil)
            break;

        case "medio":
            crearTablero(normal)
            break;

        case "difícil":
            crearTablero(dificil)
            break;
    }
})
}

// Modal reset 

const resetGame = () =>{
    swal({
        title: '¿Reiniciar Juego?',
        text: '¡Perderás todo tu puntaje acumulado!',
        buttons: {
            cancel: 'Cancelar', 
            confirm:  'Nuevo Juego'
        },
    })
    .then((value) => {
        switch (value) {
            case null:
                startTimer = setInterval(timer, 1000);
            break;
            case true:
                niveles();
            break;
        }
    })
};

// Botones info y reset

info.addEventListener('click', welcome);
reset.addEventListener('click', resetGame);
      

// Modal juego terminado


const gameOver = () =>{
    swal({
        title: '¡Juego Terminado!',
        text: `Puntaje Final: 0`,
        buttons: {
            newGame: {
                text: 'Nuevo Juego',
                value: 'newGame'
            },
            reStart:{
                text:'Reiniciar',
                value: 'reStart'
            }
        },
        
    })
    .then((value) => {
        switch (value) {
            case 'newGame':
                optionWelcome = true;
                niveles();
                break;
            case 'reStart':
                crearTablero(nivel);
                break;
            }
    });
    stopTimer();
};

window.onload = welcome();