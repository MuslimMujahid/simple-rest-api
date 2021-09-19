
const axios = require('axios')
const command = process.argv[2]

if (command == "all") {
  axios
    .get('http://localhost:5000/product')
    .then(response => console.log(response.data))
} else if  (command + 0 >= 0) {
  axios
    .get(`http://localhost:5000/product/${command}`)
    .then(response => console.log(response.data))
} else {
  console.log('Unknown command:', command)
}