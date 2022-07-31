"use strict"

const names = [
    "A-Jay",
    "Manuel",
    "Manuel",
    "Eddie",
    "A-Jay",
    "Su",
    "Reean",
    "Manuel",
    "A-Jay",
    "Zacharie",
    "Zacharie",
    "Tyra",
    "Rishi",
    "Arun",
    "Kenton",
  ];
  
  function clean(arr){
    console.log(arr)
    let newArr = []

    for (let name of names){
        if(!newArr.includes(name)){
            newArr.push(name)
        }
    }

    return newArr
  }

  console.log(clean(names))