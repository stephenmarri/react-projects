import React, {useState} from 'react'
import Square from './Square'

const Board = () => {
    const [squares, setSquares] = useState(new Array(9).fill(null));
    const [isXMove, setIsXMove] = useState(true);
    
    const updateSquares = pos => {
        console.log(`Postion is: ${pos}`)
        
        if(squares[pos] || checkIfGameOver(squares)){
            console.log('Invalid Move');
            return
        };
        
        
        const newSquares = squares.slice()
        if(isXMove){
            newSquares[pos] = 'X'
        }else{
            newSquares[pos]= 'O'
        }
        setSquares(newSquares)
        setIsXMove(!isXMove);
        
        if(checkIfGameOver(newSquares)) alert(`Game Over!!! Winner: ${checkIfGameOver(newSquares)}`)
    }

    const checkIfGameOver = (sq) => {
        console.log('inside checkIfGameOver')
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
          ];

          for (let i = 0; i < lines.length; i++) {
            const [a,b,c] = lines[i];
            if(sq[a] && sq[a]==sq[b] && sq[a]==sq[c]) return sq[a]
          }
        return false
    }

    const loadNewGame = () => {
        setSquares(new Array(9).fill(null))
        setIsXMove(true)
    }
    

    return (
        <div id='container'>
            <h1>TIC-TAC-TOE</h1>
            <button onClick={loadNewGame}>New Game</button>
            <div id="board">
                {
                    squares.map((values, index) =>
                    <Square key={index} value= {values} updateSquares={()=>updateSquares(index)}/> 
                    )
                }
            </div>
                <div id='pieces'>
                    <span className={isXMove && 'active'}>X</span>
                    <span className={!isXMove && 'active'}>O</span>
                </div>
        </div>
    )
}

export default Board    