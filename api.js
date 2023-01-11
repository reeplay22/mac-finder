
const API_KEY= "at_BbSNCmFpW2VWolgjHGDM1u0wiMs1X";

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });

const userAction = async (SEARCH_ADDRESS) => {
    const response = await fetch('https://api.macaddress.io/v1?apiKey=' + API_KEY + '&output=json&search='+ SEARCH_ADDRESS);
    let myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
    console.log('Here are your results: ' + JSON.stringify(myJson));
  }

  try {
    readline.question(`Enter your address to search:`, query => {
      userAction(query)
      readline.close();
    });
  } catch (error) {
    alert( error.name );
    alert( error.message );
    
  }

// const userAction = async () => {
//   const response = await fetch('http://example.com/movies.json', {
//     method: 'POST',
//     body: myBody, // string or object
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   });
//   const myJson = await response.json(); //extract JSON from the http response
//   // do something with myJson
// }
