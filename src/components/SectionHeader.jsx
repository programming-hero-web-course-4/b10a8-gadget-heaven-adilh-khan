// SectionHeader.js

import { Navigate, useLocation, useNavigate } from "react-router-dom";

const SectionHeader = ({
  title,
  description,
  primaryButton,
  secondaryButton,
  hideButtons,
  isHomePage,
  shopNow,
  isHeight,
}) => {
  const navigate = useNavigate();
  return (
    <div
      className={`bg-purple-600 text-white py-8 px-4 rounded-lg text-center ${
        isHeight ? "pb-48" : ""
      }`}
    >
      <h2
        className={` ${
          isHomePage ? "text-5xl font-bold mb-2 " : "text-2xl font-bold mb-2"
        }`}
      >
        {title}
      </h2>
      <p className="mb-6">{description}</p>

      {!hideButtons === true ? (
        <div className="flex justify-center space-x-4">
          <button className="bg-white text-purple-600 font-semibold py-2 px-6 rounded-full hover:bg-gray-100 transition">
            {primaryButton}
          </button>

          <button className="border border-white text-white font-semibold py-2 px-6 rounded-full hover:bg-white hover:text-purple-600 transition">
            {secondaryButton}
          </button>
        </div>
      ) : (
        ""
      )}
      {isHomePage === true ? (
        <div>
          <button
            onClick={() => navigate("/all-gadget")}
            className="bg-white text-purple-600 font-semibold py-2 px-6 rounded-full hover:bg-gray-100 transition"
          >
            {shopNow}
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SectionHeader;
