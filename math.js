// Named экспорт для математических операций
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const multiply = (a, b) => a * b;

// Default экспорт для деления
const divide = (a, b) => (b !== 0 ? a / b : "На ноль делить нельзя");
export default divide;
