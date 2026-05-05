import {useState} from 'react';

const initialGameBoard= [
    [null,null,null],
    [null,null,null],
    [null,null,null]
];

export default function GameBoard() {

    const [isPlayed, setIsPlayed] = useState();
    
    function handlePlay() {
        return setIsPlayed

    }

    return(
        <ol id="game-board">
            {initialGameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={handlePlay}>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
           
        </ol>
    )

}