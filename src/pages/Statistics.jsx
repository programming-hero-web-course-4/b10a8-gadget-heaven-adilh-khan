import { useLocation } from "react-router-dom";
import SectionHeader from "../components/SectionHeader";

const Statistics = () => {
  const location = useLocation();
  const isStatisticsPage = (location.pathname = "/statistics");
  return (
    <div>
      {isStatisticsPage ? (
        <SectionHeader
          title={"Product Details"}
          description={
            "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
          }
          hideButtons={true}
        ></SectionHeader>
      ) : (
        ``
      )}
    </div>
  );
};

export default Statistics;
