import divide from "./math.js";
import { add, subtract, multiply } from "./math.js";

// Выбор элементов DOM
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const resultDisplay = document.getElementById("result");
const resetButton = document.getElementById("reset");

// Функция для чтения значений и обработки ошибок
const getInputValues = () => {
  const value1 = parseFloat(input1.value) || 0; // Если пусто, подставляем 0
  const value2 = parseFloat(input2.value) || 0;
  return { value1, value2 };
};

// Добавляем обработчики событий для каждой кнопки
document.getElementById("add").addEventListener("click", () => {
  const { value1, value2 } = getInputValues();
  const result = add(value1, value2);
  resultDisplay.textContent = result;
});

document.getElementById("subtract").addEventListener("click", () => {
  const { value1, value2 } = getInputValues();
  const result = subtract(value1, value2);
  resultDisplay.textContent = result;
});

document.getElementById("multiply").addEventListener("click", () => {
  const { value1, value2 } = getInputValues();
  const result = multiply(value1, value2);
  resultDisplay.textContent = result;
});

document.getElementById("divide").addEventListener("click", () => {
  const { value1, value2 } = getInputValues();
  const result = divide(value1, value2);
  resultDisplay.textContent = result;
});

// Обработчик кнопки сброса
resetButton.addEventListener("click", () => {
  input1.value = "";
  input2.value = "";
  resultDisplay.textContent = "0"; // Сбрасываем результат
});
