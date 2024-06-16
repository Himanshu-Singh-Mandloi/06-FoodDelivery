import "./FoodItem.css";
import { assets } from "../../assets/assets";

function FoodItem({ id, name, description, price, category, image }) {
  return (
    <div className="food-item">

      <div className="food-item-img-container">
        <img className="food-item-img" src={image} alt="" />
      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc"> {description} </p>
        <p className="food-itrm-price"> ₹{price} </p>
      </div>
      
    </div>
  );
}

export default FoodItem;
