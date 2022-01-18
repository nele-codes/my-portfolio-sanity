import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

export default function NavBar() {
    return (
        <header className="bg-pink-600">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink
                        className="inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-blue-700 text-4xl folt-bold cursive tracking-widest" 
                        to="/"
                        exact
                    >
                        Nele
                    </NavLink>
                    <NavLink
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-blue-700 "
                        to="/post"
                    >
                        Blog Post
                    </NavLink>
                    <NavLink
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-blue-700 "
                        to="/project">
                        Projects
                    </NavLink>
                    <NavLink
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-blue-700 "
                        to="/about">
                        About Me!
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://twitter.com/NeleTheCoder" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}} />
                    <SocialIcon url="https://www.linkedin.com/in/nele-taevere-5a436340/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}} />
                    <SocialIcon url="https://github.com/nele-codes" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}} />
                </div>
            </div>
        </header>
    )
}