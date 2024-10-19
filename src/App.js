import React from "react";
import CarList from "./CarList";

let cars = [
  {
    name: "BMW",
    color: "Gray",
    year: 2017,
    model: "BMW-X7",
    image: "/images/bmw-x7.jpg",
  },
  {
    name: "Bugatti",
    color: "Black",
    year: 2012,
    model: "Bugatti_Veyron",
    image: "/images/Bugatti_Veyron.jpg",
  },
  {
    name: "Ford",
    color: "white",
    year: 2025,
    model: "Ford Mustang",
    image: "/images/Ford Mustang.avif",
  },
  {
    name: "Lamborghini",
    color: "Orange",
    year: 2024,
    model: "Lamborghini-Revuelto",
    image: "/images/Lamborghini-Revuelto.webp",
  },
  {
    name: "Mercedes",
    color: "blue",
    year: 2017,
    model: "Mercedes Benz G63",
    image: "/images/Mercedes Benz G63.png",
  },
  {
    name: "Nissan",
    color: "Metalic Gold",
    year: 2019,
    model: "Nissan-Terrano",
    image: "/images/Nissan-Terrano.webp",
  },
];

function App() {
  return (
    <div className="App">
      <h1 className="text-center text-3xl font-bold my-6">Car Collection</h1>
      <CarList cars={cars} />
    </div>
  );
}

export default App;
