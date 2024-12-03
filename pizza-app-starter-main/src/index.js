import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// object in js
// const obj = { color: "blue", fontSize: "50px" };

// JSX Styling - method 1 inline
// function App() {
//   return <h1 style={{ color: "blue", fontSize: "50px" }}>Hello</h1>;
// }

// JSX Styling - method 2 external CSS file

function Header() {
  return (
    <h1
      style={{ color: "orange", fontSize: "48px", textTransform: "uppercase" }}
    >
      Andy's Pizza Co.
    </h1>
  );
}

function Pizza() {
  return (
    <div>
      <img src="pizzas/spinaci.jpg" alt="Spinach Pizza" />
      <h3>Spinach Pizza</h3>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
      <p>10</p>
    </div>
  );
}

function Menu() {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <Pizza />
      <Pizza />
    </div>
  );
}

function Footer() {
  const date = new Date();
  const showTime = date.getHours();
  return (
    <footer className="footer">
      {showTime >= 10 && showTime <= 22
        ? "We're currently open"
        : "Sorry we're closed"}
    </footer>
  );
}

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
