import React from "react";
import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';
import { NavLink } from "react-router-dom";
import "./Footer.css"
export default function FooterPage(){

const github = <CIcon icon={icon.cibGithub} style={{width: "25px"}}/>
const linkedIn = <CIcon icon={icon.cibLinkedin} style={{width: "25px"}}/>
const instagram = <CIcon icon={icon.cibInstagram} style={{width: "25px"}}/>

const socialMediaLinks = 
[
    {placeHolder: "github", icon: github},
    {placeHolder: "linkedin", icon: linkedIn},
    {placeHolder: "instagram", icon: instagram}
]

const socialMediaRender = socialMediaLinks.map(eachSocialMedia=>{
    return <NavLink className={`${eachSocialMedia.placeHolder} footer`}>{eachSocialMedia.icon}</NavLink>
})

    return (
        <div className="footer-container">
           <div className="main-footer-container"> 
            <div className="sub-footer-container">
              <div className="logo-email-description-media-footer-cont">
                   <div className="logo-and-email-footer"><CIcon icon={icon.cilChevronDoubleLeft
}  style={{width: "40px", color: "#fff"}}/><span className="email-footer">yeabalex18@gmail.com</span><p className="description-footer">AWS Solution Architect and full stack developer from <br></br>Addis Ababa, Ethiopia</p></div>
               </div>
                   <div className="media-logo-footer">
                     <h2 className="contact-footer">Contact</h2>
                     <div className="social-medias-footer">
                        {socialMediaRender}
                     </div>
                   </div>  
            </div>
            <span className="copyright-footer">Copyright 2023 Yeabsia</span>
            </div>
        </div>
    )
}