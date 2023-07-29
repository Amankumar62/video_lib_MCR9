import { createContext, useState } from "react";
import { categories } from "../data";
export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [categoryData, setCategoryData] = useState(categories);
  return (
    <CategoryContext.Provider
      value={{
        categoryData,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
