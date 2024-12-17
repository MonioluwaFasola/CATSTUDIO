const accessKey = "live_g4tf5fJz8dhpBpzJyHvmwELEyeHKWVUWVVDiGcleXVyBIR5RJCjEi1zN7uXtutRG"


const formEl = document.querySelector("form")
const inputEl = document.getElementById("cat-input")
const searchResults = document.querySelector(".cat-results")
const showMore = document.getElementById("show-more")



let inputData = ""
let page = 1; 

function searchImages () {
    inputData = inputE1.value;
    const url = `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME`
}
