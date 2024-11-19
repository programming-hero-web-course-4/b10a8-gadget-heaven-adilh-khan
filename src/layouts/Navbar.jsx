import { Link, NavLink, useLocation } from "react-router-dom";
import SectionHeader from "../components/SectionHeader";
import Banner from "../components/Banner";
import { BsCart3 } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";

const NavBar = () => {
  const { pathname } = useLocation();
  const newPathName = pathname.split("/");

  const path = newPathName.length > 0 && newPathName[1];
  // console.log(path);
  const isHomePage = pathname;
  const links = (
    <>
      <Link to="/">Home</Link>
      <Link to="/statistics">Statistics</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/all-gadget">All Gadgets</Link>
      
    </>
  );
  return (
    <>
      <div
        className={`${
          isHomePage === "/" || path === "category"
            ? "bg-[#9538E2] pb-36 relative mb-auto"
            : "bg-white"
        }`}
      >
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 ${
                    isHomePage === "/" || path === "category" ? "text-white":""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className={`menu menu-sm dropdown-content bg-base-600 text-white rounded-box z-[1] mt-4 w-52 p-2 shadow ${
                  isHomePage === "/" || path === "category"
                    ? "text-white"
                    : "text-black"
                }`}
              >
                {links}
              </ul>
            </div>
            <a
              className={`btn btn-ghost text-xl ${
                isHomePage === "/" || path === "category" ? "text-white" : ""
              }`}
            >
              Gadget Heaven
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul
              className={`menu menu-horizontal px-1 gap-6 ${
                isHomePage === "/" || path === "category"
                  ? "text-white"
                  : "text-black"
              }`}
            >
              {links}
            </ul>
          </div>
          <div className="flex gap-2 navbar-end">
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-white py-1 px-1 rounded-xl" : ""
              }
            >
              <BsCart3 />
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-white py-1 px-1 rounded-xl" : ""
              }
            >
              <IoMdHeartEmpty />
            </NavLink>
          </div>
        </div>
        {isHomePage === "/" || path === "category" ? (
          <SectionHeader
            title={
              <>
                Upgrade Your Tech Accessories <br />
                with Gadget Heaven
              </>
            }
            description={
              "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
            }
            hideButtons={true}
            shopNow={"Shop Now"}
            isHomePage={true}
          ></SectionHeader>
        ) : (
          ""
        )}
        {isHomePage === "/" || path === "category" ? (
          <div className="w-full absolute top-[100%] left-1/2 transform -translate-x-1/2 -translate-y-1/3">
            <Banner></Banner>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default NavBar;
