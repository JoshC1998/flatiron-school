/*

Phase 1 -> GET
Updated April 25, 2024
Created May 25, 2023
by Sakib Rasul

Objectives
1. Make a GET request to an external API.

*/

// A synchronous request to https://dogapi.dog/api/v2/facts.
//Make a GET request for our dog fact
fetch("https://dogapi.dog/api/v2/facts").
//Then,if that request was succesful, take the JSON request and convert it into Javasvipt 
then((response) => { return response.json() })
// Then, if converting the response from JSON into JS was successful, use the JS in some way. 
.then(convertedResponse => {
    const fact = convertedResponse.data[0].attributes.body;
    const dogSpan = document.querySelector("#dog").
    dogSpan.textContent = fact;
})
.catch(error => 
    { console.error(error); });

// A synchronous request to https://anapioficeandfire.com/api/books.

fetch("https://anapioficeandfire.com/api/books")
.then(response => response.json())
.then(book => {
    console.log(books[0].name);
    books.forEach((book)) => {
        const bookLi = document.createElement("Li");
        bookLi.textContent =  book.name;
        document.querySelector("#got").append();
    }
});
  
    
// An asynchronous request to https://pokeapi.co/api/v2/pokemon/[name]"
async function getPokemon(name){
    try {
        //make a GET request for a Pokemon, and save it into 'response'
      const response = await(fetch "https://pokeapi.co/api/v2/pokemon/" + name)};
      //convert the "response" into a JS object, and save it in 'pokemon'.
      const pokemon = await response.json();
      document.querySelector('#pokemon').textContent = pokemon.name;
      catch (error) {
        console.error(error);
    }
};

getPokemon('pikachu')

// ~ Challenge: Make a GET request to an API of your choice!