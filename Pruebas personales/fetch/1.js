async function main() {
  const response = await fetch("/data.json");
  try {
    /*console.log(response);
  console.log(response.status);*/
    if (response.ok) {
      const data = await response.json();

      console.log(data[1].surname);
    } else {
      console.log("hubo un error en la petición.");
    }
  } catch (error) {
    console.log(error.message);
  }
}

main();
