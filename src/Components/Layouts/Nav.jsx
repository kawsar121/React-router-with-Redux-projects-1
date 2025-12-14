import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-3">
      <div className="flex justify-evenly text-lg font-semibold">
        <Link>Home</Link>
        <Link to="/todoapps">Todo Apps</Link>
        <Link>Abouts</Link>
      </div>
    </div>
  );
};

export default Nav;
