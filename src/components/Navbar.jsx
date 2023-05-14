import "./css/navbar.css";
import * as React from "react";

const Navbar = () => {

return (
    <div>
      <div class="navbar">
        <div class="navlogo">
          <a href="/" style={{color:"white"}}>
            <img class="navlogo-img" src="https://th.bing.com/th/id/OIP.B-z7OG5fX6O6CQ7h4ITUQAHaHZ?pid=ImgDet&rs=1" alt="Navlogo"/>
            <h6 class="navtext">BBMS</h6>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
