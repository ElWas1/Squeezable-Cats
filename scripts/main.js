const catPic = document.getElementById('squeezable-cat')

function showCatNames(array) {
    let pic = '';
    array.forEach(element => {
        pic = `<select>
        <option value='${element.name}'></option></select>`
    });
    dropdownBarCats.innerHTML = pic
}

let catsArray

async function obtainData() {
    data = await fetch('./cats_list.json')
    .then(data => data.json())
    .then(data => {
        return data
    })
    catsArray = data.cats
    return data
}

async function init() {
    await obtainData()
    showCatNames(catsArray)
}

init()