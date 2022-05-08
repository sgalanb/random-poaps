import React from 'react';
import './Navbar.css'
import home from '../../images/home.png'
import NavbarSocial from '../../components/NavbarSocial/NavbarSocial'
import { Link } from 'wouter';

export default function Navbar(type) {
    const selectedType = {type}
        if (selectedType.type.type == 'social') {
            return (
                <div className='navbar'>
                    <NavbarSocial />
                    <a className='faq'>FAQ</a>
                </div>
            )
        } else {
            return (
                <div className='navbar'>
                    <Link href='/'><img className='home' src={home} alt="house-icon" width={'35px'}/></Link>
                    <a className='faq'>FAQ</a>
                </div>
            )
        }

}