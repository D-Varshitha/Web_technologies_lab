import React, { useState } from "react";
import "./App.css";

function App() {
  const products = [
    {
      id: 1,
      name: "Laptop",
      category: "Electronics",
      price: 60000,
      quantity: 5,
    },
    {
      id: 2,
      name: "Mobile Phone",
      category: "Electronics",
      price: 25000,
      quantity: 0,
    },
    {
      id: 3,
      name: "T-Shirt",
      category: "Clothing",
      price: 700,
      quantity: 8,
    },
    {
      id: 4,
      name: "Jeans",
      category: "Clothing",
      price: 1500,
      quantity: 3,
    },
    {
      id: 5,
      name: "Rice Bag",
      category: "Grocery",
      price: 900,
      quantity: 12,
    },
    {
      id: 6,
      name: "Milk",
      category: "Grocery",
      price: 60,
      quantity: 0,
    },
  ];

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [price, setPrice] = useState("All");

  const filteredProducts = products.filter((product) => {
    const searchMatch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const categoryMatch =
      category === "All" || product.category === category;

    let priceMatch = true;

    if (price === "Below1000")
      priceMatch = product.price < 1000;

    else if (price === "1000-5000")
      priceMatch = product.price >= 1000 && product.price <= 5000;

    else if (price === "Above5000")
      priceMatch = product.price > 5000;

    return searchMatch && categoryMatch && priceMatch;
  });

  return (
    <div className="container">
      <h1>Online Shopping Product Catalog</h1>

      <div className="filters">

        <input
          type="text"
          placeholder="Search Product"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>All</option>
          <option>Electronics</option>
          <option>Clothing</option>
          <option>Grocery</option>
        </select>

        <select
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        >
          <option value="All">All Prices</option>
          <option value="Below1000">Below ₹1000</option>
          <option value="1000-5000">₹1000 - ₹5000</option>
          <option value="Above5000">Above ₹5000</option>
        </select>

      </div>

      <h3>Total Products : {filteredProducts.length}</h3>

      <div className="products">

        {filteredProducts.map((product) => (
          <div className="card" key={product.id}>

            <h2>{product.name}</h2>

            <p>
              <b>Category:</b> {product.category}
            </p>

            <p>
              <b>Price:</b> ₹{product.price}
            </p>

            {product.quantity > 0 ? (
              <p className="stock">
                Quantity : {product.quantity}
              </p>
            ) : (
              <p className="out">Out of Stock</p>
            )}

          </div>
        ))}

      </div>
    </div>
  );
}

export default App;