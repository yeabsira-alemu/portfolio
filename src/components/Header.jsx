import React from "react";
import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';
import { Link, NavLink } from "react-router-dom"
import "./Header.css"
export default function HeaderPage(){

    const activeStyles = 
    {
        opacity: 1,
        textDecoration: "underline" 
    }

    const navLinks = 
    [
        {value: "home", id: 1, to: "/"},
        {value: "works", id: 2, to: "/works"},
        {value: "about-me", id: 3, to: "/about-me"},
        {value: "contacts", id: 4, to: "/contacts"}
    ]
    const navLinkRender = navLinks.map(eachNavItem=>{
        return <NavLink to={eachNavItem.to} style={({isActive})=>isActive?activeStyles:null} className={`${eachNavItem.value} nav`}>
            <span className="hashtag-nav">#</span>{eachNavItem.value}
        </NavLink>
    })
    return (
        <>
           <div className="nav-container">
              <div className="sub-nav-container">
                  <Link to="/"> <CIcon icon={icon.cilChevronDoubleLeft
}  style={{width: "45px", color: "#fff"}}/></Link>
                  <div className="nav-links-container">
                    {navLinkRender}
                  </div>
              </div>
           </div>
        </>
    )
}