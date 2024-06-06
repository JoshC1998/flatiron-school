/*

Phase 1 -> DOM Manipulation
by Sakib Rasul
Updated March 13, 2024
Created September 12, 2023

Core Deliverables
1. Select a node.
2. Modify a node.
3. Remove a node.
4. Append a node.

Challenges
1. Append a list.
2. Replace a node.

*/

// ~ APIs, CRUD, `document`
//document is an API that lets us interact (CRUD) with HTML!
console.log(document.querySelector("hi"));
console.log(document.querySelector("#forecer").id)
 //has to be a string
// ~ Read/Select a node
// -> querySelector is a DOM method that lets us look up nodes by CSS **selector**.
// -> querySelectorAll is a DOM method that returns an array-like list of nodes that match a CSS selector.
// -> textContent is a property of text nodes (e.g. h1, p) that contain their text.


// ~ Update/Modify a node's attributes
// -> To modify an attribute, just use = after the attribute name in object dot notation
document.querySelector("#forever").textContent = "Forever!";
// ~ Delete/Remove a node
// -> To remove an existing element, we can look it up and call the node's method `remove()`.
document.querySelector("#forever").remove();

// ~ Create + Append a node
// -> createElement(), append()
// 1. Create an element.
const pElement = document.createElement("p");
// 2. Modify the new element 
pElement.textContent = "On June 4th,2024";
// 3. Append the new element to an existing one 
document.querySelector("div").append(pElement);
// ~ Challenges
// 1. Write a function named displayList that takes a name and an array,
//    and appends a list to #dates. For example, given "Books" and "The Shining",
//    the function should a ppend to #dates something like:
//        Books
//        • The Shining
// 2. Replace the <strong> element with a newly created one.

movies = ["Avengers", "Up", "Wallie"]
const displayList = {name, movies} =>{
    const h2Element = document.createElement("h2");
    h2Element.textcontext = name
    document.querySelector("div").append(h2Element)
    const ulList = document.createElement("ul");
    document.querySelector("div").append(ulList)

    movies.forEach((movie)=> {
        const liList = document.createElement("li");
        liList.textContext = movie
        document.querySelector("ul").append(liList)
    })
}

displayList("Movies",movies)

const strong = document.querySelector("strong");
const italic = document.createElement("em");
italic.textContext = "Pedro Vicenty"
strong.replaceWith(italic)