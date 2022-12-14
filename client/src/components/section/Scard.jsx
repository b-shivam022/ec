import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/Context";

const Scard = (item) => {
  const [isHover, setIsHover] = useState(false);
  const {setCartItem} = useGlobalContext();


  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  const handleCart = (id) =>{
    setCartItem((prev)=>{
      return[...prev,id]
    })
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
          <div className="item_cart"  onClick={()=>handleCart(item.id)}>ADD TO CART</div>
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
