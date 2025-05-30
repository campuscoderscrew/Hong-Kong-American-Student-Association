import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-red-800 text-white p-4 w-full max-h-full flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <Link className="flex items-center" to="/">
          <img className="w-16 h-auto mr-4" src="hong kong.png" />
          <h1>Hong Kong Student Association</h1>
        </Link>
      </div>
      <div className="flex items-center mr-50">
        <ul className="grid grid-cols-3 gap-25">
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Officers">Officers</Link>
          </li>
          <li>
            <Link to="/Events">Events</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
