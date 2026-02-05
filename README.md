# 🧮 Simple JS Calculator

A sleek, functional web calculator built with a focus on clean JavaScript state management. This project demonstrates a modern developer workflow: utilizing AI for UI scaffolding while hand-coding the core functional logic.

[**🔗 Live Demo on GitHub Pages**](https://LuisMiguelMiranda92.github.io/calculator-odin-project/)

## 🚀 Features
- **Dynamic Display**: Real-time updates showing current input and active operators.
- **Hand-Coded Logic**: Custom JS handles all arithmetic, state changes, and button routing.
- **Smart Rounding**: Automatically cleans up trailing zeros (e.g., `5.0` becomes `5`) and manages floating-point precision.
- **Responsive Grid**: A tactile, "app-like" interface that works on all screen sizes.

## 🛠️ Built With
- **JavaScript (ES6+)**: **Hand-written logic** for calculation, DOM manipulation, and event handling.
- **HTML5 & CSS3**: **AI-originated UI design** (generated via Gemini) to create a modern, high-contrast interface.

## 🧠 The Logic Behind the App

### Event Routing
Instead of writing 20 different functions, the app uses a single loop to attach listeners, then uses `classList` to route the click to the correct behavior:
```javascript
if (btn.classList.contains("btn-number")) {
  updateNumber(value);
} else if (btn.classList.contains("operator")) {
  updateOperator(value);
}
