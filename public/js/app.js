const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');
const weatherIcon = document.querySelector('#weather-icon');

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const location = search.value
    messageOne.textContent = 'Loading...';
    weatherIcon.style.visibility = 'hidden';
    messageTwo.textContent = '';
    fetch('/weather?address=' + location).then((response) => {
    response.json().then((data) => {
        if(data.error){
            messageOne.textContent = data.error;
        } else {
            weatherIcon.src = data.icon;
            weatherIcon.style.visibility = 'visible';
            messageOne.textContent = data.location;
            messageTwo.textContent = data.forecast;
        }
    })
});
})