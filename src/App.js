import React from 'react';
import './styles/App.css';
import ButtonPrimary from './components/ButtonPrimary/ButtonPrimary';
import TitleSecondary from './components/TitleSecondary/TitleSecondary';
import EventName from './components/EventName/EventName';
import TitlePrimary from './components/TitlePrimary/TitlePrimary';
import IdInput from './components/IdInput/IdInput';

function App() {
  return (
    <div>
      <TitlePrimary text={'Random POAPs'}/>
      <TitleSecondary text={'Title-Secondary'}/>
      <EventName text={'Belo to the Moon'} url={'https://poap.gallery/event/31287'}/>
      <ButtonPrimary text={'Create Raffle'}/>
      <IdInput />
    </div>
  );
}

export default App;
