// SectionHeader.js
import React from "react";

const NavSectionHeader = ({ title, description, primaryButton }) => {
  return (
    <div className="bg-purple-600 text-white py-8 px-4 rounded-lg text-center">
      <h2 className="text-5xl font-bold mb-4 leading-tight">{title}</h2>
      <p className="mb-6">{description}</p>

      <div className="flex justify-center space-x-4">
              <button className="btn btn-warning">{ primaryButton}</button>
      </div>
    </div>
  );
};

export default NavSectionHeader;
