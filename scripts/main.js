const catPic = document.getElementById('squeezable-cat')
const dropdownBarCats = document.getElementById('animal')
const newPic = document.getElementById('new-pic')

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