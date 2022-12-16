import React, { useState } from "react";
import { useGlobalContext } from "../context/Context";
import SectionData from "../section/SectionData";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const CartItem = ({ item }) => {
  const { id, quantity } = item;
  const { title, price, image } = SectionData[id - 1];
  const { cartItems, setCartItems } = useGlobalContext();

  const handleClick = () => {
    const newA = cartItems.filter((v) => {
      return v.id !== id;
    });
    newA.length === 0
      ? setCartItems([{ id: 0, quantity: 0 }])
      : setCartItems(newA);
  };

  const reduceQuantity = (id) => {
    let newCart = cartItems.map((it) => {
      let newQ = it.quantity - 1;
      return newQ && it.id === id ? { id, quantity: newQ } : it;
    });
    setCartItems(newCart);
  };


  const increaseQuantity = () => {
    let newCart = cartItems.map((it) => {
      let newQ = it.quantity + 1;
      return it.id === id ? { id, quantity: newQ } : it;
    });
    setCartItems(newCart);
  };

  return (
    <div className="addCart">
      <div className="close_button" onClick={handleClick}>
        <span>
          <MdDeleteOutline />
        </span>
      </div>
      <div className="cartItem_image">
        <img src={image} alt={title} />
      </div>
      <div className="cartItemdetail">
        <Link to={`/product/${id}/${title}`}>
          <h3 className="cartItem_title">{title}</h3>
        </Link>
      </div>
      <div className="cartitem_quantity">
        Quantity
        <IoMdArrowDropleft onClick={()=>reduceQuantity(id)} />
        <span>{quantity}</span>
        <IoMdArrowDropright onClick={()=>increaseQuantity(id)} />
      </div>
      <h5 className="cartItem_price">${price * quantity}</h5>
    </div>
  );
};

export default CartItem;
