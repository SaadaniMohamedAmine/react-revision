import React from "react";

const Navbar = () => {
  return (
    <div className="">
     <div className="px-20 py-3 bg-primary flex justify-between items-center text-white">
       <h1 className="font-bold text-xl">Web Master</h1>
       <ul className="flex justify-between text-md font-semibold">
         <li><a href="">Home</a></li>
         <li className="px-3"><a href="">About</a></li>
         <li className="px-3"><a href="">Info</a></li>
         <li><a hrfe="">Login</a></li>
       </ul>
     </div>
    </div>
  );
};

export default Navbar;
