import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/Context";

const Scard = (item) => {
  const [isHover, setIsHover] = useState(false);
  const { setCartItems, cartItems } = useGlobalContext();

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  const handleCart = (id) => {
    let flag = 0;
    cartItems.forEach((el) => {
      if (el.id === id) {
        flag++;
        ++el.quantity;
        return 0;
      }
    });
    if (!flag) {
      setCartItems((prev) => {
        if (cartItems[0].id == 0) {
          return [{ id: id, quantity: 1 }];
        }
        return [...prev, { id: id, quantity: 1 }];
      });
    }
  }

  
  return (
    <div
      key={item.id}
      className="single_card"
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <Link to={`/product/${item.id}/${item.title}`}>
        <img src={item.image} alt={item.title} />
      </Link>
      <div className="item_title">
        <Link to={`/product/${item.id}/${item.title}`}>
          <h5>{truncate(item.title, 55)}</h5>
        </Link>
        {isHover ? (
          <div className="item_cart" onClick={() => handleCart(item.id)}>
            Add To Cart
          </div>
        ) : (
          <div className="item_price">
            <h4>$ {item.price}</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default Scard;
