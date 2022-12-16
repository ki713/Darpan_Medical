/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { BiUserCircle } from "react-icons/bi";
import {BsSquareFill} from "react-icons/bs"
import { GiHamburgerMenu } from "react-icons/gi";
import './Navbar.css'
//import { NavLink } from "react-router-dom";
//import { FaBeer } from "@react-icons/all-files/fa/FaBeer";

const Navbar = () => {
   // const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <div>
        <nav className='main-nav'>

            {/* 1 logo part */}

            <div className='logo'>
            <a href='#'>
                            <BsSquareFill className='square'/>
               
                        </a>

                <h1>
                    <span>M</span>edical
                    <span>D</span>arpan
                </h1>
                </div>

                {/* 2: Menu part */}
                <div className='menu-link'>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>

                        <li>
                            <a href="#">Products</a>
                        </li>

                        <li>
                            <a href="#">Distributors</a>
                        </li>

                        <li>
                            <a href="#">Manufacturers</a>
                        </li>

                        <li>
                            <a href="#">About us</a>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                    </ul>
                </div>

            

            {/* 3: Login user */}
            <div className='login'>
                <ul className='login-desktop'>
                    <li>
                        <a href = "#">
                        <h3>
                        <span>L</span>ogin
                    </h3>

                        </a>
                    </li>

                    <li>
                        <a href='#'>
                            <BiUserCircle className='user'/>
               
                        </a>
                    </li>

                    
                </ul>
                {/* hamburget menu start  */}
          
            </div>
        </nav>

        {/* 4: main page */}

        {/* <div>
            <h1>Welcome</h1>
        </div> */}
      
    </div>
  )
}

export default Navbar
