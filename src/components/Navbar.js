import React from 'react';

function Navbar() {
  return (
    <div className="">
      <div className="px-20 py-4 bg-primary flex justify-between items-center text-white fixed w-full top-0 z-50">
        <h1 className="font-bold text-xl">Web Master</h1>
        <ul className="flex justify-between text-md font-semibold">
          <li>
            <a href="/">Home</a>
          </li>
          <li className="px-3">
            <a href="/">About</a>
          </li>
          <li className="px-3">
            <a href="/">Info</a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
