import React from "react";
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <div data-cy="navbar-home-link">
        <img
          src="/Adidas_Logo.png"
          width="60px"
          alt="logo"
          style={{ display: "block" }}
        />
      </div>

      <div>
        {/* Link button to /login page, if the user is not authenticated, else don't show it*/}
        <button data-cy="navbar-login-button"><Link to="/login">LOGIN</Link></button>
      </div>
    </div>
  );
};

export default Navbar;
