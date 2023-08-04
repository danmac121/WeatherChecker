// New Objectives
// Retrieve the required data from the api
// change text contents accordingly
// will have to figure out moment and doing the time stuff, may need to build a for loop.

let btnList = document.getElementById("previousSearches")
let currentCity = document.getElementById("currentCity")
let search = document.getElementById("search")
let todayTemp = document.getElementById("todayTemp")
let todayWind = document.getElementById("todayWind")
let todayHumid = document.getElementById("todayHumid")

let firstDate = document.getElementById("firstDate")
let firstIcon = document.getElementById("firstIcon")
let firstTemp = document.getElementById("firstTemp")
let firstWind = document.getElementById("firstWind")
let firstHumid = document.getElementById("firstHumid")

let secondDate = document.getElementById("secondDate")
let secondIcon = document.getElementById("secondIcon")
let secondTemp = document.getElementById("secondTemp")
let secondWind = document.getElementById("secondWind")
let secondHumid = document.getElementById("secondHumid")

let thirdDate = document.getElementById("thirdDate")
let thirdIcon = document.getElementById("thirdIcon")
let thirdTemp = document.getElementById("thirdTemp")
let thirdWind = document.getElementById("thirdWind")
let thirdHumid = document.getElementById("thirdHumid")

let fourthDate = document.getElementById("fourthDate")
let fourthIcon = document.getElementById("fourthIcon")
let fourthTemp = document.getElementById("fourthTemp")
let fourthWind = document.getElementById("fourthWind")
let fourthHumid = document.getElementById("fourthHumid")

let fifthDate = document.getElementById("fifthDate")
let fifthIcon = document.getElementById("fifthIcon")
let fifthTemp = document.getElementById("fifthTemp")
let fifthWind = document.getElementById("fifthWind")
let fifthHumid = document.getElementById("fifthHumid")


search.addEventListener("click" , function(event){

if (event.target.matches("button")) {
    let userText = document.getElementById("userText").value;


fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${userText}&limit=5&appid=61a660a594379343aaaaa4c93e1f2fc8`, {
 
})
  .then(response => response.json()) 
  .then(data =>{
    let firstCity = data[0]
    
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${firstCity.lat}&lon=${firstCity.lon}&appid=61a660a594379343aaaaa4c93e1f2fc8`)
  })

  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let kelvin = ((data.list[0].main.temp - 273.15) * 9/5 +32)
    let windy = data.list[0].wind.speed
    let humid = data.list[0].main.humidity
    let todaysDate = data.list[0].dt
    currentCity.textContent = (userText + " " + moment(todaysDate, "X").format("l"))
    todayTemp.textContent = ("Temp: " + kelvin.toFixed(2) + "°F")
    todayWind.textContent = ("Wind: " + windy + " MPH")
    todayHumid.textContent = ("Humidity: " + humid + " %")
    console.log(data)
    
    firstDay = moment(data.list[7].dt, "X").format("l")
    tempOne = ((data.list[7].main.temp - 273.15) * 9/5 +32)
    windOne = data.list[7].wind.speed
    humidOne = data.list[7].main.humidity
    firstDate.textContent = firstDay
    firstTemp.textContent = ("Temp: " + tempOne.toFixed(2) + "°F")
    firstWind.textContent = ("Wind: " + windOne + "MPH")
    firstHumid.textContent = ("Humidity: " + humidOne + " %")

    secondDay = moment(data.list[15].dt, "X").format("l")
    tempOne = ((data.list[15].main.temp - 273.15) * 9/5 +32)
    windOne = data.list[15].wind.speed
    humidOne = data.list[15].main.humidity
    secondDate.textContent = secondDay
    secondTemp.textContent = ("Temp: " + tempOne.toFixed(2) + "°F")
    secondWind.textContent = ("Wind: " + windOne + "MPH")
    secondHumid.textContent = ("Humidity: " + humidOne + " %")

    thirdDay = moment(data.list[23].dt, "X").format("l")
    tempThree = ((data.list[23].main.temp - 273.15) * 9/5 +32)
    windThree = data.list[23].wind.speed
    humidThree = data.list[23].main.humidity
    thirdDate.textContent = thirdDay
    thirdTemp.textContent = ("Temp: " + tempThree.toFixed(2) + "°F")
    thirdWind.textContent = ("Wind: " + windThree + "MPH")
    thirdHumid.textContent = ("Humidity: " + humidThree + " %")

    fourthDay = moment(data.list[31].dt, "X").format("l")
    tempFour = ((data.list[31].main.temp - 273.15) * 9/5 +32)
    windFour = data.list[31].wind.speed
    humidFour = data.list[31].main.humidity
    fourthDate.textContent = fourthDay
    fourthTemp.textContent = ("Temp: " + tempFour.toFixed(2) + "°F")
    fourthWind.textContent = ("Wind: " + windFour + "MPH")
    fourthHumid.textContent = ("Humidity: " + humidFour + " %")

    fifthDay = moment(data.list[39].dt, "X").format("l")
    tempFive = ((data.list[39].main.temp - 273.15) * 9/5 +32)
    windFive = data.list[39].wind.speed
    humidFive = data.list[39].main.humidity
    fifthDate.textContent = fifthDay
    fifthTemp.textContent = ("Temp: " + tempFive.toFixed(2) + "°F")
    fifthWind.textContent = ("Wind: " + windFive + "MPH")
    fifthHumid.textContent = ("Humidity: " + humidFive + " %")

    

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