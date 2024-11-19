import React, { useState } from "react";
import SectionHeader from "./SectionHeader";
import { useLoaderData } from "react-router-dom";
import Gadget from "./Gadget";

const AllGadget = () => {
  const data = useLoaderData();
  const [gadgets, setGadgets] = useState(data);
  const handleSort = (sortBy) => {
    if (sortBy == "rating") {
      const sorted = [...data].sort((a, b) => b.rating - a.rating);
      setGadgets(sorted);
    } else if (sortBy == "price") {
      const sorted = [...data].sort((a, b) => b.price - a.price);
      setGadgets(sorted);
    }
  };
    const totalCost = gadgets.reduce(
      (total, gadget) => total + gadget.price,
      0
    );
  return (
    <div>
      <SectionHeader
        title={"All Gadget"}
        description={
          "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        }
        hideButtons={true}
      ></SectionHeader>
      <div>
        <div className="flex items-center justify-between mt-8 mb-8 ">
          <div className="text-2xl font-medium">
            <h2>Sort Gadget By Price & Rating</h2>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleSort("rating")}
              className="px-3 py-2 rounded-lg bg-[#9538E2] text-white"
            >
              Sort By Price
            </button>
            <button
              onClick={() => handleSort("price")}
              className="px-3 py-2 rounded-lg bg-[#9538E2] text-white"
            >
              Sort By Rating
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {gadgets.map((gadget) => (
            <Gadget key={gadget.id} gadget={gadget}></Gadget>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllGadget;
