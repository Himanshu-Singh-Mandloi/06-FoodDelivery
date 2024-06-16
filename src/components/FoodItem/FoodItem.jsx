import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";



function FoodItem({ id, name, description, price, image }) {

  const {cartItems, addToCart, removeFromCart} = useContext(StoreContext);


  return (
    <div className="food-item">

      <div className="food-item-img-container">
        <img className="food-item-img" src={image} alt="" />
        {
          !cartItems[id] ? <img src={assets.add_icon_white}  onClick={() => addToCart(id)}  className="add"/> 
          : <div className="food-item-counter">
            <img src={assets.remove_icon_red}  onClick={() => removeFromCart(id)}/>
            <p>{cartItems[id]}</p>
            <img src={assets.add_icon_green}  onClick={() => addToCart(id)}/>
          </div>
        }
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
