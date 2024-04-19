import React, {useState, useEffect} from 'react'
import Square from './Square'


const Board = () => {

    let [turn, setTurn] = useState(1);
    let [newGame, setNewGame] = useState(false);
    
    let [squares, setsquares] = useState(new Array(9).fill(0));
    
    const updateSquares = (index, value) => squares[index] = value

    const checkIfGameOver = (piece) => {
        console.log(`Checking Game Status for: ${piece}`)
        console.log(squares)
        const winCombination = [
            [0,1,2],[3,4,5],[6,7,8],
            [0,3,6],[1,4,7],[2,5,8],
            [0,4,8],[2,4,6]
        ]

        for (let i = 0; i < winCombination.length; i++) {
            let combination = winCombination[i];
            let count = 0;
            for (let pos = 0; pos < combination.length; pos++) {
                if (squares[combination[pos]] == piece) count++;
            }
            if(count == 3) return true
        }
        return false
    }

    useEffect(()=> checkNow, [turn])
    useEffect(()=>{
        setTurn(1)
        squares= new Array(9).fill(0)
    },[newGame])
    const checkNow = () => {
        console.log('inside function')
        if(checkIfGameOver(turn)){
            alert(`Game Over!!! Winner: ${turn == 1 ? 'X' : 'O'}`)
        }
    }
   

  return (
    <>
    <button onClick={()=>{
        console.log('new game')
        setNewGame(!setNewGame)
    }}>New Game</button>
        <div  id='board'>
            {
        
                squares.map( (element, index)=>(
                    <Square key={index} squareId={index} turn={turn} setTurnValue={setTurn} updateSquares={updateSquares} checkIfGameOver={checkIfGameOver}/>
                ))
            }
        </div>

    </>
  )
}

export default Board