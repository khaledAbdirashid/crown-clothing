import { ProductTypeContext } from "../../context/productcontext";
import { useContext } from "react";
import ProducttypePreview from "../../components/producttype-preview/producttype-preview";
const ProducttypesPreview = () => {
  const { productsMap } = useContext(ProductTypeContext);
  return (
    <>
      {Object.keys(productsMap).map((title) => {
        const products = productsMap[title];
        return (
          <ProducttypePreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
};

export default ProducttypesPreview;
