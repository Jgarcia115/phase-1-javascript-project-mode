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

//Event Handler
function handleComment(e) {
    e.preventDefault()
    let review = e.target.review.value
    let p = document.createElement('p')
    let card = document.querySelector("#drink")
    p.innerText = review
    card.appendChild(p)
}

//Rendering List
function renderDrinks(drinks) {
    let drinksOl = document.querySelector('#drink-list')
    drinks.forEach(element => {
        let li = document.createElement('li')
        li.id = "drink"
        li.textContent = element.strDrink
        drinksOl.appendChild(li)
        let img = document.createElement('img')
        img.src = element.strDrinkThumb
        li.appendChild(img)
        let comment = document.createElement('form')
        let label = document.createElement('label')
        let input = document.createElement('input')
        let submit = document.createElement('input')
        comment.id = "comment"
        submit.type = "submit"
        submit.value = "Post"
        submit.id = "button"
        input.id = "review"
        input.type = "text"
        input.placeholder = "Type here!"
        label.innerHTML = "Leave Review:  "
        li.appendChild(comment).appendChild(label)
        comment.appendChild(input)
        comment.appendChild(submit)
        document.querySelector('form').addEventListener("submit", handleComment)

    })
}
