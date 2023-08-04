




fetch("http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=61a660a594379343aaaaa4c93e1f2fc8", {
 
})
  .then(response => response.json()) 
  .then(citiesFound =>{
    let firstCity = citiesFound[0]
    console.log(firstCity.lat)
    console.log(firstCity.lon)
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${firstCity.lat}&lon=${firstCity.lon}&appid=61a660a594379343aaaaa4c93e1f2fc8`)
  })
  










  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });






