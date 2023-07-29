import React from "react";
import "./CategoryCard.css";
import { useNavigate } from "react-router-dom";
const CategoryCard = ({ thumbnail, category }) => {
  const navigate = useNavigate();
  return (
    <div
      className="category-card-container"
      onClick={() => navigate(`/category/${category}`)}
    >
      <img src={thumbnail} alt={category} />
      <h3>{category}</h3>
    </div>
  );
};

export default CategoryCard;
