import React from 'react'

const Body = ({children}) => {
  return (
    <div id='main_container'>
        <h1>TIC-TAC-TOE</h1>
        <button>
            New Game
        </button>
        {children}
    </div>
  )
}

export default Body