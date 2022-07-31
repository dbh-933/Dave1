"use strict";

/*usar funcion printTime { secondsCounter}*/

/*Intervalos de tiempo y usar Math.floor para redondear*/

let secondsCounter = 0;

function printTime(){
    secondsCounter += 5
    console.log(formatTime(secondsCounter))
    
}

function formatTime(time){
    let seconds = secondsCounter % 60;

    let minutes = Math.floor(secondsCounter /60)

    let totalMinutes = minutes % 60

    let totalHour = Math.floor(minutes / 60)

    let hours = totalHour % 24

    let days = Math.floor(totalHour/24)

    return `Han pasado ${days} día${s(days)}, ${hours} hora${s(hours)}, ${minutes} minuto${s(minutes)} y ${seconds} segundo${s(seconds)}`
}

let timeInterval = setInterval (printTime, 5000)

function stop(num, letter){
    let ms = num;
    switch(letter){
        case "D": //horas
            ms *= 24
        case "H": //minutos
            ms *= 60
        case "M": // segundos
            ms *= 60
        case "S": //milisegundos
            ms *= 1000
    }
    setTimeout(() =>{
        clearInterval(timeInterval)
    console.log("El programa se ha detenido")
}, ms)
}

stop(17, "S")


function s(num){
    if (num !== 1){
        return "s"
    } else{
        return ""
    }
}