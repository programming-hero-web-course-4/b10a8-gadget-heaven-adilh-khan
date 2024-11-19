import React from "react";

const Cart = ({ gadget }) => {
  const { name, price, image, description } = gadget;

  return (
    <div className="flex items-center justify-between p-6 rounded-lg shadow-md gap-4">
      <div className="w-3/12">
        <img className="w-full h-full  rounded-lg" src={image} alt={name} />
      </div>
      <div className="w-9/12 pl-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">{name}</h2>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        <span className="text-purple-600 font-bold">${price}</span>
      </div>
    </div>
  );
};

export default Cart;
