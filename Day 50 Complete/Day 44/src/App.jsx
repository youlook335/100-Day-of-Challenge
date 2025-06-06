import React from "react";
import "./App.css";

const groceryItems = [
  { name: "Milk", price: "Rs. 120" },
  { name: "Bread", price: "Rs. 80" },
  { name: "Rice", price: "Rs. 250" },
];

const clothesItems = [
  { name: "T-Shirt", price: "Rs. 600" },
  { name: "Jeans", price: "Rs. 1200" },
  { name: "Jacket", price: "Rs. 2000" },
];

function ProductList({ title, items }) {
  return (
    <div className="section">
      <h2>{title}</h2>
      <div className="product-list">
        {items.map((item, index) => (
          <div className="product-card" key={index}>
            <p className="product-name">{item.name}</p>
            <p className="product-price">{item.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <h1>My Shop</h1>
      <ProductList title="Grocery Items" items={groceryItems} />
      <ProductList title="Clothes" items={clothesItems} />
    </div>
  );
}

export default App;
