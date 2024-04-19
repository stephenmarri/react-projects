import React from 'react'

const Square = ({value, updateSquares}) => {
  return (
    <div className='square' onClick={updateSquares}>{value}</div>
  )
}

export default Square