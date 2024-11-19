import { Outlet, useLoaderData } from "react-router-dom";
import Categories from "../components/Categories";

const Home = () => {
  const categories = useLoaderData();
  // console.log(categories);
  return (
    <>
      <div className="mt-80">
        <h3 className="text-3xl font-bold">Explore Cutting-Edge Gadgets</h3>
      </div>
      <div className="flex gap-6 justify-between mt-10">
        <div className="w-2/12 ">
          <Categories categories={categories}></Categories>
        </div>

        <div className="w-10/12">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default Home;
