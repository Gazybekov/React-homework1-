import React from "react";
import "../components/header.css";

const Header = (props) => {
  let style = {};
  return (
    <div>
      <nav>
        <div class="nav__inner">
          <h2>React</h2>
        </div>
        <div class="nav__inner_center">
          <p>How it Works</p>
          <p>Product</p>
          <p>Pricing</p>
          <p>Resources</p>
        </div>
        <div class="nav__inner_right">
          <button class="button1">Log in</button>
          <button>Get started free</button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
