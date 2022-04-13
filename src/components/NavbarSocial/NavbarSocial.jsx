import React from "react";
import './NavbarSocial.css'
import { ReactComponent as GitSVG } from '../../images/github-brands.svg'
import { ReactComponent as TwitterSVG } from '../../images/twitter-brands.svg'
import { ReactComponent as LinkedInSVG } from '../../images/linkedin-brands.svg'

export default function Navbar() {
    
    return (
        <div className="NavbarContainer">
            <GitSVG className="mr" color="#fff" width={'30px'} />
            <TwitterSVG className="mr" color="#fff" width={'30px'} />
            <LinkedInSVG color="#fff" width={'30px'} />
        </div>
    )
}