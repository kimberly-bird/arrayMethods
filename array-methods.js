// Inspired by Meg's positive console log at the beginning :)
console.log("you got this");

const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/

const planetEl = document.getElementById("planets")

planets.forEach(toHTML)
function toHTML (item) {
    const toTheHTML = item += " planet"
    planetEl.innerHTML += `
    <section>
    <div>${toTheHTML}</div>
    </section>
    `
    return planetEl;
}

/*
    Use the map method to create a new array where the 
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/
const capitalized = planets.map(function (lettersCapitalized) {
    // charAt(0) takes the first indext of each string in the array and modifies it toUpperCase. the slice stops the toUpperCase from index 1 and to the end of each string, so that only the first character is capitalized
    const capped = lettersCapitalized.charAt(0).toUpperCase() + lettersCapitalized.slice(1);
    return capped;
})
// is it ok that this is just console logged? 
console.log(capitalized);

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/
const hasE = planets.filter(letterE => {
    const includesE = letterE.includes("e")
    return includesE;
})
// is it ok that this is just console logged? 
console.log(hasE);


// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]

const sentence = words.reduce(
    function (prev, current) {
        return prev + " " + current
    }
)
// is it ok that this is just console logged? 
console.log(sentence);