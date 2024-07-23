import { useParams } from "react-router-dom";
import "./producttype-display.scss";
import { useContext, useEffect, useState } from "react";
import { ProductTypeContext } from "../../context/productcontext";
import Productcard from "../../components/product-card/productcard";

const ProducttypeDisplay = () => {
  const { producttype } = useParams();
  const { productsMap } = useContext(ProductTypeContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(productsMap[producttype]);
  }, [producttype, productsMap]);

  return (
    <>
      <h2 className="producttype-title">{producttype.toUpperCase()}</h2>
      <div className="product-list-container">
        {products &&
          products.map((product) => (
            <Productcard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default ProducttypeDisplay;
