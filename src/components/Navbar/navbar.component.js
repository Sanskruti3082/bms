import React from "react";
import {BiChevronRight, BiSearch} from "react-icons/bi";
const NavSm = () => {
  return (
    <>
     <div className="text-white flex items-center justify-between">
       <div>
        <h3 className="text-xl font-bold">It All Starts Here!</h3>
        <span className="text-gray-400 text-xs flex items-center">
        Mumbai
         <BiChevronRight/>
        </span>
       </div>
       <div className="w-8 h-8">
       <BiSearch className="w-full h-full" />
    </div>
     </div>
    </>
  )
};

const NavMd = () => {
  return (
    <>
      <div className="w-full flex gap-3 items-center bg-white px-3 py-2 rounded-md">
        <BiSearch />
         <input
           type="search"
           className="w-full"
           placeholder="Search for Movies, Events, Plays, Sports and Activities"
         />
      </div>

    </>

  );
};
const NavLg = () => {
  return (
    <>
      <div className="w-full flex gap-3 items-center bg-white px-3 py-2 rounded-md">
        <BiSearch />
         <input
           type="search"
           className="w-full"
           placeholder="Search for Movies, Events, Plays, Sports and Activities"
         />
      </div>

    </>
  );
};

const Navbar = () => {
return (
  <>
   <nav className="bg-gray-800 px-2 py-4">
      <div className="md:hidden">{/*Mobile Screen*/}
          <NavSm />
      </div>
      <div className="hidden md:flex lg:hidden">{/*Tablet Screen*/}
         <NavMd />
      </div>
      <div className="hidden lg:flex">{/*Large Screen*/}
           <NavLg />
      </div>
   </nav>
  </>
);
};

export default Navbar;
