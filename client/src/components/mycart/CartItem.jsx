import React from "react";
import { useGlobalContext } from "../context/Context";
import SectionData from "../section/SectionData";

const CartItem = ({ id }) => {
  const { title, price, image } = SectionData[id - 1];
  const { cartItem, setCartItem } = useGlobalContext();
  

  const handleClick = () => {
    const newA = cartItem.filter((v) => {
      return v !== id;
    });
    setCartItem(newA);
  };

  return (
    <div className="addCart">
      <div className="close_button" onClick={handleClick}>
        <span>🗙</span>
      </div>
      <div className="cartItem_image">
        <img src={image} alt={title} />
      </div>
      <div className="cartItemdetail">
        <h3 className="cartItem_title">{title}</h3>
      </div>
      <h5 className="cartItem_price">${price}</h5>
    </div>
  );
};

export default CartItem;
