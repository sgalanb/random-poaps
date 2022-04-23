import React from 'react';
import './NavArrows.css'
import { Link } from 'wouter';
import { ReactComponent as LeftArrow } from '../../images/arrow-solid.svg'

export default function NavArrows({backPath, nextPath}) {

    const left_arrow =  <Link href={backPath}>
                            <LeftArrow className='left-arrow' fill='#fff' width={'30px'} />
                        </Link>

    const right_arrow = <Link className='right-arrow-link' href={nextPath}>
                            <LeftArrow className='right-arrow' fill='#fff' width={'30px'} />
                        </Link>

    if (nextPath == undefined) {
        return (<div className='arrows'>{left_arrow}</div>)
    } if (backPath == undefined) {
        return (<div className='arrows'>{right_arrow}</div>)
    } else {
        return (<div className='arrows'>{left_arrow}{right_arrow}</div>)
    }
}