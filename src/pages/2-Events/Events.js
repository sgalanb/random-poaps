import React, {useContext} from 'react';
import './Events.css'
import Navbar from '../../containers/Navbar/Navbar';
import IdInput from '../../components/IdInput/IdInput'
import AddedEvents from '../../containers/AddedEvents/AddedEvents';
import Heading2 from '../../components/Heading2/Heading2';
import NavArrows from '../../components/NavArrows/NavArrows';
import IdContext from '../../context/IdContext';

export default function Events() {
    const { state } = useContext(IdContext)

    return (
      <div className='eventsContainer'>
        <Navbar />
        <NavArrows nextPath={state.listOfIDs.length == 0 ? '/poaps' : 'number-of-winners'} rightArrowFunction={() => {
          if (state.listOfIDs.length == 0) {alert('Add at least 1 event')}
        }} />
        <Heading2 text={'Add POAPs to the raffle'} />
        <IdInput />
        <AddedEvents />
      </div>
    )
}