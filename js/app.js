const API_KEY = `f5c3c037a1a1140c0ea0f5ad35a44e96`;
const searchTemperature = () => {
    const city = document.getElementById('city-input').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
}

const displayTemperature = tepmerature => {
    console.log(tepmerature);
}