"use sctrict"

let nombre = "David";

let edad = 27;

if (edad <= 30){
    string = `A ${nombre} le corresponde el descuento juvenil (menores de 30 años).`
    console.log(string)
} else if (edad <= 12){
    string = `A ${nombre} le corresponde el descuento infantil (menores de 12 años).`
    console.log(string)
} else if (edad >= 60){
    string = `A ${nombre} le corresponde el descuento de jubilados (mayores de 60 años).`
    console.log(string)
} else if (edad <= 30){
    string = `hello`;
}  else {
    console.log(`A ${nombre} no le corresponde ningún descuento`)
} 
