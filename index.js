const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');

search.addEventListener('click', () => {

    const APIkey = '82e08384c2422d0ad03a71e712eff919';
    const city = document.querySelector('.search-box input').value;

    if (city ==='')
    return;

    fetch(`https://api.openweargermap.org/data/2.5/weather?q=${city}&
    units=metric&appid=${APIkey}`).then(response => response .json()).then
    (json => {
        
        if(json.cmd === '404'){
            container.style.height = '400px';
            weatherBox.style.display = 'none';
            weatherDetails.style.display = 'none';
            error404.style.display = 'block';
            error404.classList.add('fadeIn')
            return;
        }

        error404.style.display - 'none';
        error404.classList.remove('fadeIn');

        const image = docuemnt.querySelector('.weather-box.img');
        const temperature = document.querySelector('.weather-box .temperature');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-box .humidity span')
        const wind = document.querySelector('.weather-box .wind span')

        switch (json.weather[0].main){
            case 'Clear':
                image.src = 'images/clear.png';
                break;
            
            case 'Cloud':
                image.src = 'images/cloud.png';
                break;
            
            case 'Mist':
                image.src = 'images/mist.png';
                break;
            
            case 'Rain':
                image.src = 'images/rain.png';
                break;

            case 'Clear':
                image.src = 'images/clear.png';
                break;

        }

    })
    

})