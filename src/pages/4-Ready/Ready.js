import React from 'react'
import { Helmet } from 'react-helmet'
import './Ready.css'

import Navbar from 'containers/Navbar/Navbar'
import Heading2 from 'components/Heading2/Heading2'
import ButtonPrimary from 'components/ButtonPrimary/ButtonPrimary'
import NavArrows from 'components/NavArrows/NavArrows'

export default function Ready() {
  return (
    <div className="ReadyContainer page">
      <Helmet>
        <title>Ready | Random POAPs</title>
      </Helmet>

      <Navbar />
      <NavArrows backPath={'/number-of-winners'} />
      <Heading2 text={'Everything’s ready!'} />
      <ButtonPrimary text={'Start Raffle'} href={'/results'} />
    </div>
  )
}
