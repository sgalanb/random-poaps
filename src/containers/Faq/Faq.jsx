import React, { useContext } from 'react'
import './Faq.css'
import IdContext from '../../context/IdContext'

export default function Faq() {
    const {state, setFaqActive} = useContext(IdContext)
    const handleContainerClick = e => e.stopPropagation()

    return (
        <div className={`background ${state.faqActive ? 'active' : 'disabled'}`} onClick={() => {setFaqActive(false)}}>
            <div className='faqContainer' onClick={handleContainerClick}>
            
                <h2 className='faq-title'>F.A.Q.</h2>

                <div className='questions-container'>
                    <h3 className='ask'>🔽 Where can I find events IDs?</h3>
                    <p className='response'>You can browse all poaps and their IDs at the <a target="_blank" rel="noopener noreferrer" href="https://poap.gallery/">official galery</a>.</p>

                    <h3 className='ask'>🔽 How do winners prove the ownership of their address?</h3>
                    <p className='response'>Winners can sign a message with their address at <a target="_blank" rel="noopener noreferrer" href="https://app.mycrypto.com/sign-message">this site</a>. Organizers can verify the signature <a target="_blank" rel="noopener noreferrer" href="https://app.mycrypto.com/verify-message">here.</a> </p>

                    <h3 className='ask'>🔽 Is there any technical limitation?</h3>
                    <p className='response'> The only limitation is that events with a supply of +300 poaps are not supported (yet).</p>
                </div>

            </div>
        </div>
    )
}