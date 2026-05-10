const movesList = []

export default function Log({ moves }) {

    
    
    
    return(
        <ol id="log">
            {moves.map((turn) => (
                <li key={`${turn.square.row}${turn.square.col}`}>
                    {turn.player} selected {turn.square.row}, {turn.square.col}

                </li>
            ))}
        </ol>
    );
}