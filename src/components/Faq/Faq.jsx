import React, { useContext } from 'react'
import './Faq.css'

import RaffleContext from 'context/RaffleContext'

export default function Faq() {
    const {state, setFaqActive} = useContext(RaffleContext)
    const handleContainerClick = e => e.stopPropagation()

    return (
        <div className={`background ${state.faqActive ? 'active' : 'disabled'}`} onClick={() => {setFaqActive(false)}}>
            <div className='faqContainer' onClick={handleContainerClick}>
            
                <h2 className='faq-title'>F.A.Q.</h2>

                <div className='questions-container'>
                    <h3 className='ask'>🔽 Where can I find events IDs?</h3>
                    <p className='response'>You can find all the created events and their IDs at <a target="_blank" rel="noopener noreferrer" href="https://poap.gallery/">poap.gallery</a>.</p>

                    <h3 className='ask'>🔽 How can winners prove ownership of their address?</h3>
                    <p className='response'>Winners can sign a message with their address at <a target="_blank" rel="noopener noreferrer" href="https://app.mycrypto.com/sign-message">this site</a>. Organizers can verify the signature <a target="_blank" rel="noopener noreferrer" href="https://app.mycrypto.com/verify-message">here.</a> </p>

                    <h3 className='ask'>🔽 What&apos;s the difference with poap.fun?</h3>
                    <p className='response'> The main difference is that people don&apos;t have to sign up for participate in the raffles.
                    This has some disadvantages, like that raffles results aren&apos;t stored anywhere, but it&apos;s perfect for quick hassle free raffles. </p>

                    <h3 className='ask'>🔽 Is there any limitation?</h3>
                    <p className='response'> Events with a supply of +5000 poaps are not supported due to POAP API limitations.</p>
                </div>

            </div>
        </div>
    )
}