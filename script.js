const d = document
d.body.setAttribute('style', 'background-image: url(images/galaxy.gif); font-family: Montserrat, sans-serif; width: 100%; height: 100vh; margin: 0; overflow: clip;')
const header = d.querySelector('header')
const h1 = d.querySelector('h1')
h1.setAttribute('style', 'color: white; text-align: center;')
const input = d.querySelector('input')
const select = d.querySelector('select')
const button = d.querySelector('button')

const divHeader = d.createElement('div')
const errorP = d.createElement('p')
const errorPDiv = d.createElement('div')
errorPDiv.setAttribute('style', 'display: flex; align-items: center; justify-content: center;')
errorP.setAttribute('style', 'color: #ff6666; background-color: rgba(128, 128, 128, 0.8); padding: 20px; font-weight: bold;')
divHeader.className = 'div-header'
divHeader.setAttribute('style', 'text-align: center; padding: 50px;')
input.setAttribute('style', 'padding: 10px; margin: 5px; width: 300px;')
select.setAttribute('style', 'padding: 10px; margin: 5px; width: 200px; color: gray;')
select.setAttribute('name', 'planets')
button.setAttribute('style', 'padding: 10px; margin: 5px; width: 150px; background-color: rgb(128, 128, 128, 0.9); border-radius: 10px; border: none; color: white;')
divHeader.appendChild(input)
divHeader.appendChild(select)
divHeader.appendChild(button)
header.appendChild(divHeader)

const planets = ['Mercury', 'Venus', 'Earth', 'Moon', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']

const selectedOption = d.querySelector('option')
selectedOption.setAttribute('selected', '')

let options = {}
planets.forEach((element, i) => {
    const option = d.createElement('option')
    options[element] = option

    option.value = element
    option.text = element
    option.className = element
    select.appendChild(option)
});

const mainDiv = d.querySelector('.flex-container')
mainDiv.setAttribute('style', 'background-color: rgba(128, 128, 128, 0.3); display: flex; flex-direction: row; flex-wrap: wrap; align-content: center; justify-content: center; align-items: center; margin: 0 150px;')
const imageDiv = d.querySelector('.flex-item-image')
imageDiv.setAttribute('style', 'display: flex; align-items: center; justify-content: center; height: 100%;')
const descDiv = d.querySelector('.flex-item-description')
descDiv.setAttribute('style', 'display: flex;  flex-direction: column; align-items: center; justify-content: center;')
const image = d.createElement('img')
image.setAttribute('style', 'width: 100%; height: 80%')
const descP = d.createElement('p')
descP.textContent = 'The weight of the object on '
descP.setAttribute('style', 'color: white;')
const planetDesc = d.createElement('span')
planetDesc.setAttribute('style', 'font-weight: bold; color: white;')
const weightN = d.createElement('h1')
weightN.setAttribute('style', 'color: white; background-color: rgba(128, 128, 128, 0.8); border: none; border-radius: 50%; padding: 2.5em 1em; display: inline-block; text-align: center;')

select.addEventListener('change', () => {
    select.style.color = select.value === 'none' ? 'gray' : 'black'
})


button.addEventListener('click', () => {
    const weightKg = !isNaN(input.value) && input.value !== '' ? parseInt(input.value) : null
    while (divHeader.lastChild === errorPDiv) {
        if (!isNaN(input.value) && input.value !== '' && select.value !== 'none') {
            divHeader.removeChild(errorPDiv)
        }
    }
    if (select.value == 'none' && (isNaN(input.value) || input.value === '')) {
        errorP.textContent = 'Please select a planet and enter the mass.'
        errorPDiv.appendChild(errorP)
        divHeader.appendChild(errorPDiv)
        return
    }
    if (select.value == 'none' && (!isNaN(input.value) || input.value !== '')) {
        errorP.textContent = 'Please select a planet'
        errorPDiv.appendChild(errorP)
        divHeader.appendChild(errorPDiv)
        return
    }
    if (select.value !== 'none' && isNaN(input.value)) {
        errorP.textContent = 'Must be a number'
        errorPDiv.appendChild(errorP)
        divHeader.appendChild(errorPDiv)
        return
    }
    if (select.value !== 'none' && input.value === '') {
        errorP.textContent = 'Please enter a number'  
        errorPDiv.appendChild(errorP)
        divHeader.appendChild(errorPDiv)
        return
    }
    if (select.value == 'Earth' && !isNaN(input.value) && input.value !== '') {
        const weight = (weightKg * 9.8).toFixed(2)
        weightN.textContent = weight + ' N'
        planetDesc.textContent = select.value
        image.src = 'images/earth.png'
        imageDiv.appendChild(image)
        descP.appendChild(planetDesc)
        descDiv.append(descP)
        descDiv.appendChild(weightN)
        mainDiv.style.height = '60vh'
        return
    }
    if (select.value == 'Mercury' && !isNaN(input.value) && input.value !== '') {
        const weight = (weightKg * 3.7).toFixed(2)
        weightN.textContent = weight + ' N'
        planetDesc.textContent = select.value
        image.src = 'images/mercury.png'
        imageDiv.appendChild(image)
        descP.appendChild(planetDesc)
        descDiv.append(descP)
        descDiv.appendChild(weightN)
        mainDiv.style.height = '60vh'
        return
    }
    if (select.value == 'Venus' && !isNaN(input.value) && input.value !== '') {
        const weight = (weightKg * 8.87).toFixed(2)
        weightN.textContent = weight + ' N'
        planetDesc.textContent = select.value
        image.src = 'images/venus.png'
        imageDiv.appendChild(image)
        descP.appendChild(planetDesc)
        descDiv.append(descP)
        descDiv.appendChild(weightN)
        mainDiv.style.height = '60vh'
        return
    }
    if (select.value == 'Moon' && !isNaN(input.value) && input.value !== '') {
        const weight = (weightKg * 1.625).toFixed(2)
        weightN.textContent = weight + ' N'
        planetDesc.textContent = select.value
        image.src = 'images/moon.png'
        imageDiv.appendChild(image)
        descP.appendChild(planetDesc)
        descDiv.append(descP)
        descDiv.appendChild(weightN)
        mainDiv.style.height = '60vh'
        return
    }
    if (select.value == 'Mars' && !isNaN(input.value) && input.value !== '') {
        const weight = (weightKg * 3.71).toFixed(2)
        weightN.textContent = weight + ' N'
        planetDesc.textContent = select.value
        image.src = 'images/mars.png'
        imageDiv.appendChild(image)
        descP.appendChild(planetDesc)
        descDiv.append(descP)
        descDiv.appendChild(weightN)
        mainDiv.style.height = '60vh'
        return
    }
    if (select.value == 'Jupiter' && !isNaN(input.value) && input.value !== '') {
        const weight = (weightKg * 24.79).toFixed(2)
        weightN.textContent = weight + ' N'
        planetDesc.textContent = select.value
        image.src = 'images/jupiter.png'
        imageDiv.appendChild(image)
        descP.appendChild(planetDesc)
        descDiv.append(descP)
        descDiv.appendChild(weightN)
        mainDiv.style.height = '60vh'
        return
    }
    if (select.value == 'Saturn' && !isNaN(input.value) && input.value !== '') {
        const weight = (weightKg * 10.44).toFixed(2)
        weightN.textContent = weight + ' N'
        planetDesc.textContent = select.value
        image.src = 'images/saturn.png'
        imageDiv.appendChild(image)
        descP.appendChild(planetDesc)
        descDiv.append(descP)
        descDiv.appendChild(weightN)
        mainDiv.style.height = '60vh'
        return
    }
    if (select.value == 'Uranus' && !isNaN(input.value) && input.value !== '') {
        const weight = (weightKg * 8.69).toFixed(2)
        weightN.textContent = weight + ' N'
        planetDesc.textContent = select.value
        image.src = 'images/uranus.png'
        imageDiv.appendChild(image)
        descP.appendChild(planetDesc)
        descDiv.append(descP)
        descDiv.appendChild(weightN)
        mainDiv.style.height = '60vh'
        return
    }
    if (select.value == 'Neptune' && !isNaN(input.value) && input.value !== '') {
        const weight = (weightKg * 11.15).toFixed(2)
        weightN.textContent = weight + ' N'
        planetDesc.textContent = select.value
        image.src = 'images/neptune.png'
        imageDiv.appendChild(image)
        descP.appendChild(planetDesc)
        descDiv.append(descP)
        descDiv.appendChild(weightN)
        mainDiv.style.height = '60vh'
        return
    }
})