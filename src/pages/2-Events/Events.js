import React, {useContext} from 'react';
import './Events.css'
import Navbar from '../../containers/Navbar/Navbar';
import IdInput from '../../components/IdInput/IdInput'
import AddedEvents from '../../containers/AddedEvents/AddedEvents';
import Heading2 from '../../components/Heading2/Heading2';
import NavArrows from '../../components/NavArrows/NavArrows';
import IdContext from '../../context/IdContext';
import { toast } from 'react-toastify';
import {Helmet} from 'react-helmet'

export default function Events() {
    const { state } = useContext(IdContext)

    return (
        <div className='eventsContainer page'>
            <Helmet>
                <title>Add Events | Random POAPs</title>
            </Helmet>

            <Navbar />
            <NavArrows nextPath={state.listOfIDs.length == 0 ? '/add-events' : 'number-of-winners'} rightArrowFunction={() => {
                if (state.listOfIDs.length == 0) 
                    toast.info('Add at least 1 event')
            }} />
            <Heading2 text={'Add POAPs to the raffle'} />
            <IdInput />
            <AddedEvents />
        </div>
    )
}