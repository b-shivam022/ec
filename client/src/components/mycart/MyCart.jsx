import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/Context";
import CartItem from "./CartItem";
import "./MyCart.css";

const MyCart = () => {
  const { isLogin, cartItem } = useGlobalContext();

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
          {cartItem.map((item) => {
            return <CartItem id={item} />;
          })}
        </div>
      )}
    </section>
  );
};

export default MyCart;
