import React from "react";
import "./styles.css";
import AddProductForm from "./components/AddProductForm";
import Card from "./components/Card";

export default function App() {
  const divisions = [{ id: 1, title: "Tools" }];
  const brands = [{ id: 1, title: "Makita" }];
  return (
    <div className="App">
      <AddProductForm divisions={divisions} brands={brands} />
      <Card
        title="Welcome Mat"
        img="https://via.placeholder.com/300"
        alt="Welcome Mat"
        category="Mats"
        rating={4.5}
        soldCount={253}
        price={10}
        currency="USD"
        discount={20}
      />
    </div>
  );
}
