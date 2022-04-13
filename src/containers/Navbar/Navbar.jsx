import React from 'react';
import './Navbar.css'
import home from '../../images/home.png'
import NavbarSocial from '../../components/NavbarSocial/NavbarSocial'

export default function Navbar(type) {
    const selectedType = {type}
        if (selectedType.type.type == 'social') {
            return (
                <div className='Navbar'>
                    <img className='home' src={home} alt="house-icon" width={'45px'}/>
                    <a className='faq'>FAQ</a>
                </div>
            )
        } else {
            return (
                <div className='Navbar'>
                    <NavbarSocial />
                    <a className='faq'>FAQ</a>
                </div>
            )
        }

}