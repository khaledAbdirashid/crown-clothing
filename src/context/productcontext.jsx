import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getCollectionAndDocuments } from "../utils/firebase.utils";
export const ProductTypeContext = createContext({
  productsMap: {},
});

export const ProductTypeProvider = ({ children }) => {
  const [productsMap, setProductsMap] = useState({});
  useEffect(() => {
    const getProductTypeData = async () => {
      const categoryMap = await getCollectionAndDocuments();
      setProductsMap(categoryMap);
    };
    getProductTypeData();
  }, []);
  const value = { productsMap };
  return (
    <ProductTypeContext.Provider value={value}>
      {children}
    </ProductTypeContext.Provider>
  );
};

ProductTypeProvider.propTypes = {
  children: PropTypes.node,
};
