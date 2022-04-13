import React from "react";
import './Home.css'
import TitlePrimary from '../../components/TitlePrimary/TitlePrimary';
import ButtonPrimary from '../../components/ButtonPrimary/ButtonPrimary';
import Navbar from "../../containers/Navbar/Navbar";

export default function Home() {
    return (
        <div className="HomeContainer">
          <Navbar />
          <TitlePrimary text={'Random POAPs'} />
          <h2> Create raffles between POAP token holders.No sign up required. </h2>
          <ButtonPrimary text={'Create Raffle'} action={
              () => {
                  console.log('hi')
              }
          } />
        </div>
      );
}