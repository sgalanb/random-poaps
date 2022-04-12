import React from "react";
import './Home.css'
import TitlePrimary from '../../components/TitlePrimary/TitlePrimary';
import ButtonPrimary from '../../components/ButtonPrimary/ButtonPrimary';

export default function Home() {
    return (
        <div className="HomeContainer">
          <TitlePrimary text={'Random POAPs'} />
          <ButtonPrimary text={'Create Raffle'} action={
              () => {
                  console.log('hi')
              }
          } />
        </div>
      );
}