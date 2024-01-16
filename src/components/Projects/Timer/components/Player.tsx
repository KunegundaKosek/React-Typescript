import React, { useState, useRef } from "react";
import styles from "../../../../scss/Timer.module.scss";

const Player = () => {
  const playerName = useRef<HTMLInputElement>(null);
  const [enteredPlayerName, setEnteredPlayerName] = useState<
    string | undefined
  >(undefined);


  function handleClick() {
    setEnteredPlayerName(playerName.current?.value);
    if(playerName.current) {
      playerName.current.value = "";
    }
  }

  return (
    <div className={styles.player}>
      <h1>
        THE <em>ALMOST</em> FINAL COUNTDOWN
      </h1>
      <p>Stop the timer once you estimate that time is (almost) up</p>
      
      {/* Wyrażenie x ?? y zwróci x, jeśli x nie jest równa null ani undefined. W przeciwnym razie zwróci y. Jest to podobne do operatora ||, ale z różnicą, że operator ?? nie używa fałszywych wartości JavaScript (takich jak 0 czy "") jako zastępczej wartości, a jedynie sprawdza, czy wartość jest równa null lub undefined. */}
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        <input
          ref={playerName}
          type="text"
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </div>
  );
};

export default Player;
