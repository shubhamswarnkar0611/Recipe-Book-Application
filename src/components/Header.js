import React from "react";
import { Link } from "react-router-dom"; 

const Logo = () => {
  return (
    <h1 className=" text-2xl text-#4F8D6D font-bold flex items-center">
      Recipe Book
    </h1>
  );
};



const Header = () => {
  return (
    <>
      <div className="flex justify-around  shadow-lg bg-white">
        <Logo  />
        <div className="flex items-start">
          <Link to="/" className="py-6 mx-2 font-bold text-#4F8D6D" >Home</Link>
          <Link className="py-6 mx-2 font-bold text-#4F8D6D">About</Link>
          <Link className="py-6 mx-2 font-bold text-#4F8D6D">Contact me</Link>
        </div>
        <Link className="py-6 mx-2 font-bold text-#4F8D6D">User</Link>
      </div>
    </>
  );
};

export default Header;
