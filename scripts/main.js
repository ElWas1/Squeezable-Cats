const catPic = document.getElementById('squeezable-cat')
const dropdownBarAnimals = document.getElementById('animal')
const newPic = document.getElementById('new-pic')
const typeAnimal = document.getElementById('type')
const actionAnimal = document.getElementById('action')

function showAnimals(array) {
    let pic = `<option value='null'>-- Select --</option>`;
    array.forEach(element => {
        pic += `<option value='${element.name}' onfocus="showType('${element.name}')">${element.name}</option>`
    });
    dropdownBarAnimals.innerHTML = pic
    typeAnimal.innerHTML = pic
}

function showTypes(array) {
    let pic = `<option value='null'>-- Select --</option>`;
    array.forEach(element => {
        pic += `<option value='${element.name}' onfocus="showType('${element.name}')">${element.name}</option>`
    });
    typeAnimal.innerHTML = pic
}

function showActions(array) {
    let pic = `<option value='null'>-- Select --</option>`;
    array.forEach(element => {
        pic += `<option value='${element.name}' onfocus="showType('${element.name}')">${element.name}</option>`
    });
    actionAnimal.innerHTML = pic
}

let animalsArray
let typesArray
let actionsArray

async function obtainData() {
    data = await fetch('scripts/cats_list.json')
        .then(data => data.json())
        .then(data => {
            return data
        })
    animalsArray = data.animals
    actionsArray = data.actions
    return data
}

async function init() {
    await obtainData()
    showAnimals(animalsArray)
    showActions(actionsArray)
}

init()

function showNewOption(id) {
    submitButton = newPic
    if (id !== null) {
        newOption = document.getElementById('select-' + id)
        newOption.style.display = "block"
    } else {
        submitButton.style.display = "block"
        submitButton.style.margin = "1rem"
        submitButton.style.padding = ".5rem"
    }
}