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
findMaxAndMinButton.addEventListener("click", function findMaxandMin() {
    if (numbersArray.length < 2) return; // Evita que se use el botón si no hay números suficientes para la función
    let max = -Infinity; 
    let min = Infinity;
    numbersArray.forEach(number => {
        number > max ? max = number : "";
        number < min ? min = number : "";
    })
    result.innerHTML = `<h3 class="text-warning">The max number is ${max} and the min number is ${min}</h3>`;
});
