import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState("");
  const [food_list, setFood_list] = useState([]);
  const navigate = useNavigate();

  const url = "http://localhost:4000";

  // -------------------
  // Cart actions
  // -------------------
  const addToCart = async (itemId) => {
    const id = String(itemId);
    setCartItems((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));

    if (token) {
      await axios.post(url + "/api/cart/add", { itemId: id }, { headers: { token } });
    }
  };

  const removeFromCart = async (itemId) => {
    const id = String(itemId);
    setCartItems((prev) => {
      const updated = { ...prev };
      if (updated[id] > 1) {
        updated[id] -= 1;
      } else {
        delete updated[id];
      }
      return updated;
    });

    if (token) {
      await axios.post(url + "/api/cart/remove", { itemId: id }, { headers: { token } });
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => String(product._id) === String(item));
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  // -------------------
  // API helpers
  // -------------------
  const fetchFoodList = async () => {
    const response = await axios.get(url + "/api/food/list");
    setFood_list(response.data.data);
  };

  const loadCartData = async (token) => {
    const response = await axios.post(
      url + "/api/cart/get",
      {},
      { headers: { token } }
    );
    // Ensure IDs are strings
    const cartData = {};
    for (let key in response.data.cartData) {
      cartData[String(key)] = response.data.cartData[key];
    }
    setCartItems(cartData);
  };

  const saveCartToDB = async () => {
    if (token) {
      try {
        await axios.post(
          url + "/api/cart/postDatatoDB",
          { cartData: cartItems },
          { headers: { token } }
        );
        console.log("Cart saved to DB");
      } catch (error) {
        console.error("Error saving cart:", error);
      }
    }
  };

  const logoutUser = async () => {
    try {
      await saveCartToDB();
      await axios.get(url + "/api/user/logout", { headers: { token } });
      localStorage.removeItem("token");
      setToken("");
      setCartItems({});
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  // -------------------
  // Load data on mount
  // -------------------
  useEffect(() => {
    async function loadData() {
      await fetchFoodList();
      if (localStorage.getItem("token")) {
        const storedToken = localStorage.getItem("token");
        setToken(storedToken);
        await loadCartData(storedToken);
      }
    }
    loadData();
  }, []);

  // -------------------
  // Auto-save cart when it changes
  // -------------------
  useEffect(() => {
    if (token) {
      saveCartToDB();
    }
  }, [cartItems, token]);

  // -------------------
  // Context value
  // -------------------
  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
    saveCartToDB,
    logoutUser,
    fetchFoodList
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
