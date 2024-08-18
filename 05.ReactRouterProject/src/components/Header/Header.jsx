import React from 'react'

// <Link> and <NavLink> are the components for anchor tags replacement provided by react-router-dom 
// To navigate around the react application. Generally, we use anchor tags like "a href" for this purpose while navigating.
// Generally, we use anchor tags like "a href" for this purpose. But this will reload the page and re-render all the components. 
// While <Link> and <NavLink> will only re-render updated components matched with the URL path of the Route without reloading. 
// It helps the Single-Page Applications to work faster while routing.

import{Link, NavLink} from "react-router-dom"

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-gray-800 border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-2xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12"
                            alt="Logo"/>
                    </Link>

                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-gray-300 hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
                            Log in
                        </Link>

                        <Link
                            to="#"
                            className="text-gray-200 bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
                            Get started
                        </Link>
                    </div>

                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink to="/" className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? "text-orange-700" : "text-gray-300" } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/about" className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? "text-orange-700" : "text-gray-300" } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>
                                    About
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/contact" className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? "text-orange-700" : "text-gray-300" } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>
                                    Contact
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/github" className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? "text-orange-700" : "text-gray-300" } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>
                                    Github
                                </NavLink>
                            </li>
                            
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

