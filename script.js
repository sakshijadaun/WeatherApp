const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userContainer = document.querySelector(".weather-container");

const grantAccessContainer = document.querySelector(".grant-location-container");
const searchForm = document.querySelector("[data-searchForm]");
const loadingScreen = document.querySelector(".loading-container");
const userInfoContainer = document.querySelector("user-info-cotainer");

//Intially variables needed
let oldTab = userTab;
const API_Key = "";
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
})

//this addevent listener will work when click on searchtab and call switchTab function
searchTab.addEventListener("click", () => {
    switchTab(searchTab);
})





































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
