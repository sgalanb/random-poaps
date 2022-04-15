import React from "react";
import './Home.css'
import ButtonPrimary from '../../components/ButtonPrimary/ButtonPrimary';
import Navbar from "../../containers/Navbar/Navbar";

export default function Home() {
    return (
        <div className="HomeContainer">
          <Navbar type='social' />
          <h1 className='randomPoapsTitle' >Random POAPs</h1>
          <h2 className="randomPoapsDescription"> Create raffles between POAP token holders. No sign up required. </h2>
          <ButtonPrimary text={'Create Raffle'} href={'/poaps'}/>
        </div>
      );
}