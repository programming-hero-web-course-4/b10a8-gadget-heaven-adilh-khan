import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

import SectionHeader from "./SectionHeader";
import { NavLink, useLoaderData, useParams } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { addCart, getAllGadgets } from "../utils";

const GadgetDetails = () => {
  const allGadgetData = useLoaderData();
  //   console.log(allGadgetData);
  const { id } = useParams();

  const [gadget, setGadget] = useState({});
  const [isCart, setIsCart] = useState(false);
  useEffect(() => {
    const singleData = allGadgetData.find(
      (gadget) => gadget.id === parseInt(id)
    );
    setGadget(singleData);
    const cart = getAllGadgets();
    const isExist = cart.find((item) => item.id === singleData.id);
    if (isExist) {
      setIsCart(true);
    }
  }, [allGadgetData, id]);

  const {
    category,
    name,
    image,
    price,
    inStock,
    description,
    specifications = {},
    rating,
  } = gadget;

  const handleCart = (gadget) => {
    addCart(gadget);
    setIsCart(true);
  };

  return (
    <>
      <div className="relative">
        <SectionHeader
          title={"Product Details"}
          description={
            "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
          }
          hideButtons={"yes"}
          isHeight={true}
        ></SectionHeader>

        <div className="flex justify-between w-8/12 m-auto p-6 gap-6  shadow-lg rounded-xl absolute top-[100%] left-1/2 transform -translate-x-1/2 -translate-y-1/3 bg-white">
          <div>
            <img
              className="rounded-xl w-full h-full object-cover shadow-md"
              src={image}
              alt=""
            />
          </div>
          <div className="w-7/12">
            <h2 className="text-2xl font-semibold">{name}</h2>
            <h5 className="text-md font-medium mt-1 mb-3">Price: ${price}</h5>
            <span className=" bg-[#309C081A] border-2 border-[#2c9d00] px-3 py-1 rounded-2xl text-[#2c9d00]">
              In Stock
            </span>
            <p className="mt-4 mb-4 font-medium font-[#09080F99]">
              {description}
            </p>
            <h4 className="text-lg font-semibold">Specifications:</h4>
            <ul className="list-decimal pl-6 mt-2">
              {Object.entries(specifications).map(([key, value], index) => (
                <li key={index} className="capitalize">
                  <strong>{key}:</strong> {value}
                </li>
              ))}
            </ul>
            <h4 className="text-lg font-semibold mt-2">Rating</h4>
            <div className="flex gap-3 mt-2">
              <div className="rating scale-100">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <span className="bg-[#ECECEC] rounded-xl px-2">4.8</span>
            </div>
            <div className="flex mt-4 gap-4 items-center ">
              <button
                disabled={isCart} // Correct condition to disable the button
                onClick={() => handleCart(gadget)}
                className={`flex items-center gap-1 px-3 py-1 rounded-2xl text-white ${
                  isCart ? "bg-gray-400" : "bg-[#9538E2]"
                }`}
              >
                <span>Add To Cart</span>
                <BsCart3 />
              </button>
              <button className="bg-white py-1 px-1 rounded-full border w-8 h-8 flex items-center justify-center">
                <IoMdHeartEmpty />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GadgetDetails;
