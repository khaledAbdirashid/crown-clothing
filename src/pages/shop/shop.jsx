import { Routes, Route } from "react-router-dom";
import ProducttypesPreview from "../producttypes-preview/producttypes-preview";
import ProducttypeDisplay from "../producttype-display/producttype-display";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<ProducttypesPreview />} />
      <Route path=":producttype" element={<ProducttypeDisplay />} />
    </Routes>
  );
};

export default Shop;
