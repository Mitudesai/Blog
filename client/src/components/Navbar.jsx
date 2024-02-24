import React, { useState } from "react";

import { Link } from "react-router-dom";
import logo from "../images/logo-1.png";



const Navbar = () => {
 
 
  return (
    
    <>
    
    <header class="nk-header bg-darker is-dark has-mask">
            <div class="nk-mask bg-pattern-dot-white-sm bg-blend-bottom"></div>
            <div class="nk-header-main nk-menu-main is-transparent will-shrink on-dark ignore-mask">
                <div class="container">
                    <div class="nk-header-wrap">
                        <div class="nk-header-logo">
                            <Link to={'/'} class="logo-link">
                                <div class="logo-wrap">
                                    <img class="logo-img logo-light" src={logo} srcset="images/logo2x.png 2x" alt=""/>
                                    <img class="logo-img logo-dark" src="images/logo-dark.png" srcset="images/logo-dark2x.png 2x" alt=""/>
                                </div>
                            </Link>
                        </div>
                        <div class="nk-header-toggle">
                            <button class="btn btn-light btn-icon header-menu-toggle">
                                <em class="icon ni ni-menu"></em>
                            </button>
                        </div>
                        <nav class="nk-header-menu nk-menu">
                            <ul class="nk-menu-list me-auto">
                                <li class="nk-menu-item">
                                    <Link to={'/'} class="nk-menu-link ">
                                        <span class="nk-menu-text">Home</span>
                                    </Link>
                                </li>
                                <li class="nk-menu-item">
                                    <Link to={'/about-us'} class="nk-menu-link ">
                                        <span class="nk-menu-text">About</span>
                                    </Link>
                                </li>   <li class="nk-menu-item">
                                    <Link to={'/contact'} class="nk-menu-link ">
                                        <span class="nk-menu-text">Contact</span>
                                    </Link>
                                </li>
                            </ul>
                            <ul class="nk-menu-buttons flex-lg-row-reverse">
                                <li><Link to={'/submit'} class="btn btn-outline-primary rounded-pill">Get Started</Link></li>
                                <li><Link to={'/login'} class="link link-light" href="login-s2.html">Sign in </Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
          
        </header>
        
  </>
  );
};

export default Navbar;
