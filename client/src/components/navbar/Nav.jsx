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
    window.localStorage.removeItem("Token");
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
        {isLogin ? (
          <button className="login_btn" onClick={handleLogout}>
            LogOut
          </button>
        ) : (
          <Link to={"/Login"}>
            <button type="button" className="login_btn">
              LogIn
            </button>
          </Link>
        )}

        <div className="nav_profile">
          <div className="common">
            <BsHeart /> ({wishList.length}) Wishlist
          </div>
          <Link to="/MyCart">
            <div className="common">
              <BsCart2 /> ({cartItems[0].id === 0 ? 0 : cartItems.length}) Bag
            </div>
          </Link>
        </div>

        <Link to={"/register"}>
          <button type="button" className="register_btn">
            SignUp
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
