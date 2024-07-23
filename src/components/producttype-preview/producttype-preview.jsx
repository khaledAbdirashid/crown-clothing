import { Link } from "react-router-dom";
import Productcard from "../product-card/productcard";
import "./producttype-preview.scss";
import PropTypes from "prop-types";
const ProducttypePreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2 className="title">
        <Link to={title}>{title.toUpperCase()}</Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <Productcard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

ProducttypePreview.propTypes = {
  title: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired,
};
export default ProducttypePreview;
