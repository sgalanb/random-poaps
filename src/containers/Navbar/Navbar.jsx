import React, { useContext } from 'react';
import './Navbar.css'
import home from '../../images/home.png'
import NavbarSocial from '../../components/NavbarSocial/NavbarSocial'
import { Link } from 'wouter';
import Faq from '../Faq/Faq';
import IdContext from '../../context/IdContext'

export default function Navbar(type) {
    const {setFaqActive} = useContext(IdContext)

    const selectedType = {type}
        if (selectedType.type.type == 'social') {
            return (
                <div className='navbar'>
                    <NavbarSocial />
                    <a className='faq' onClick={() => {setFaqActive(true)}} >FAQ</a>
                    <Faq />
                </div>
            )
        } else {
            return (
                <div className='navbar'>
                    <Link href='/'><img className='home' src={home} alt="house-icon" width={'35px'}/></Link>
                    <a className='faq' onClick={() => {setFaqActive(true)}} >FAQ</a>
                    <Faq />
                </div>
            )
        }

}