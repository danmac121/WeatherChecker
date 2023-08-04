// New Objectives
// Retrieve the required data from the api
// change text contents accordingly
// will have to figure out moment and doing the time stuff, may need to build a for loop.

let btnList = document.getElementById("previousSearches")

let search = document.getElementById("search")
let todayTemp = document.getElementById("todayTemp")
let todayWind = document.getElementById("todayWind")
let todayHumid = document.getElementById("todayHumid")
search.addEventListener("click" , function(event){

if (event.target.matches("button")) {
    let userText = document.getElementById("userText").value;


fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${userText}&limit=5&appid=61a660a594379343aaaaa4c93e1f2fc8`, {
 
})
  .then(response => response.json()) 
  .then(data =>{
    let firstCity = data[0]
    console.log(data)
    console.log(firstCity.lat)
    console.log(firstCity.lon)
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${firstCity.lat}&lon=${firstCity.lon}&appid=61a660a594379343aaaaa4c93e1f2fc8`)
  })

  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let kelvin = ((data.list[0].main.temp - 273.15) * 9/5 +32)
    let windy = data.list[0].wind.speed
    let humid = data.list[0].main.humidity
    todayTemp.textContent = ("Temp: " + kelvin.toFixed(2) + "°F")
    todayWind.textContent = ("Wind: " + windy + " MPH")
    todayHumid.textContent = ("Humidity: " + humid + " %")
    console.log(data)
    console.log(kelvin);
    console.log(windy);
    console.log(humid);
  });
  
  makeButtons();
}
})


function makeButtons(){
        let userText = document.getElementById("userText").value;
        let newBtn = document.createElement("button")
        btnList.appendChild(newBtn)
        newBtn.classList.add("newBtn")
        newBtn.textContent = (userText)
    }

function todaysWeather(){

}