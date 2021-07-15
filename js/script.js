function listRecipes() {
  fetch("https://www.themealdb.com/api/json/v1/1/search.php?s")
    .then(response => response.json())
    .then(data => {
      if (data.meals === null) {
        document.getElementById("recipes-list").innerHTML = "No results found";
      } else {
        data.meals.forEach((meal) => {
          document.getElementById("recipes-list").innerHTML += `
            <div class="col recipe-box">
              <div class="card" style="width: 10rem;" data-bs-toggle="modal" data-bs-target="#modal-${meal.idMeal}">
              <img src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strMeal} image">
              <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>              
              </div>
            </div>
            <div class="modal fade" id="modal-${meal.idMeal}" tabindex="-1" aria-labelledby="label-${meal.idMeal}" aria-hidden="true">
              <div class="modal-dialog modal-dialog-scrollable" style="max-width: 60%;">
                <div class="modal-content">
                  <div class="modal-header">
                    <h3 class="modal-title" id="exampleModalLabel">${meal.strMeal}</h3>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <h5 id="strMeal">Ingredients:</h5>
                    <span>
                      ${meal.strIngredient1}: ${meal.strMeasure1}<br>
                      ${meal.strIngredient2}: ${meal.strMeasure2}<br>
                      ${meal.strIngredient3}: ${meal.strMeasure3}<br>
                      ${meal.strIngredient4}: ${meal.strMeasure4}<br>
                      ${meal.strIngredient5}: ${meal.strMeasure5}<br>
                      ${meal.strIngredient6}: ${meal.strMeasure6}<br>
                      ${meal.strIngredient7}: ${meal.strMeasure7}<br>
                      ${meal.strIngredient8}: ${meal.strMeasure8}<br>
                      ${meal.strIngredient9}: ${meal.strMeasure9}<br>
                      ${meal.strIngredient10}: ${meal.strMeasure10}<br>
                      ${meal.strIngredient11}: ${meal.strMeasure11}<br>
                      ${meal.strIngredient12}: ${meal.strMeasure12}<br>
                      ${meal.strIngredient13}: ${meal.strMeasure13}<br>
                      ${meal.strIngredient14}: ${meal.strMeasure14}<br>
                      ${meal.strIngredient15}: ${meal.strMeasure15}<br>
                      ${meal.strIngredient16}: ${meal.strMeasure16}<br>
                      ${meal.strIngredient17}: ${meal.strMeasure17}<br>
                      ${meal.strIngredient18}: ${meal.strMeasure18}<br>
                      ${meal.strIngredient19}: ${meal.strMeasure19}<br>
                      ${meal.strIngredient20}: ${meal.strMeasure20}
                    </span>
                    <br><br>
                    <h5>Instructions</h5>
                    <span>
                      <p id="strInstructions">${meal.strInstructions}</p>
                    </span>
                    <br>
                    <br>
                    <img src="${meal.strMealThumb}" alt="${meal.strMeal} image" width="50%">
                    <br><br>
                    <a href="${meal.strYoutube}" class="btn yt-btn" target="_blank">See on YouTube</a>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
          `
        })
      }
    })
}

function searchByName() {
  let search = window.location.search.slice(1).split("=");
  search = search[1];
  fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + search)
    .then(response => response.json())
    .then((data) => {
      if (data.meals === null) {
        document.getElementById("recipes-list").innerHTML = "No results found";
      } else {
        data.meals.forEach((meal) => {
          document.getElementById("recipes-list").innerHTML += `
            <div class="col recipe-box">
              <div class="card" style="width: 10rem;" data-bs-toggle="modal" data-bs-target="#modal-${meal.idMeal}">
              <img src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strMeal} image">
              <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>              
              </div>
            </div>
            <div class="modal fade" id="modal-${meal.idMeal}" tabindex="-1" aria-labelledby="label-${meal.idMeal}" aria-hidden="true">
              <div class="modal-dialog modal-dialog-scrollable" style="max-width: 60%;">
                <div class="modal-content">
                  <div class="modal-header">
                    <h3 class="modal-title" id="exampleModalLabel">${meal.strMeal}</h3>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <h5 id="strMeal">Ingredients:</h5>
                    <span>
                      ${meal.strIngredient1}: ${meal.strMeasure1}<br>
                      ${meal.strIngredient2}: ${meal.strMeasure2}<br>
                      ${meal.strIngredient3}: ${meal.strMeasure3}<br>
                      ${meal.strIngredient4}: ${meal.strMeasure4}<br>
                      ${meal.strIngredient5}: ${meal.strMeasure5}<br>
                      ${meal.strIngredient6}: ${meal.strMeasure6}<br>
                      ${meal.strIngredient7}: ${meal.strMeasure7}<br>
                      ${meal.strIngredient8}: ${meal.strMeasure8}<br>
                      ${meal.strIngredient9}: ${meal.strMeasure9}<br>
                      ${meal.strIngredient10}: ${meal.strMeasure10}<br>
                      ${meal.strIngredient11}: ${meal.strMeasure11}<br>
                      ${meal.strIngredient12}: ${meal.strMeasure12}<br>
                      ${meal.strIngredient13}: ${meal.strMeasure13}<br>
                      ${meal.strIngredient14}: ${meal.strMeasure14}<br>
                      ${meal.strIngredient15}: ${meal.strMeasure15}<br>
                      ${meal.strIngredient16}: ${meal.strMeasure16}<br>
                      ${meal.strIngredient17}: ${meal.strMeasure17}<br>
                      ${meal.strIngredient18}: ${meal.strMeasure18}<br>
                      ${meal.strIngredient19}: ${meal.strMeasure19}<br>
                      ${meal.strIngredient20}: ${meal.strMeasure20}
                    </span>
                    <br><br>
                    <h5>Instructions</h5>
                    <span>
                      <p id="strInstructions">${meal.strInstructions}</p>
                    </span>
                    <br>
                    <br>
                    <img src="${meal.strMealThumb}" alt="${meal.strMeal} image" width="50%">
                    <br><br>
                    <a href="${meal.strYoutube}" class="btn yt-btn" target="_blank">See on YouTube</a>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
          `
        })
      }
    })
}

function verify() {
  if (window.location.search === "") {
    listRecipes();
  } else {
    searchByName();
  }
}

window.onload = verify();