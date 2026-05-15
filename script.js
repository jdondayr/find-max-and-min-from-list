const numberInput = document.querySelector("#numberInput");
const resetButton = document.querySelector("#resetButton");
const addButton = document.querySelector("#addButton");
const numbersList = document.querySelector("#numbersList");
const findMaxAndMinButton = document.querySelector("#findMaxAndMinButton");
const result = document.querySelector("#result");
const numbersArray = [];

// Add number function
addButton.addEventListener("click", () => {
    if (Number(numberInput.value) === "" || Number(numberInput.value) === 0 || numbersArray.includes(Number(numberInput.value))) return;
    let liElement = document.createElement("li");
    liElement.textContent = Number(numberInput.value);
    numbersArray.push(Number(numberInput.value));
    numbersList.appendChild(liElement);
    numberInput.value = "" // Resetea valor input
})

// Reset function
resetButton.addEventListener("click", () => {
    location.reload();
})

// Find max and min function
findMaxAndMinButton.addEventListener("click", () => {
    if (numbersArray.length < 2) continue; // Evita que se use el botón si no hay números suficientes para la función
    let max = -Infinity; 
    let min = Infinity;
    for (let number of numbersArray) {
        if (number > max) max = number;
        if (number < min) min = number;
    }
    
    result.insertAdjacentHTML("beforeend", `
        <h2>The max number is ${max} and the min number is ${min}`);
})
