import React from 'react';
import logo from '../assets/YourHR.png';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center bg-[#ECECEC] border border-b border-gray-400 px-2 xl:px-12   '>
      <img className='px-2 py-1' width={"150px"} src={logo} alt="YourHR Logo" />
      <div className="right-part">
        <ul className='flex gap-5 text-lg font-bold '>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => isActive ? 'text-blue-500' : ''}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signup"
              className={({ isActive }) => isActive ? 'text-blue-500' : ''}
            >
              Signup
            </NavLink>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
