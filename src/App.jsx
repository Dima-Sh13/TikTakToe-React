import {useState} from 'react';

import Log from './components/Log';
import Player from "./components/Player"
import GameBoard from "./components/GameBoard"

function derivedActivePlayer(gameTurns){
   let currentPlayer= 'X';

      if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O'
      }

      return currentPlayer
}


function App() {
  const[gameTurns, setGameTurns] = useState([]);
  

  
  
  const activePlayer = derivedActivePlayer(gameTurns)
  
 
 
    function handlePlayer(rowIndex, colIndex) {
    
      setGameTurns(prevTurns => {
      const currentPlayer = derivedActivePlayer(prevTurns);
      const updatedTurns = [{ square: { row:rowIndex, col: colIndex }, player: currentPlayer},...prevTurns];

      return updatedTurns
    });
  }
  

  return <main>
    <div id="game-container">
      <ol id="players" className='highlight-player'>
        <Player name="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
        <Player name="Player 2" symbol="O" isActive={activePlayer === 'O'} />
      </ol>

      <GameBoard onSelectSquare={handlePlayer} activePlayerSymbol={activePlayer} turns={gameTurns} />
    </div>
    <Log moves={gameTurns} />
  </main>
   
  
}

export default App
