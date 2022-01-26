// getting the button and adding an event listener to it and a function of getJokes
document.getElementById('get-joke').addEventListener('click', getJokes)
// function for getting the chucknorris jokes
function getJokes(e) {
  // creating a new xhr
  const xhr = new XMLHttpRequest()
  // Getting the API with get request
  xhr.open('GET', 'https://api.chucknorris.io/jokes/random', true)
  // loading the response gotten from the API
  xhr.onload = function () {
    // checking if the status is 200
    if (this.status === 200) {
      // getting the response and turning it into an object
      const response = JSON.parse(this.responseText)
      // declearing an output
      let output = ''
      // adding the response to the output
      output += `<p>${response.value}</p>`
      // appending the output to the html dynamically
      document.getElementById('joke-output').innerHTML = output
    }
  }
  // send the API response
  xhr.send()

  // prevent the button default behaviour
  e.preventDefault()
}
