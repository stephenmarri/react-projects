import React from 'react'
import { LightButton } from './Button'
import {FaHouseDamage, FaBook, FaHelicopter, FaTree, FaBandAid, FaHandsHelping} from 'react-icons/fa'


const WhatWeDo = () => {
  return (
    <div id='whatwedo' className='fr'>
        <div id="innerCard" className='fc'>
            <div id="card1" className='card fc'>
                <h4>How do we help?</h4>
                <div className='fr'>
                <h1>What are we doing to <br />make change?</h1>
                <p>Lorem ipsum dolloren1or Lorem <br /> ipsum dolor sit amet consectetur adipisicing elit. Peas, cupiditate! <br />Lorem i. Sunt, voluptatem!</p>
                </div>
            </div>
            <div id="card2" className='card fr'>
                    <div className="small_card">
                        <div className="image fr" >
                            <FaHouseDamage />
                        </div>
                        <div className="header fc"><h1>Housing & Shelter</h1></div>
                        <div className="text fc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ducimus.</div>
                        <div className="button">
                            <LightButton text={'Donate'}/>
                        </div>
                    </div>
                    <div className="small_card">
                        <div className="image fr" >
                            <FaBook />
                        </div>
                        <div className="header fc"><h1>Scholarships </h1></div>
                        <div className="text fc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ducimus.</div>
                        <div className="button">
                            <LightButton text={'Donate'}/>
                        </div>
                    </div>
                    <div className="small_card">
                        <div className="image fr" >
                            <FaHelicopter />
                        </div>
                        <div className="header fc"><h1>Disaster Funding</h1></div>
                        <div className="text fc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ducimus.</div>
                        <div className="button">
                            <LightButton text={'Donate'}/>
                        </div>
                    </div>
                    <div className="small_card">
                        <div className="image fr" >
                            <FaTree />
                        </div>
                        <div className="header fc"><h1>Amenities</h1></div>
                        <div className="text fc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ducimus.</div>
                        <div className="button">
                            <LightButton text={'Donate'}/>
                        </div>
                    </div>
                    <div className="small_card">
                        <div className="image fr" >
                            <FaBandAid />
                        </div>
                        <div className="header fc"><h1>Cancer Relief</h1></div>
                        <div className="text fc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ducimus.</div>
                        <div className="button">
                            <LightButton text={'Donate'}/>
                        </div>
                    </div>
                    <div className="small_card">
                        <div className="image fr" >
                            <FaHandsHelping />
                        </div>
                        <div className="header fc"><h1>Care & Support</h1></div>
                        <div className="text fc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ducimus.</div>
                        <div className="button">
                            <LightButton text={'Donate'}/>
                        </div>
                    </div>
                    
            </div>
        </div>
    </div>
  )
}

export default WhatWeDo