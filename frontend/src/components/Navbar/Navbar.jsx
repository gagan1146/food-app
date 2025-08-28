import { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("menu");
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");

  const { getTotalCartAmount, token, food_list } = useContext(StoreContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/logout");
  };

  // Filter items from food_list
  const filteredItems = query
    ? food_list.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
        <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</a>
        <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>contact-us</a>
      </ul>
      <div className="navbar-right">
        {/* 🔍 Search Toggle */}
        <div className="navbar-search">
          <img
            src={assets.search_icon}
            alt="search"
            onClick={() => setShowSearch((prev) => !prev)}
            style={{ cursor: "pointer" }}
          />
          {showSearch && (
            <div className="navbar-search-box">
              <input
                type="text"
                placeholder="Search for items..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              {query && (
                <div className="navbar-search-results">
                  {filteredItems.length > 0 ? (
                    filteredItems.map((item) => (
                      <div
                        key={item._id}
                        className="navbar-search-item"
                        onClick={() => {
                          navigate(`/food/${item._id}`);
                          setShowSearch(false);
                          setQuery("");
                        }}
                      >
                        <img src={`${assets.baseUrl}/images/${item.image}`} alt={item.name} />
                        <p>{item.name}</p>
                      </div>
                    ))
                  ) : (
                    <p className="no-results">No items found</p>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* 🛒 Cart */}
        {token ? (
          <div className="navbar-search-icon">
            <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
            <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
          </div>
        ) : (
          ""
        )}

        {/* 👤 Login/Profile */}
        {!token ? (
          <button onClick={() => setShowLogin(true)}>sign in</button>
        ) : (
          <div className='navbar-profile'>
            <img src={assets.profile_icon} alt="" />
            <ul className='nav-profile-dropdown'>
              <li onClick={() => navigate('/myorders')}>
                <img src={assets.bag_icon} alt="" /><p>Orders</p>
              </li>
              <hr />
              <li onClick={handleLogout}>
                <img src={assets.logout_icon} alt="" /><p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
