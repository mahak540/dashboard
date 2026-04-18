import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
    setIsMobileMenuOpen(false); // close menu after click
  };

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <>
      <div className="menu-container">
        
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>

        <img src="logo.png" alt="" style={{ width: "50px" }} />

      
        <div className="menus desktop-menu">
          <ul>
            <li>
              <Link to="/" onClick={() => handleMenuClick(0)}>
                <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                  Dashboard
                </p>
              </Link>
            </li>

            <li>
              <Link to="/orders" onClick={() => handleMenuClick(1)}>
                <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                  Orders
                </p>
              </Link>
            </li>

            <li>
              <Link to="/holdings" onClick={() => handleMenuClick(2)}>
                <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                  Holdings
                </p>
              </Link>
            </li>

            <li>
              <Link to="/positions" onClick={() => handleMenuClick(3)}>
                <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                  Positions
                </p>
              </Link>
            </li>

            <li>
              <Link to="/funds" onClick={() => handleMenuClick(4)}>
                <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                  Funds
                </p>
              </Link>
            </li>

            <li>
              <Link to="/apps" onClick={() => handleMenuClick(5)}>
                <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
                  Apps
                </p>
              </Link>
            </li>
          </ul>

          <hr />

          <div className="profile">
            <div className="avatar">ZU</div>
            <p className="username">USERID</p>
          </div>
        </div>
      </div>

      <div className={`mobile-sidebar ${isMobileMenuOpen ? "active" : ""}`}>
        <ul>
          <li onClick={() => handleMenuClick(0)}>Dashboard</li>
          <li onClick={() => handleMenuClick(1)}>Orders</li>
          <li onClick={() => handleMenuClick(2)}>Holdings</li>
          <li onClick={() => handleMenuClick(3)}>Positions</li>
          <li onClick={() => handleMenuClick(4)}>Funds</li>
          <li onClick={() => handleMenuClick(5)}>Apps</li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
