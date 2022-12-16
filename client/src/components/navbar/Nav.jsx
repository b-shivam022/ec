import { Link } from "react-router-dom";
import "./Nav.css";
import { BiSearch } from "react-icons/bi";
import { BsHeart } from "react-icons/bs";
import { BsCart2 } from "react-icons/bs";
import { useGlobalContext } from "../context/Context";

const Nav = () => {
  const { isLogin, setIsLogin, cartItems, wishList } = useGlobalContext();

  const handleLogout = () => {
    setIsLogin(false);
    window.localStorage.clear();
  };

  const handleSubmit = () => {};
  const handleChange = (value) => {};

  return (
    <nav>
      <div className="nav_bar">
        <div className="nav_logo">
          <Link to="/">
            <h1>S-KART</h1>
          </Link>
        </div>

        <div className="search_bar">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="nav_input"
              placeholder="Search for products, brands and more"
              onChange={handleChange}
            />
            <BiSearch className="search_img" />
          </form>
        </div>

        <div className="seller">
          <h4>Become a Seller</h4>
        </div>

        <div className="nav_profile">
          <div className="common">
            <BsHeart /> ({wishList.length}) Wishlist
          </div>
          <Link to="/MyCart">
            <div className="common">
              <BsCart2 /> ({cartItems[0].id===0?0:cartItems.length}) Bag
            </div>
          </Link>
        </div>

        {isLogin ? (
          <button className="login_btn" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <Link to={"/Login"}>
            <button type="submit" className="login_btn">
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Nav;
