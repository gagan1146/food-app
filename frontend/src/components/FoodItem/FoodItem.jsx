import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/frontend_assets/assets';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

    return (
        <div className="food-item">
            <div className="food-item-img-container">
                <img className="food-item-image" src={image} alt={name} />
                
                {!cartItems[id] ? (
                    <img 
                        className="add" 
                        src={assets.add_icon_white} 
                        alt="Add to cart" 
                        onClick={() => addToCart(id)} 
                    />
                ) : (
                    <div className="food-item-counter">
                        <img 
                            onClick={() => removeFromCart(id)} 
                            src={assets.remove_icon_red} 
                            alt="Remove from cart" 
                        />
                        <p>{cartItems[id]}</p>
                        <img 
                            src={assets.add_icon_green} 
                            alt="Add more" 
                            onClick={() => addToCart(id)} 
                        />
                    </div>
                )}
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img 
                        className="rating-stars" 
                        src={assets.rating_starts} 
                        alt="Rating stars" 
                    />
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">₹ {price}</p>
            </div>
        </div>
    );
};

export default FoodItem;
