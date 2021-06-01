import React from "react"
import SEO from "./SEO"

import "fontsource-dancing-script"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars
} from '@fortawesome/free-solid-svg-icons'
import { Link } from "gatsby"




const Layout = ({ children }) => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <SEO />
      <div className="overflow-hidden bg-primary-100">
        <header className="fixed z-50 w-full text-white">

          <nav className="relative z-10 grid grid-cols-12">
            <div className="flex items-center justify-between col-span-12 px-4 sm:px-8 lg:pt-4 sm:py-2 lg:col-span-8 lg:col-start-3">
              <div className="relative flex-none">

                <Link
                  className="items-center text-5xl font-bold text-white site_name_sm"
                  to="/"
                >
                MW
                </Link>
                <Link
                  className="items-center text-5xl font-bold text-white site_name_md"
                  to="/"
                >
                  My Website
                </Link>

              </div>
              <div
                className={
                  "flex-none mt-8 my-4"
                }
                id="navbar"
              >
                  <button
                  className="text-2xl leading-none text-white bg-transparent border border-transparent border-solid rounded outline-none cursor-pointer lg:hidden focus:outline-none"
                  type="button"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  <FontAwesomeIcon icon={faBars} size="1x" />
                </button>
                <ul className={"right-0 list-none lg:flex lg:visible lg:flex-row lg:relative absolute lg:bg-none bg-primary-50"
                +
                  (navbarOpen ? " visible" : " invisible")
                }>
                  <li className="nav-item">
                    <Link
                      className="flex items-center px-12 py-8 font-bold text-white md:text-lg sm:text-md hover:bg-primary-100 hover:border-gray-200 lg:px-3 lg:py-2"
                      to="/about"
                      activeClassName="active"
                    >
                      <span>About</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="flex items-center px-12 py-8 font-bold text-white md:text-lg sm:text-md hover:bg-primary-100 hover:border-gray-200 lg:px-3 lg:py-2"
                      to="/contact"
                      activeClassName="active"
                    >
                      <span>Contact</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="diagonal-box bg-primary-50"></div>
        </header>
        {children}
        <footer className="py-2 text-xs text-center text-white">
          &copy; 
          <Link
            to="https://bruno.sarlo.uy"
            activeClassName="active"
            alt="full stack web developer"
          >
          Bruno Sarlo
          </Link>
        </footer>
      </div>
    </>
  )
}

export default Layout
