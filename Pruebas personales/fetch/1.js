async function main(){
   const response = await fetch('/texto.txt');

   console.log(response);
}

main();