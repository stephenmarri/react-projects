import React from 'react'
import {IconContext} from 'react-icons'
import { FaArrowRight, FaHandHoldingMedical  } from "react-icons/fa";
import Button from './Button';

const Navbar = () => {
  return (
    <div id='Navbar' className='fr'>
        <div id="title" className='fr cp'>
            <FaHandHoldingMedical />
            Terrebbone Charitable Trust
        </div>
        <div id="links" className='fr'>
            <span className='cp'>Home</span>
            <span className='cp'>History</span>
            <span className='cp'>About</span>
            <span className='cp'>Contact</span>
        </div>
        <div id="donate" className='fr'>
            <Button text={'Donate'}/>
        </div>
    </div>
  )
}

export default Navbar