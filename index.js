//Empty Array
let allDrinks = []

//Fetches
const proxyURL = "https://enigmatic-island-73896.herokuapp.com/"

function grabList(alcohol) {
    fetch(proxyURL + `www.thecocktaildb.com/api/json/v1/1/filter.php?i=${alcohol}`)
        .then((resp) => resp.json())
        .then((data) =>
        {
            allDrinks = (data.drinks)
            console.log(allDrinks)
            renderDrinks(allDrinks)
        })
}


// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    let list = document.querySelector('#alcohols')
    document.querySelector('#alcohols').addEventListener('change', () => grabList(list.value))
})

//Rendering List
function renderDrinks(drinks) {
    let drinksOl = document.querySelector('#drink-list')
    drinks.forEach(element => {
        let li = document.createElement('li')
        li.textContent = element.strDrink
        drinksOl.appendChild(li)
        let img = document.createElement('img')
        img.src = drinks.strDrinkThumb
        li.appendChild(img)
    })
}