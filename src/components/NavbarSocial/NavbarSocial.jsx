import React from "react";
import './NavbarSocial.css'

import { ReactComponent as GitSVG } from 'images/github-brands.svg'
import { ReactComponent as TwitterSVG } from 'images/twitter-brands.svg'
import { ReactComponent as LinkedInSVG } from 'images/linkedin-brands.svg'

export default function Navbar() {
    
    return (
        <div className="NavbarContainer">
            <a className="icon-links" target="_blank" rel="noopener noreferrer" href="https://github.com/sgalanb">
                <GitSVG className="mr" color="#fff" width={'30px'} />
            </a>
            <a className="icon-links" target="_blank" rel="noopener noreferrer" href="https://twitter.com/sgalanb">
                <TwitterSVG className="mr" color="#fff" width={'30px'} />
            </a>
            <a className="icon-links" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/santiago-gal%C3%A1n-barlo/">
                <LinkedInSVG color="#fff" width={'30px'} />
            </a> 
        </div>
    )
}