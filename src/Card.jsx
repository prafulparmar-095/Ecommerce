import React from "react";

const Card = () => {
  return (
    <div className="bg-white-600 text-black h-52 w-40 mt-4 p-3 border-2 rounded-lg drop-shadow-2xl">
      <span className="">🛒</span>
      <h3 className="font-bold text-[24px]">Product 1</h3>
      <p className="text-[16px]">This is a short product description with some useful info.</p>
    </div>
  );
};

export default Card;
