const selection = document.querySelector(".recipe-card__selection");
const title = document.querySelector(".recipe-card__recipe-title");
const image = document.getElementById("recipe-image");
const ingredients = document.querySelector(".recipe-card__ingredients");
const directions = document.querySelector(".recipe-card__directions");

const recipeFiles = [
  "data/corn-souffle.json",
  "data/peach-dumplings.json",
  "data/honey-bun-cake.json",
];

let recipeName = "";

function loadRandomRecipe() {
  // Selects a random .json file from the array
  return recipeFiles[Math.floor(Math.random() * recipeFiles.length)];
}

const recipeJSON = async (file) => {
  // Loads the file
  const response = await fetch(file);
  const recipe = await response.json();
  formatRecipe(recipe);
};

// const recipeJSON = (file) => {
//   const response = fetch(file)
//     .then((response) => response.json())
//     .then((recipe) => {
//       formatRecipe(recipe);
//     });
// };

function formatRecipe(recipe) {
  let ingredientsBody = "<ul>";
  let directionsBody = "<ul>";

  //   let recipeName = `${recipe.name}`;
  let ingredientsHeading = `<h2>Ingredients</h2>`;
  let directionsHeading = `<h2>Directions</h2>`;

  // Iterates throughs the element/steps from the ingredients array
  recipe.ingredients.forEach(
    (element) => (ingredientsBody += `<li>${element}</li>`)
  );
  ingredientsBody += `</ul>`;

  // Iterates throughs the element/steps from the directions array
  recipe.directions.forEach((element) => (directionsBody += `<li>${element}</li>`));
  directionsBody += `</ul>`;

  title.innerHTML = recipe.name;
  image.src = recipe.image;

  ingredients.innerHTML = `${ingredientsHeading} ${ingredientsBody}`;
  directions.innerHTML = `${directionsHeading} ${directionsBody}`;
}

selection.addEventListener("change", (event) => {
  let recipe = "";

  switch (event.target.value) {
    case "corn-souffle":
      recipe = "data/corn-souffle.json";
      break;
    case "peach-dumplings":
      recipe = "data/peach-dumplings.json";
      break;
    case "honey-bun-cake":
      recipe = "data/honey-bun-cake.json";
      break;
    case "kfc-original-secret-chicken":
      recipe = "data/kfc-original-secret-chicken.json";
      break;
    default:
      recipe = "";
  }

  recipeJSON(recipe);
});

// async function populateRecipe(file) {
//   const response = await fetch(file);
//   const recipe = await response.text();
//   console.log(recipe);
//   return recipe;
// }

recipeName = loadRandomRecipe();
recipeJSON(recipeName);
