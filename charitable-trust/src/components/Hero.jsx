import React from 'react'
import Button from './Button'
import {FaHeartbeat} from 'react-icons/fa'

const Hero = () => {
    return (
        <div id='hero' className='fr'>
            <div id="content" className=''>
            <h1>Small Changes make a <br /><span>big impact</span> on people's lives ⚕
           
            </h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, quia ut. Fuga, voluptatum distinctio earum mollitia illum molestias. Quam similique est facilis. Qui, vel iure sequi explicabo dolorum totam expedita?</p>
            <Button text={'Learn More'}/>
            </div>
            <div id="image" className=''>
                {/* <img src='../public/images/hero.jpg' alt="" /> */}
            </div>
        </div>
    )
}

export default Hero