import { useContext } from "react";
import "./Home.css";
import { CategoryContext } from "../context/CategoryContext";
import CategoryCard from "../component/CategoryCard";

const Home = () => {
  const { categoryData } = useContext(CategoryContext);

  return (
    <div className="home-container">
      <h1>Categories</h1>
      <div className="listing">
        {categoryData.map((category) => (
          <CategoryCard key={category._id} {...category} />
        ))}
      </div>
    </div>
  );
};

export default Home;
