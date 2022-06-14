import React from "react";
import "./topnavbar.css"

export default function TopNavBar() {
  return (
    <div className="top-nav bg-white sticky top-0 flex items-center z-999 font-nunito md:w-auto md:h-auto">
      <div className="top-nav-left ml-5 flex items-center justify-items-center">
        <i className="topIcon text-lg mr-4 text-gray-700 bg-white cursor-pointer fab fa-facebook-square"></i>
        <i className="topIcon text-lg mr-4 text-gray-700 bg-white cursor-pointer fab fa-twitter-square"></i>
        <i className="topIcon text-lg mr-4 text-gray-700 bg-white  bg-whitecursor-pointer fa-brands fa-linkedin"></i>
      </div>
      {/* <div className="top-nav-center">
        <ul className="top-nav-list flex items-center justify-center m-0 p-0 list-none">
          <li className="top-nav-list-item mr-8 text-lg font-normal hover:bg-gray-400 ">Tech Gist</li>
          <li className="top-nav-list-item mr-8 text-lg font-normal hover:bg-gray-400">Entertainment</li>
          <li className="top-nav-list-item mr-8 text-lg font-normal hover:bg-gray-400">Politricks</li>
          <li className="top-nav-list-item mr-8 text-lg font-normal hover:bg-gray-400">Sports</li>
          <li className="top-nav-list-item mr-8 text-lg font-normal hover:bg-gray-400">Humor stories</li>
        </ul>
      </div> */}
      <div className="top-nav-center">
        <ul className="top-nav-list flex items-center justify-center m-0 p-0 list-none">
          <li className="top-nav-list-item mr-8 text-lg font-normal hover:bg-gray-400 p-2 cursor-pointer">HOME</li>
          <li className="top-nav-list-item mr-8 text-lg font-normal hover:bg-gray-400 p-2 cursor-pointer">ABOUT</li>
          <li className="top-nav-list-item mr-8 text-lg font-normal hover:bg-gray-400 p-2 cursor-pointer">CONTACT</li>
          <li className="top-nav-list-item mr-8 text-lg font-normal hover:bg-gray-400 p-2 cursor-pointer">WRITE</li>
          <li className="top-nav-list-item mr-8 text-lg font-normal hover:bg-gray-400 p-2 cursor-pointer">LOGOUT</li>
        </ul>
      </div>
      <div className="top-nav-right flex items-center justify-center ">
        <img
          className="top-img w-10 h-10 rounded-full object-cover mr-8 cursor-pointer "
          src="./My-picture.png"
          alt=""
        />
        <ul className="top-nav-list flex justify-center m-0 p-0 list-none">
          <li className="top-nav-list-item mr-8 text-lg hover:bg-gray-400 p-2 cursor-pointer font-normal ">LOGIN</li>
          <li className="top-nav-list-item mr-8 text-lg hover:bg-gray-400 p-2 cursor-pointer font-normal ">REGISTER</li>
          <i className="top-search-icon fas fa-search"></i>
        </ul>
      </div>
    </div>
  );
}
