import { useLoaderData, useParams } from "react-router-dom";
import Gadget from "./Gadget";
import { useEffect, useState } from "react";

const GadgetCards = () => {
  const data = useLoaderData();
  const { category } = useParams();

  const [gadgets, setGadgets] = useState([]);
  useEffect(() => {
    const filteredByCategory = [...data].filter(
      (gadget) => gadget.category === category
    );
    setGadgets(filteredByCategory);
  }, [data, category]);

  // console.log(gadgets);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {gadgets.map((gadget) => (
        <Gadget key={gadget.id} gadget={gadget}></Gadget>
      ))}
    </div>
  );
};

export default GadgetCards;
