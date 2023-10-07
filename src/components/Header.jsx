import React from "react";
import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';
import { Link, NavLink } from "react-router-dom"
import "./Header.css"
export default function HeaderPage(){

    const navLinks = 
    [
        {value: "home", id: 1},
        {value: "works", id: 2},
        {value: "about-me", id: 3},
        {value: "contacts", id: 4}
    ]
    const navLinkRender = navLinks.map(eachNavItem=>{
        return <NavLink className={`${eachNavItem.value} nav`}>
            <span className="hashtag-nav">#</span>{eachNavItem.value}
        </NavLink>
    })
    return (
        <>
           <div className="nav-container">
              <div className="sub-nav-container">
                  <div className="nav-logo-container"> <CIcon icon={icon.cilChevronDoubleLeft
}  style={{width: "45px", color: "#fff"}}/>izo</div>
                  <div className="nav-links-container">
                    {navLinkRender}
                  </div>
              </div>
           </div>
        </>
    )
}