"use strict";

  const letras = 
[ "T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B",   "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"]

/*let numero = 
no definas un solo número, ya que solo mirará ese núemro en concreto

function numeroDNI(numero){
  //pide al usuario que introduzca su dni
var numero = parseInt(prompt("Introduzca su dni por favor"));

if(numero>"99999999"){
//si el numero es mayor pues se le comunica al usuario
alert("El dni introducido no es valido");
}
else{
//usuario inserta la letra del dni
var letra_dni = prompt("Introduzca la letra de su dni").toUpperCase();
}
}


console.log(numero, letra_dni)*/

function validate(dni){
try{
  if(typeof dni !== "string" || dni.length !==10){
    throw new Error("Formato incorrecto")
  }

  let dniArr = dni.split("-")

  if(dniArr.length !== 2){
    throw new Error("La letra debe ir separada con un guión")
  }


  console.log(dniArr)

  let [numeros, letra] = dniArr

 if(isNaN(numeros) || numeros.length !== 8){
  throw new Error("La primera parte deben ser 8 números")
 
}

let letraIndex = numeros % 23
console.log(letras[letraIndex])

if (letra.toUpperCase !== letras[letraIndex]){
  throw new Error("La letra coincide")
}

} catch(e){
  console.error("Se ha producido un error : " + e.message)
}

}

validate("72175261-l")