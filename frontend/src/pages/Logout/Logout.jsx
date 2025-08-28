import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { food_list } from './../../assets/assets';

const Logout = () => {
  const { setToken} = useContext(StoreContext);
  const navigate = useNavigate();

  useEffect(() => {
    // clear token
    localStorage.removeItem("token");
    setToken("");
    food_list.length = 0;
    // ()=>{

    // }
    const timer = setTimeout(() => {
      navigate("/");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate, setToken]);

  return (
    <div>
      <h1>You have been logged out</h1>
      <p>Redirecting to home...</p>
    </div>
  );
};

export default Logout;
