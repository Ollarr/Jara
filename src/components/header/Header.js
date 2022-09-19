import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

// eslint-disable-next-line react/prop-types
const Header = ({active, setActive}) => {
  return (
    <div>
       <nav className="bg-white shadow dark:bg-gray-800">
  <div className="container sticky px-6 py-3 mx-auto md:flex">
    <div className="flex items-center justify-between">
      <div>
        <h1 className=" cursor-pointer text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" 
        style={{ border: "2px solid #4ade80", padding:"8px"
        }} >JARA</h1>
      </div>

      {/* Mobile menu button */}
      <div className="navbar-toggler flex md:hidden">
        <button type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" data-toggle="collapse" data-target="#navbarSupportedContent" data-parent="#navbarSupportedContent" aria-expanded= "true" aria-controls="navbarSupportedContent" aria-label="toggle menu">
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
            <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
          </svg>
        </button>
      </div>
    </div>
{/* Mobile Menu open: "block", Menu closed: "hidden" */}

    <div className="collapse w-full md:flex md:items-center md:justify-between" id="navbarSupportedContent">
      <ul className="flex flex-col px-2 py-3 -mx-4 md:flex-row md:mx-0 md:py-0">
      <Link to= "/" style={{textDecoration:"none"}}>       
        <li className={`nav-item cursor-pointer px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2 ${
                      active === "home" ? "active" : ""
                    }`}
                    onClick={() => setActive("home")}>Home </li>
      </Link>
      <Link to= "/create" style={{textDecoration:"none"}}>       
        <li className={`nav-item cursor-pointer px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2 ${
                      active === "create" ? "active" : ""
                    }`}
                    onClick={() => setActive("create")}>Create </li>
      </Link>
      <Link to= "/about" style={{textDecoration:"none"}}>       
        <li className={`nav-item cursor-pointer px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2 ${
                      active === "about" ? "active" : ""
                    }`}
                    onClick={() => setActive("about")}>About </li>
      </Link>
     
      </ul>

      <div className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
            <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </span>

        <input type="text" className="w-auto py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-10 focus:ring-blue-300" placeholder="Search"></input>
        </div>
        <ul>
        <Link to= "/auth" style={{textDecoration:"none"}}>       
        <li className={`nav-item cursor-pointer px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2 ${
                      active === "login" ? "active" : ""
                    }`}
                    onClick={() => setActive("login")}>LOGIN </li>
      </Link>        </ul>
      
    </div>
  </div>
</nav>
</div>
  )
}
      export default Header
      