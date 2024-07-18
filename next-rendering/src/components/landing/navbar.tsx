
import React from "react";
import NavLinks from "./nav-links";
import NavSearch from "./nav-search";


function Navbar() {
      console.log("navbar rendered");
  return (
    <div className="flex justify-between p-2" style={{ margin: "10px" }}>
      <NavLinks />
      <NavSearch />
  
    </div>
  
  );
}

export default Navbar;
