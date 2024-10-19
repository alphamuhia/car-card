import React from "react";

const CarList = ({ cars }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {cars.map((car, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
        >
          <img
            src={car.image}
            alt={`${car.name} ${car.model}`}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">{car.name}</h3>
            <p className="text-gray-600">Model: {car.model}</p>
            <p className="text-gray-600">Year: {car.year}</p>
            <p className="text-gray-600">Color: {car.color}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarList;
