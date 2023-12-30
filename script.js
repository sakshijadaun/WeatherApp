console.log("Hello");

const API_KEY = "7c328f2c39ed0b62abe8ef94436c4d5a";

async function showWeather(){
    // let latitude = 15.3333;
    // let longitude = 74.0833;
    let city = "hathras";

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    const data = await response.json();
    
    console.log("Weather data: =>" + data);

    let newPara = document.createElement('p');
    newPara.textContent = `${data?.main?.temp.toFixed(2)} *c`;
    document.body.appendChild(newPara);
    
}
