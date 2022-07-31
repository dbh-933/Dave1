"use strict"

let user1 = {
    name: "David",
    surname: "Bárcena",
    age: 27,
    greet: function(){
        return `Hola, me llamo ${this.name} y tengo ${this.age} años`;
    }


}

console.log(user1.name)
console.log(user1.greet())

class User {
    greet() {
        return `Hola, ¿Cómo estás?`
    }
}


let user2 = new User();
let user3 = new User();

console.log(user2.greet())
console.log(user3.greet())