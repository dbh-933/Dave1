"use strict"

let people = {
    Maria: 20,
    Ana: 14,
    Luis: 16,
    Pepe: 35,
    Manuel: 50,
    Teresa: 12,
    David: 26,
    Irene: 23,
    Alex: 10,
  };

console.log(people)

function checkAge(obj){
  console.log(obj)
  for(let name in obj){
    let age = obj[name]
    console.log(name, age)
    if (age < 18){
      console.log(`${name} es menor de edad`)
    } else {
      console.log(`${name} es mayor de edad`)
    }
  }
}

checkAge(people)

function checkTernario(obj){
  for (let name in obj){
    let age = obj[name]

    console.log(`${name} es ${age < 18? "menor" : "mayor"} de edad`)
  }
}

checkTernario(people)