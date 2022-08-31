const from = document.querySelector("form.search");
const app = document.querySelector("section.app");

const doSearch = async (e) => {
  e.preventDefault();
  console.log("se envió el formulario");
};

form.addEventListener("submit", doSearch);
