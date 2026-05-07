import {useState} from 'react';

const initialGameBoard= [
    [null,null,null],
    [null,null,null],
    [null,null,null]
];

export default function GameBoard() {

    const [gameBoard, setGameBoard] = useState(initialGameBoard);
    
    function handlePlay(rowIndex, colIndex) {
        setGameBoard((previousGameBoard) => {
            const updatedBoard = [...previousGameBoard.map(innerArray => [...innerArray])]
            previousGameBoard[rowIndex][colIndex] = 'X';
            return previousGameBoard;

        });

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