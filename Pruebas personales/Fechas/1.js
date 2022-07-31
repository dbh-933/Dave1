"use strict"
console.log(Date.now())


const now = Date(2022, 6, 31, 12, 21, 5);

/// console.log(now)

const birthday = new Date(1995, 6, 25, 11, 30, 15)

console.log(birthday)

let birthday1 = new Date(1659261559800)

console.log(birthday1)

/*console.log("Año actual", now.getFullYear());*/

console.log("Año actual", birthday1.getFullYear());
console.log("Mes actual", birthday1.getMonth());
console.log("Día actual", birthday1.getDate());
console.log("Día de la semana", birthday1.getDay())

// El domingo es el día 0.

let dayOfWeek = birthday1.getDay();

if(dayOfWeek ==5 || dayOfWeek ==6){
    console.log(`Estamos en fin de semana!!!`)
} else {
    console.log(`No es fin de semana aún`)
}

console.log("Hora actual", birthday1.getHours());
console.log("Minutos actuales", birthday1.getMinutes());
console.log("Segundos actuales", birthday1.getSeconds());
console.log("Milisegundos actuales", birthday1.getMilliseconds());

console.log("Unix time actual", birthday1.getTime());

/*Modificar fechas, es igual sol,o que en evz de get es set (birthday1.setFullYear)

birthday1.setFullYear(1995);
console.log(birthday1)*/
