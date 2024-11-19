import React from "react";
import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div className="flex flex-col gap-2 border p-6 rounded-xl ">
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive
            ? "btn btn-md rounded-xl text-white border-[#9538E2] bg-[#9538E2]"
            : "rounded-xl btn btn-md border-[#9538E2] text-[#9538E2] bg-transparent"
        }
      >
        All Data
      </NavLink>
      {categories?.map((category) => (
        <NavLink
          to={`/category/${category.category}`}
          className={({ isActive }) =>
            isActive
              ? "btn btn-md rounded-xl text-white border-[#9538E2] bg-[#9538E2]"
              : "rounded-xl btn btn-md border-[#9538E2] text-[#9538E2] bg-transparent"
          }
          key={category.category}
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
