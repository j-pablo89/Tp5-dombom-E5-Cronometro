// 5- Realizar una web con un cronómetro, que tenga las opciones de iniciar, reset (volver el cronómetro a 0) y pausar.

let iniciar = document.getElementById('botonIniciar');
let pausar = document.getElementById('botonPausar');
let reset = document.getElementById('botonReset');
let tiempo = document.getElementById('timer');
let hora = 0;
let minuto = 0;
let segundo = 0;
let decima = 0;
iniciar.addEventListener('click',iniciarCronometro);
pausar.addEventListener('click',pausarCronometro);
reset.addEventListener('click',resetCronometro);

function iniciarCronometro(){
    intervalo = setInterval(() => {
        decima++;
        if(decima < 10){
            decima = `0${decima}`;
            segundo = (segundo < 1 ) ? `00`: segundo;
            minuto = (minuto < 1 )? `00`: minuto;
            hora = (hora < 1 )? `00`: hora;
            
        }
        if(decima == 100){
            decima = 0;
            segundo++;
            if(segundo < 10){
            segundo = `0${segundo}`;
        }
        }
        if(segundo == 60){
            segundo = 0;
            minuto++;
            if(minuto < 10){
            minuto = `0${minuto}`;
        }
        }
        if(minuto == 60){
            minuto = 0;
            hora++;
            if(hora < 10){
                hora = `0${hora}`;
        }
        }
        tiempo.innerHTML = `${hora}:${minuto}:${segundo}:${decima}`;
    },10);
}

function pausarCronometro(){
    clearInterval(intervalo);
}

function resetCronometro(){
    clearInterval(intervalo);
    decima = `00`;
    segundo = `00`;
    minuto = `00`;
    hora = `00`;
    tiempo.innerHTML = `${hora}:${minuto}:${segundo}:${decima}`;
}
