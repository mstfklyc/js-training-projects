
const jokeElement = document.getElementById("joke");
const jokeButton = document.getElementById("joke-btn");

// Added functionality click event
jokeButton.addEventListener("click", () => {
    generateJoke();
});
generateJoke();


// Fetch Functions with .then()
/* function generateJoke() {
    const config = {
        headers: {
            Accept: "application/json",
        },
    };
    fetch("https://icanhazdadjoke.com/", config)
        .then((cevap) => cevap.json())
        .then((data) => {
            jokeElement.innerHTML = data.joke;
        });
} */


// Fetch with async await to understand it better 

async function generateJoke() {
    const config = {
        headers: {
            Accept: "application/json",
        },
    };
    const response = await fetch("https://icanhazdadjoke.com/", config)
    const data = await response.json()
    jokeElement.innerHTML = data.joke;
}