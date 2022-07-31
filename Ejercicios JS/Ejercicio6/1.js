"use strict"


let min = 0;

let max = 100;

//let tries = 5;

function getRandom (minNum, maxNum){
    return Math.round(Math.random() * (maxNum - minNum) + minNum)

}

function game(min, max, tries){
    let pass = getRandom(min, max)

    console.log(pass)

    for (let i = 0; i < tries; i++){
        let userPass = +prompt("Introduce un número entre el mínimo y el máximo")

        if(userPass === pass){
            alert("¡Has ganado!")
            return
        
        }


        if(userPass < pass){
            alert("El número introducido es menor que la contraseña")
        }
        if(userPass > pass){
            alert("El número introducido es mayor que la contraseña")
        } 
    }

    alert(`Has perdido. El número buscado era el ${pass}`)
}

game(0, 100, 5)