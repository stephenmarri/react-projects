import React from 'react'
import { IconContext } from 'react-icons'
import { FaArrowRight, FaHandHoldingMedical } from "react-icons/fa";

const Major = () => {
    return (
        <div id='major' className='fr'>
            <div id='innerCard' className='fr'>
                <div className="card fr">
                    <div id='edu' className="child_card fc">
                        <div className="image"></div>
                        <div className="content fc">
                            <h1>Education Sponsorship</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, minima!</p>
                        </div>
                        <div className="donate fr">
                            Donate
                            <FaArrowRight />
                        </div>
                    </div>
                </div>
                <div className="card fr">
                <div id='food' className="child_card fc">
                        <div id='food_image' className="image"></div>
                        <div className="content fc">
                            <h1>Food Relief Funding</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, minima!</p>
                        </div>
                        <div className="donate fr">
                            Donate
                            <FaArrowRight />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Major