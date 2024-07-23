import React, { useContext, useRef, useState } from 'react';

import styles from "./NavBar.module.css"
import { NavLink } from 'react-router-dom';

import {links} from "./lang.json" 
import { langContext } from '../../App';

import { FaGear } from "react-icons/fa6";

import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";
import { TbHexagonLetterMFilled } from "react-icons/tb";

import ClickOutsideDetector from '../ClickOutsideDetector/ClickOutsideDetector';

const NavBar = () => {
   
   const {lang} = useContext(langContext)

   const navBtnRef = useRef(null)

   const [isNavShown, setIsNavShown] =  useState(false)

   return (
      <div className="container">
         <div className={styles.navbar}>
            
            <div className={styles["logo-wrapper"]}>
               <NavLink 
                  className={({isActive}) => `${styles.logo}`}
                  to={"/"}
               >
                  <TbHexagonLetterMFilled />
               </NavLink>
               <h4> Mohaned </h4>
            </div>

            <div className={styles.wrapper}>
               
               <ClickOutsideDetector
                  className={`${styles.links} ${isNavShown?styles.active:""}`}
                  exceptionRef={navBtnRef}
                  onClickOutside={() => setIsNavShown(false)}
               >
                  <header className='d-lg-none d-flex justify-content-end'> 
                     <button 
                        className='mybtn' 
                        onClick={() => setIsNavShown(false)}
                     >
                        <IoIosClose />
                     </button>
                  </header>
                  <ul>

                     {
                        links.map((link, idx) => {
                           return (
                              <li key={idx}>
                                 <NavLink
                                    to={link.link}
                                    className={({isActive}) => `${isActive?styles.active:""}`}
                                 >
                                    {link.label[lang]}
                                 </NavLink>
                              </li>
                           )
                        })
                     }
                  </ul>
               </ClickOutsideDetector>

               <button className='mybtn ps-4'>
                  <FaGear />
               </button>
               
               <button
                  className='mybtn d-lg-none'
                  ref={navBtnRef}
                  onClick={() => setIsNavShown(!isNavShown)}
               >
                  <RxHamburgerMenu />
               </button>
            
            </div>

         </div>
      </div>   
   );
};

export default NavBar;