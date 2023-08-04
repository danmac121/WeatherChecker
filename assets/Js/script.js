// set the city to the text content of the user input on submit click
// event listener on div so we can listen to child 
// make variable for city to be put into the first api fetch


let search = document.getElementById("search")
// let userText = document.getElementById("userText").value;

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
    console.log(data);
  });
  
}
})



