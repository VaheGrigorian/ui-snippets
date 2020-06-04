import React from "react";
import "./styles.css";
import AddProductForm from "./components/AddProductForm";

export default function App() {
  const divisions = [{ id: 1, title: "Tools" }];
  return (
    <div className="App">
      <AddProductForm divisions={divisions} />
    </div>
  );
}
