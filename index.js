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
    let li = document.createElement('li')
    let card = e.target.querySelector("#no-numbers")
    li.innerText = review
    card.appendChild(li)
}

//Rendering List
function renderDrinks(drinks) {
    let drinksOl = document.querySelector('#drink-list')
    drinksOl.innerHTML = ""
    drinks.forEach(element => {
        let li = document.createElement('li')
        li.id = "drink"
        li.textContent = element.strDrink
        drinksOl.appendChild(li)
        let img = document.createElement('img')
        img.id = "pic"
        img.src = element.strDrinkThumb
        li.appendChild(img)
        let comment = document.createElement('form')
        let label = document.createElement('label')
        let input = document.createElement('input')
        let submit = document.createElement('input')
        let reviews = document.createElement('ul')
        reviews.id = "no-numbers"
        comment.classList.add("comment")
        submit.type = "submit"
        submit.value = "Post"
        submit.id = "button"
        input.id = "review"
        input.type = "text"
        input.placeholder = "Type here!"
        label.innerHTML = "Leave a Review:  "
        li.appendChild(comment).appendChild(label)
        comment.appendChild(input)
        comment.appendChild(submit)
        comment.appendChild(reviews)
        comment.addEventListener("submit", handleComment)
    })
}
