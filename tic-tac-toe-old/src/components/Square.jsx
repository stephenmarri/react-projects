import React, {useState} from 'react'

const Square = ({squareId, turn, setTurnValue, updateSquares, checkIfGameOver}) => {
   
    const [value, setvalue] = useState('');

    const onClickSquare = (e) => {
        e.preventDefault();
        if(value != ''){
            console.log('Invalid Move')
            return
        }
        setvalue(turn == 0 ? '' : turn == 1 ? 'X' : 'O');
        updateSquares(squareId,turn)
        turn = 3 - turn
        setTurnValue(turn);
    }     
  
    return (
    <div id={`square__${squareId}`} onClick={(e)=>onClickSquare(e)}
    className='square'>
        <span>{value}</span>
    </div>
  )
}

export default Square