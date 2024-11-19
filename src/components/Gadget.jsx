import { Link, Outlet } from "react-router-dom";

const Gadget = ({ gadget }) => {
  const { image, name, description, price, id } = gadget;
  return (
    <div className="bg-white shadow-md rounded-xl p-4 w-full sm:max-w-sm md:max-w-md lg:max-w-lg">
      <div className="flex justify-center items-center h-56">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-contain shadow-sm rounded-xl"
        />
      </div>
      <div className="mt-3">
        <h3 className="text-lg font-bold truncate">{name}</h3>
        <p className="font-medium">Price: ${price}</p>
        <Link to={`/gadget/${id}`}>
          <button className="py-2 px-4 rounded-xl bg-transparent border-[#9538E2] border-2 text-[#9538E2] mt-2 font-semibold hover:bg-[#9538E2] hover:text-white transition">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Gadget;
