const catPic = document.getElementById('squeezable-cat')
const dropdownBarCats = document.getElementById('animal')
const newPic = document.getElementById('new-pic')
const typeAnimal = document.getElementById('type-animal')
const actionAnimal = document.getElementById('action-animal')

function showCatNames(array) {
    let pic = '';
    array.forEach(element => {
        pic += `<option value='${element.name}'>${element.name}</option>`
    });
    dropdownBarCats.innerHTML = pic
}

let catsArray

async function obtainData() {
    data = await fetch('scripts/cats_list.json')
        .then(data => data.json())
        .then(data => {
            return data
        })
    catsArray = data.surprise
    return data
}

async function init() {
    await obtainData()
    showCatNames(catsArray)
}

init()

function showNewOption(id) {
    // Under development
    newOption = document.getElementById('select-' + id)
    submitButton = newPic
    if (newOption.id === 'select-' + id) {
        newOption.style.display = "block"
    } else {
        submitButton.style.display = "block"
        submitButton.style.margin = "1rem"
        submitButton.style.padding = ".5rem"
    }
}