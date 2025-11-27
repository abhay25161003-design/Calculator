const display = document.getElementById("display");

document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", () => {
        handleInput(btn.getAttribute("data-key"));
    });
});

// Handle button input
function handleInput(key) {
    if (key === "AC") {
        display.value = "";
    } 
    else if (key === "DEL") {
        display.value = display.value.slice(0, -1);
    } 
    else if (key === "=") {
        calculate();
    } 
    else {
        display.value += key;
    }
}

// Calculation (safe basic math)
function calculate() {
    try {
        const expression = display.value.replace("÷", "/").replace("×", "*");
        display.value = eval(expression);
    } catch {
        display.value = "Error";
    }
}

// Keyboard support
document.addEventListener("keydown", (e) => {
    const key = e.key;

    if (!isNaN(key) || "+-*/.%".includes(key)) {
        display.value += key;
    }
    else if (key === "Enter") {
        calculate();
    }
    else if (key === "Backspace") {
        display.value = display.value.slice(0, -1);
    }
    else if (key === "Escape") {
        display.value = "";
    }
});
