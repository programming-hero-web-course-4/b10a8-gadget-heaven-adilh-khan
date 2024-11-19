import { useEffect, useState } from "react";
import SectionHeader from "../components/SectionHeader";
import { getAllGadgets } from "../utils";
import Cart from "../components/Cart";
import toast from "react-hot-toast";

const Dashboard = () => {
  const [gadgets, setGadgets] = useState([]);
  const [price, setPrice] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    const cart = getAllGadgets();
    setGadgets(cart);
    const totalPrice = cart.reduce((total, gadget) => total + gadget.price, 0);
    setPrice(totalPrice);
  }, []);
  const handleSort = (sortBy) => {
    if (sortBy == "price") {
      const sorted = [...gadgets].sort((a, b) => b.rating - a.rating);
      setGadgets(sorted);
    }
  };
  const handlePurchase = () => {
    setIsModalOpen(true);
    toast.success("Purchase initiated successfully!");
  };
  return (
    <div>
      <SectionHeader
        title={"Dashboard"}
        description={
          "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        }
        primaryButton={"Cart"}
        secondaryButton={"Wishlist"}
      ></SectionHeader>
      <div className="w-10/12 m-auto flex justify-between items-center mt-6 mb-6">
        <div>
          <h2 className="text-xl font-medium">Cart</h2>
        </div>
        <div className="flex justify-between gap-10 items-center">
          <h2 className="text-xl font-medium">
            Total Cost: ${price.toFixed(2)}
          </h2>
          <div className="flex gap-3 items-center">
            <button
              onClick={() => handleSort("price")}
              className="text-[#9538E2] font-medium border-2 bor bg-transparent px-3 py-2 rounded-3xl border-[#9538E2]"
            >
              Sort By Price
            </button>
            <button onClick={handlePurchase} className="text-white font-medium border-2 bor bg-[#9538E2] px-3 py-2 rounded-3xl border-[#9538E2] ">
              Purchase
            </button>
          </div>
        </div>
      </div>
      <div className="w-10/12 m-auto grid grid-cols-1 gap-6">
        {gadgets.map((gadget) => (
          <Cart key={gadget.id} gadget={gadget}></Cart>
        ))}
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
            <h2 className="text-2xl font-semibold mb-4">Purchase Summary</h2>
            <p className="mb-6">
              Thank you for your purchase! The total cost is: $
              {price.toFixed(2)}.
            </p>
            <div className="rating flex justify-center mb-6">
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
            </div>
            <button
              onClick={() => setIsModalOpen(false)}
              className="bg-[#9538E2] text-white px-4 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
