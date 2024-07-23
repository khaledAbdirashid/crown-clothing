import "./category-items.scss";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const CategoryItems = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(route);
  };
  return (
    <div className="category-container" onClick={handleNavigate}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>SHOP NOW</p>
      </div>
    </div>
  );
};

CategoryItems.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    route: PropTypes.string,
  }).isRequired,
};

export default CategoryItems;
