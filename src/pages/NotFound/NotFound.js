import React from 'react';
import './NotFound.css'
import Heading2 from '../../components/Heading2/Heading2';
import ButtonPrimary from '../../components/ButtonPrimary/ButtonPrimary'
import {Helmet} from 'react-helmet'


export default function Ready() {
    return (
        <div className='notFoundContainer page'>
            <Helmet>
                <title>Error 404 | Random POAPs</title>
            </Helmet>

            <Heading2 text={'Error 404'} />
            <p className='notFoundText'>This isn&apos;t what you&apos;re looking for.</p>
            <ButtonPrimary text={'Home'} href={'/'} />
        </div>
    )
}