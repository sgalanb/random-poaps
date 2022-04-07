import React from 'react';
import './styles/App.css';
import ButtonPrimary from './components/ButtonPrimary';
import TitleSecondary from './components/TitleSecondary';
import EventName from './components/EventName';
import TitlePrimary from './components/TitlePrimary';

function App() {
  return (
    <div>
      <TitlePrimary text={'Random POAPs'}/>
      <TitleSecondary text={'Title-Secondary'}/>
      <EventName text={'Belo to the Moon'} url={'https://poap.gallery/event/31287'}/>
      <ButtonPrimary text={'Create Raffle'}/>
    </div>
  );
}

export default App;
