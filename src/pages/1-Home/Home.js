import React from "react";
import './Home.css'
import ButtonPrimary from '../../components/ButtonPrimary/ButtonPrimary';
import Navbar from "../../containers/Navbar/Navbar";
import {Helmet} from 'react-helmet'

export default function Home() {
    return (
        <div className="HomeContainer page">
            <Helmet>
                <title>Home | Random POAPs</title>
                <meta name="description" content="Create raffles between POAP token holders. No sign up required." />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@sgalanb" />
                <meta name="twitter:title" content="Random POAPs" />
                <meta name="twitter:description" content="Create raffles between POAP token holders. No sign up required." />
                <meta name="twitter:image" content="https://imgur.com/a/oxiYw5y" />
            </Helmet>

            <Navbar type='social' />
            <h1 className='randomPoapsTitle' >Random POAPs</h1>
            <h2 className="randomPoapsDescription"> Create raffles between POAP token holders. No sign up required. </h2>
            <ButtonPrimary text={'Create Raffle'} href={'/add-events'}/>
        </div>
        );
}