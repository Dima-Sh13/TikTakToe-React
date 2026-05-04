import { useState } from 'react';

export default function Player({name, symbol}) {
  const [playerName2, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing );

  }

  function handleChange(event) {
    console.log(event);
    setPlayerName(event.target.value);
  }

  let playerName = <span className="player-name">{playerName2}</span>;
 
  if (isEditing) {
    playerName= <input type='text' required value={playerName2} onChange={handleChange}/>;
    
  }

    return (<li>
          <span className="player">
            {playerName}
            <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>        
        </li>)

};