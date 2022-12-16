import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/Context";
import CartItem from "./CartItem";
import "./MyCart.css";

const MyCart = () => {
  const { isLogin, cartItems } = useGlobalContext();

  return (
    <section>
      {!isLogin ? (
        <div className="myCart">
          <div className="myCart_title">You are not log in</div>
          <img
            className="myCart_img"
            src="images/d438a32e-765a-4d8b-b4a6-520b560971e8.webp"
            alt=""
          />
          <p>Login to see the items you added previously</p>
          <Link to="/login">
            <button className="myCart_button">Login</button>
          </Link>
        </div>
      ) : (
        <div className="myList">
          <div className="cart_head">SHOPPING CART</div>
          {(cartItems[0].id!==0) ? (
            cartItems.map((item) => {
              return <CartItem item={item} />;
            })
          ) : (
            <div className="cart_empty">
              <div className="emptyCart_img">
                <img
                  src="images/undraw_empty_cart_co35.svg"
                  alt="empty_cart"
                />
              </div>
              <div className="empty_heading">Your Cart is Empty</div>
              <Link to="/" className="empty_link">Go back to explore</Link>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default MyCart;
