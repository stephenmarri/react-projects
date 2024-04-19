import React from 'react'
import { IconContext } from 'react-icons'
import { FaArrowRight, FaHandHoldingMedical } from "react-icons/fa";

const Button = ({ text }) => {
    return (
        <>
            <button id='button-dark' className='fr cp'>
                {text}
                <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                    <FaArrowRight />
                </IconContext.Provider>
            </button>
        </>
    )
}

const LightButton = ({ text }) => {
    return (
        <>
            <button id='button-light' className='fr cp'>
                {text}
                <IconContext.Provider value={{ color: "", className: "global-class-name" }}>
                    <FaArrowRight />
                </IconContext.Provider>
            </button>
        </>
    )
}

export { Button as default, LightButton }