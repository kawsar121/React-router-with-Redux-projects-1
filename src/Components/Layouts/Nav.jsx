import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="bg-red-500 p-3">
      <div className="flex justify-evenly ">
        <Link>Home</Link>
        <Link to="/todoapps">Todo Apps</Link>
        <Link>About</Link>
      </div>
    </div>
  );
};

export default Nav;
