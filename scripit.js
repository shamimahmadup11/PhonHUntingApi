
const btn = document.querySelector('.btn-3');
const cards = document.querySelector('.cards');
const inputData = document.getElementById('inputData');
const card= document.querySelector('.card');
let dataArray = []; 

async function fetchData() {
    try {
        const response = await fetch('https://openapi.programming-hero.com/api/phones?search=oppo')
        const data = await response.json();
        dataArray = data.data;
        displayData(dataArray);
    } catch (error) {
        console.log("something went wrong");
    }
}

function displayData(dataArray) {
    cards.innerHTML = "";
    dataArray.forEach(element => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `<div class="img">
            <img src="${element.image}" alt="">
        </div>
        <div class="heading">
            <h1>${element.phone_name}</h1>
        </div>
        <div class="para">
            <p>${element.slug}</p>
        </div>
        <button class="btn-4" data-image="${element.image}" data-name="${element.phone_name}" data-slug="${element.slug}">SHOW DETAILS</button>`
        cards.appendChild(card);
    });
}

fetchData();

btn.addEventListener('click', function () {
    const inputValue = inputData.value.toLowerCase(); // 
    const filteredData = dataArray.filter(element => {
        
        return element.phone_name.toLowerCase().includes(inputValue) || element.slug.toLowerCase().includes(inputValue);
    });
    displayData(filteredData);
});
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('btn-4')) {
        const image = event.target.getAttribute('data-image');
        const name = event.target.getAttribute('data-name');
        const slug = event.target.getAttribute('data-slug');
        // Redirect to details.html with query parameters
        window.location.href = `detail.html?image=${encodeURIComponent(image)}&name=${encodeURIComponent(name)}&slug=${encodeURIComponent(slug)}`;
    }
});




