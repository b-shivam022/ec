import React, { useState, createContext, useContext, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [wishList, setWishList] = useState([]);
  const [cartItem, setCartItem] = useState([{
    id:0,
    quantity:0
  }]);

  useEffect(() => {
    if (window.localStorage.getItem("Token") === "asdfghjklqwertyuiop") {
      setIsLogin(true);
      console.log("logedin");
    }
  }, [isLogin]);

  return (
    <AppContext.Provider
      value={{
        isLogin,
        setIsLogin,
        wishList,
        setWishList,
        cartItem,
        setCartItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
