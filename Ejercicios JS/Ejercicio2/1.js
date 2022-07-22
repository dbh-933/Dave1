"use sctrict"

let nombre1 = "David";

let nombre2 = "Lucía";

let nombre3 = "Carlos";

let nombre4 = "Alicia"

let edad1 = 26;

let edad2 = 12;

let edad3 = 35

let edad4 = 65



if (edad1 <= 30){
    string = `A ${nombre1} le corresponde el descuento juvenil (menores de 30 años).`
    console.log(string)
}

if (edad2 <= 12){
    string = `A ${nombre2} le corresponde el descuento infantil (menores de 12 años).`
    console.log(string)
}

if (edad4 >= 60){
    string = `A ${nombre4} le corresponde el descuento de jubilados (mayores de 60 años).`
    console.log(string)
}

if (edad3 <= 30){
    string = `hello`;
}  else {string= `A ${nombre3} no le corresponde ningún descuento`
    console.log(string)
} 
