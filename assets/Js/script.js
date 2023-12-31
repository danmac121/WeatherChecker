let btnList = document.getElementById("previousSearches")
let currentCity = document.getElementById("currentCity")
let search = document.getElementById("search")
let fiveDay = document.getElementById("forecastEl")
let todayIcon = document.getElementById("todayIcon")
let todayTemp = document.getElementById("todayTemp")
let todayWind = document.getElementById("todayWind")
let todayHumid = document.getElementById("todayHumid")
let cards = document.getElementsByClassName("five")

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

// event listener on the search button
search.addEventListener("click" , function(event){
    // if the button is clicked, sets variable userText to the text content of the input element
if (event.target.matches("button")) {
    let userText = document.getElementById("userText").value;

    fiveDay.textContent = "5-Day Forecast:"
    // calls the add class function to add the style class for the 5 day cards
    addClass()
    // we plug userText into the api call to get the data for the requested city
fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${userText}&limit=5&appid=61a660a594379343aaaaa4c93e1f2fc8`, {
 
})
  .then(response => response.json()) 
  .then(data =>{
    let firstCity = data[0]
    // defined first city as the data returned at 0, takes the lat and lon values from returned data and plugs them into the second api call to get the weather forecast
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${firstCity.lat}&lon=${firstCity.lon}&appid=61a660a594379343aaaaa4c93e1f2fc8`)
  })

  .then(function (response) {
    return response.json();
  })
  // pulls all the data from the second request and sets text content of variables defined to corresponding data. 
  .then(function (data) {
    let kelvin = ((data.list[0].main.temp - 273.15) * 9/5 +32)
    let windy = data.list[0].wind.speed
    let humid = data.list[0].main.humidity
    let todaysDate = data.list[0].dt
    currentCity.textContent = (userText + " " + moment(todaysDate, "X").format("l"))
    currentIcon = data.list[0].weather[0].icon
    todayIcon.src  = `https://openweathermap.org/img/wn/${currentIcon}@2x.png`
    todayTemp.textContent = ("Temp: " + kelvin.toFixed(2) + "°F")
    todayWind.textContent = ("Wind: " + windy + " MPH")
    todayHumid.textContent = ("Humidity: " + humid + " %")
    console.log(data)
    
    firstDay = moment(data.list[7].dt, "X").format("l")
    oneIcon = data.list[7].weather[0].icon
    firstIcon.src  = `https://openweathermap.org/img/wn/${oneIcon}@2x.png`
    tempOne = ((data.list[7].main.temp - 273.15) * 9/5 +32)
    windOne = data.list[7].wind.speed
    humidOne = data.list[7].main.humidity
    firstDate.textContent = firstDay
    firstTemp.textContent = ("Temp: " + tempOne.toFixed(2) + "°F")
    firstWind.textContent = ("Wind: " + windOne + "MPH")
    firstHumid.textContent = ("Humidity: " + humidOne + " %")

    secondDay = moment(data.list[15].dt, "X").format("l")
    twoIcon = data.list[15].weather[0].icon
    secondIcon.src  = `https://openweathermap.org/img/wn/${twoIcon}@2x.png`
    tempOne = ((data.list[15].main.temp - 273.15) * 9/5 +32)
    windOne = data.list[15].wind.speed
    humidOne = data.list[15].main.humidity
    secondDate.textContent = secondDay
    secondTemp.textContent = ("Temp: " + tempOne.toFixed(2) + "°F")
    secondWind.textContent = ("Wind: " + windOne + "MPH")
    secondHumid.textContent = ("Humidity: " + humidOne + " %")

    thirdDay = moment(data.list[23].dt, "X").format("l")
    threeIcon = data.list[23].weather[0].icon
    thirdIcon.src  = `https://openweathermap.org/img/wn/${threeIcon}@2x.png`
    tempThree = ((data.list[23].main.temp - 273.15) * 9/5 +32)
    windThree = data.list[23].wind.speed
    humidThree = data.list[23].main.humidity
    thirdDate.textContent = thirdDay
    thirdTemp.textContent = ("Temp: " + tempThree.toFixed(2) + "°F")
    thirdWind.textContent = ("Wind: " + windThree + "MPH")
    thirdHumid.textContent = ("Humidity: " + humidThree + " %")

    fourthDay = moment(data.list[31].dt, "X").format("l")
    fourIcon = data.list[31].weather[0].icon
    fourthIcon.src  = `https://openweathermap.org/img/wn/${fourIcon}@2x.png`
    tempFour = ((data.list[31].main.temp - 273.15) * 9/5 +32)
    windFour = data.list[31].wind.speed
    humidFour = data.list[31].main.humidity
    fourthDate.textContent = fourthDay
    fourthTemp.textContent = ("Temp: " + tempFour.toFixed(2) + "°F")
    fourthWind.textContent = ("Wind: " + windFour + "MPH")
    fourthHumid.textContent = ("Humidity: " + humidFour + " %")

    fifthDay = moment(data.list[39].dt, "X").format("l")
    fiveIcon = data.list[39].weather[0].icon
    fifthIcon.src  = `https://openweathermap.org/img/wn/${fiveIcon}@2x.png`
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

// creates a button every time the search button is pressed with text content of the user input. pushes that input to local storage for retrieval later
function makeButtons(){
        let userText = document.getElementById("userText").value;
        let newBtn = document.createElement("button")
        btnList.appendChild(newBtn)
        newBtn.classList.add("newBtn")
        newBtn.textContent = (userText)
        let cities = JSON.parse(localStorage.getItem('cities')) || [];
        cities.push(userText);
        localStorage.setItem('cities', JSON.stringify(cities));
        
        
    }
// event listener for previous searches, does the same stuff as the search event listener but pulls the city name associated with the button from local storage to be used for the first fetch 
btnList.addEventListener("click", function(event){
  if (event.target.matches("button")) {
    let cityName = event.target.textContent
    let storedCities = getStoredCities()
    let storedCityName = storedCities.find(city => city === cityName);
    if (storedCityName) {
      fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=61a660a594379343aaaaa4c93e1f2fc8`, {
  
    })
      .then(response => response.json()) 
      .then(data =>{
        firstCity = data[0]
       
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
        currentCity.textContent = (cityName + " " + moment(todaysDate, "X").format("l"))
        currentIcon = data.list[0].weather[0].icon
        todayIcon.src  = `https://openweathermap.org/img/wn/${currentIcon}@2x.png`
        todayTemp.textContent = ("Temp: " + kelvin.toFixed(2) + "°F")
        todayWind.textContent = ("Wind: " + windy + " MPH")
        todayHumid.textContent = ("Humidity: " + humid + " %")
        console.log(data)
        
        firstDay = moment(data.list[7].dt, "X").format("l")
        oneIcon = data.list[7].weather[0].icon
        firstIcon.src  = `https://openweathermap.org/img/wn/${oneIcon}@2x.png`
        tempOne = ((data.list[7].main.temp - 273.15) * 9/5 +32)
        windOne = data.list[7].wind.speed
        humidOne = data.list[7].main.humidity
        firstDate.textContent = firstDay
        firstTemp.textContent = ("Temp: " + tempOne.toFixed(2) + "°F")
        firstWind.textContent = ("Wind: " + windOne + "MPH")
        firstHumid.textContent = ("Humidity: " + humidOne + " %")
    
        secondDay = moment(data.list[15].dt, "X").format("l")
        twoIcon = data.list[15].weather[0].icon
        secondIcon.src  = `https://openweathermap.org/img/wn/${twoIcon}@2x.png`
        tempOne = ((data.list[15].main.temp - 273.15) * 9/5 +32)
        windOne = data.list[15].wind.speed
        humidOne = data.list[15].main.humidity
        secondDate.textContent = secondDay
        secondTemp.textContent = ("Temp: " + tempOne.toFixed(2) + "°F")
        secondWind.textContent = ("Wind: " + windOne + "MPH")
        secondHumid.textContent = ("Humidity: " + humidOne + " %")
    
        thirdDay = moment(data.list[23].dt, "X").format("l")
        threeIcon = data.list[23].weather[0].icon
        thirdIcon.src  = `https://openweathermap.org/img/wn/${threeIcon}@2x.png`
        tempThree = ((data.list[23].main.temp - 273.15) * 9/5 +32)
        windThree = data.list[23].wind.speed
        humidThree = data.list[23].main.humidity
        thirdDate.textContent = thirdDay
        thirdTemp.textContent = ("Temp: " + tempThree.toFixed(2) + "°F")
        thirdWind.textContent = ("Wind: " + windThree + "MPH")
        thirdHumid.textContent = ("Humidity: " + humidThree + " %")
    
        fourthDay = moment(data.list[31].dt, "X").format("l")
        fourIcon = data.list[31].weather[0].icon
        fourthIcon.src  = `https://openweathermap.org/img/wn/${fourIcon}@2x.png`
        tempFour = ((data.list[31].main.temp - 273.15) * 9/5 +32)
        windFour = data.list[31].wind.speed
        humidFour = data.list[31].main.humidity
        fourthDate.textContent = fourthDay
        fourthTemp.textContent = ("Temp: " + tempFour.toFixed(2) + "°F")
        fourthWind.textContent = ("Wind: " + windFour + "MPH")
        fourthHumid.textContent = ("Humidity: " + humidFour + " %")
    
        fifthDay = moment(data.list[39].dt, "X").format("l")
        fiveIcon = data.list[39].weather[0].icon
        fifthIcon.src  = `https://openweathermap.org/img/wn/${fiveIcon}@2x.png`
        tempFive = ((data.list[39].main.temp - 273.15) * 9/5 +32)
        windFive = data.list[39].wind.speed
        humidFive = data.list[39].main.humidity
        fifthDate.textContent = fifthDay
        fifthTemp.textContent = ("Temp: " + tempFive.toFixed(2) + "°F")
        fifthWind.textContent = ("Wind: " + windFive + "MPH")
        fifthHumid.textContent = ("Humidity: " + humidFive + " %")
    
        
    
      })}}});

  


   function getStoredCities() {
  let cities = JSON.parse(localStorage.getItem('cities')) || [];
  return cities;
}


// adds class style to 5 day cards so they're invisible on first loading the page but when this function is called, they get their styles
function addClass() {
    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.add('style')
        
    }
}