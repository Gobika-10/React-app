import React, { useState } from "react";
import { 
  HiHome, 
  HiUser, 
  HiUsers, 
  HiCog, 
  HiDocumentReport 
} from "react-icons/hi";

import { Link } from "react-router-dom";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold px-5">Dashboard</h1>

        <button
          className=" ml-110  md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

     
<ul
  className={`
    ${isOpen ? "block" : "hidden"} 
    absolute top-16 left-0 w-full bg-gray-800 p-6 space-y-4 
    md:static md:flex md:space-y-0 md:space-x-6 md:bg-transparent md:p-0
  `}
>
  <li className="flex items-center gap-2 hover:text-yellow-400 cursor-pointer">
    <HiHome className="text-xl" />
    <span><Link to="/home"> Home</Link></span>
  </li>

  <li className="flex items-center gap-2 hover:text-yellow-400 cursor-pointer">
    <HiUser className="text-xl" />
    <span><Link  to="/section">Users</Link></span>
  </li>

  <li className="flex items-center gap-2 hover:text-yellow-400 cursor-pointer">
    <HiDocumentReport className="text-xl" />
    <span>Reports</span>
  </li>

  <li className="flex items-center gap-2 hover:text-yellow-400 cursor-pointer">
    <HiCog className="text-xl" />
    <span>Settings</span>
  </li>
</ul>
<button className="flex items-center gap-2 hover:text-yellow-400">
  <HiUser className="text-xl" />
  <span><Link to="/login">Login</Link></span>
</button>
      </div>
    </nav>
  );
}

export default Navbar;