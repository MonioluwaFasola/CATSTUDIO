// const accessKey = "live_g4tf5fJz8dhpBpzJyHvmwELEyeHKWVUWVVDiGcleXVyBIR5RJCjEi1zN7uXtutRG"
const accessKey = "aEfn8IKe4XkMecE4Sir8r2Y2Ocv6_mlvfODHH2RCacs"

const formEl = document.querySelector("form")
const inputEl = document.getElementById("cat-input")
const searchResults = document.querySelector(".cat-results")
const showMore = document.getElementById("show-more")



let inputData = ""
let page = 1; 

async function searchImages () {
    inputData = inputEl.value;
    // const url = `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME  `
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
    const response = await fetch(url)
    const data = await response.json()

    const results = data.results

    if (page === 1) {
        searchResults.innerHTML = ""
    }

    results.map((result)=> {
        const imageWrapper = document.createElement ('div')
        imageWrapper.classList.add("cat-result")
        const image = document.createElement('img')
        image.src = result.urls.small
        image.alt = result.alt_description
        const imageLink = document.createElement('a')
        imageLink.href = result.links.html
        imageLink.target = "_blank"
        imageLink.textContent = result.alt_description

        imageWrapper.appendChild (image)
        imageWrapper.appendChild (imageLink)
        searchResults.appendChild (imageWrapper)
    });

    page++ 
    if (page > 1) {
        showMore.style.display = "block"
    }

}
 

formEl.addEventListener("submit", (event) => {
    event.preventDefault()
    page = 1;
    searchImages()
})

showMore.addEventListener("click", (event) => {
    searchImages()
})