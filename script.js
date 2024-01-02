const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userContainer = document.querySelector(".weather-container");

const grantAccessContainer = document.querySelector(".grant-location-container");
const searchForm = document.querySelector("[data-searchForm]");
const loadingScreen = document.querySelector(".loading-container");
const userInfoContainer = document.querySelector("user-info-cotainer");

//Intially variables needed
let oldTab = userTab;
const API_KEY = "7c328f2c39ed0b62abe8ef94436c4d5a";
old.classList.add("current-Tab");

//function to switch between tabs
function switchTab(newTab){

    if(newTab != oldTab){ //checks that we are on usertab or searchtab
        oldTab.classList.remove("current-tab");
        oldTab = newTab;
        oldTab.classList.add("current-tab");
        
        if(!searchForm.classList.contains("active")){  //checks searchform invisible than make it visible
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");
       
        }else{  //if visible then make it invisble and and make a function to your weather tab
                //and check local storage first for coordinates,if we haves saved them there
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");
            getFromSessionStorage();
        }
    } 
}

//this addevent listener will work when click on userTab and call switchTab function
userTab.addEventListener("click",() => {
    switchTab(userTab);
});

//this addevent listener will work when click on searchtab and call switchTab function
searchTab.addEventListener("click", () => {
    switchTab(searchTab);
});

//function to check if coordinates are already present in session storage
function getFromSessionStorage(){
    const localCoordinates = sessionStorage.getItem("user-coordinates");
    if(!localCoordinates){ //If localcoordinates will not available then grant location acess page should be appear
        grantAccessContainer.classList.add("active");
   
    }else{  //store cordinates and pass to the fetchUserWeatherInfo which will call the api based on cordinates.
       const coordinates = Json.parse(localCoordinates);
       fetchUserWeatherInfo(coordinates);
    }
}

//function
async function fetchUserWeatherInfo(coordinates){
    const {lat,lon} = coordinates;
    grantAccessContainer.classList.remove("active"). //make grantAcessContainer invisible
    loadingScreen.classList.add("active");   //Make loader visible


    //API call
    try{
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`
        );
        const data = await response.json(); //convert into json object

        loadingScreen.classList.remove("active");  //api gave data now remove loading Screen
        userInfoContainer.classList.add("active"); //visible the weather container
        
        renderWeatherInfo(data);
    }catch(err){
        loadingScreen.classList.remove("active");
        alert("Error Found",err);
    }
}

//function which will render api response onto UI
function renderWeatherInfo(weatherInfo){

    //fetch element
    const cityName = document.querySelector("[data-cityName]");
    const countryIcon = document.querySelector("[data-countryIcon]");
    const desc = document.querySelector("[data-weatherDesc]");
    const weatherIcon = document.querySelector("[data-weatherIcon]");
    const temp = document.querySelector("[data-temp]");
    const windspeed = document.querySelector("[data-windspeed]");
    const humidity = document.querySelector("[data-humidity]");
    const cloudiness = document.querySelector("[data-cloudiness]");

    //fetch values from weatherInfo object and put it UI elements
    cityName.innerText = weatherInfo?.name;
    countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
    desc.innerText = weatherInfo?.weather?.[0]?.description;  //[0] used because weather is an array
    weatherIcon.src = `https://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
    temp.innerText = weatherInfo?.main?.temp;
    windspeed.innerText = weatherInfo?.wind?.speed;
    humidity.innerText = weatherInfo?.main?.humidity;
    cloudiness.innerText = weatherInfo?.clouds?.all;
}

//function to access current location
function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }else{
        alert("No Support for geoLocation");
    }
}

//function to get latitude and longitude and store in sessionStorage then call fetchUserWeatherInfo
function showPosition(position){
    const userCoordinates = {
        lat : position.coords.latitude,
        lon : position.coords.longitude,
    }

    sessionStorage.setItem("user-coordinates",JSON.stringify(userCoordinates));
    fetchUserWeatherInfo(userCoordinates);
}

//event listener on grant acess button
const grantAccessButton = document.querySelector("[data-grantAccess]");
grantAccessButton.addEventListener("click",getLocation);








































// console.log("Hello");

// const API_KEY = "7c328f2c39ed0b62abe8ef94436c4d5a";

// function renderWeatherInfo(data){
//     let newPara = document.createElement('p');
//     newPara.textContent = `${data?.main?.temp.toFixed(2)} *c`;
//     document.body.appendChild(newPara);

// }
// async function showWeather(){
  
//     try{
//         let city = "london";

//         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
//         const data = await response.json();
        
//         console.log("Weather data: =>" , data);
        
//         renderWeatherInfo(data);
//     }catch(err){
//         console.log("Error Found" , err);
//     }
  
    
// }
