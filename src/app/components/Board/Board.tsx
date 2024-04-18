"use client";

import Strike from "../Strike/Strike";
import Tile from "../Tile/Tile";
import styles from "./Board.module.css";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import GameOver from "../GameOver/GameOver";
import GameState from "../GameState";
import { PLAYER_X, PLAYER_O, winningCombos } from "../../utils/constants";
import Confetti from "react-confetti";

const gameOverSound = new Audio("/sounds/game_over.wav");
gameOverSound.volume = 0.2;
const clickSound = new Audio("/sounds/click.wav");
clickSound.volume = 0.5;

function checkWinner(
  tiles: any[],
  setStrikeClass: Dispatch<SetStateAction<string>>,
  setGameState: Dispatch<SetStateAction<number>>
) {
  // check the position of the tile for the winning combination
  for (const { combo, strikeClass } of winningCombos) {
    const tileValue1 = tiles[combo[0]];
    const tileValue2 = tiles[combo[1]];
    const tileValue3 = tiles[combo[2]];

    if (
      tileValue1 !== null &&
      tileValue1 === tileValue2 &&
      tileValue2 === tileValue3
    ) {
      setStrikeClass(strikeClass);
      if (tileValue1 === PLAYER_X) {
        setGameState(GameState.xWins);
      } else {
        setGameState(GameState.oWins);
      }
      return; // return so tie text doesn't show up
    }
  }

  // Check if the game is a tie
  if (!tiles.includes(null)) {
    setGameState(GameState.tie);
  }
}

export default function Board() {
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(PLAYER_X);
  const [strikeClass, setStrikeClass] = useState("");
  const [gameState, setGameState] = useState(GameState.inProgress);
  const [confetti, setConfetti] = useState(false);

  const width = window.innerWidth;
  const height = window.innerHeight;

  const handleClick = (index: number) => {
    if (gameState !== GameState.inProgress) return; // If the game is over, do nothing
    if (tiles[index] !== null) return; // If the tile is already filled, do nothing
    const newTiles = [...tiles]; // Copy the current list of tiles
    newTiles[index] = playerTurn; // Update the tile's inside value to the current player's turn
    setTiles(newTiles); // Give the board the new list of tiles
    if (playerTurn === PLAYER_X) {
      setPlayerTurn(PLAYER_O);
    } else {
      setPlayerTurn(PLAYER_X);
    }
  };

  useEffect(() => {
    checkWinner(tiles, setStrikeClass, setGameState);
  }, [tiles]);

  useEffect(() => {
    if (gameState !== GameState.inProgress) {
      gameOverSound.play();
      setConfetti(true);
    }
  }, [gameState]);

  useEffect(() => {
    if (tiles.some((tile) => tile !== null)) {
      clickSound.play();
    }
  }, [tiles]);

  const tileProps = (index: number) => ({
    value: tiles[index],
    onClick: () => handleClick(index),
    playerTurn,
    className: [
      index % 3 !== 2 && styles.rightBorder,
      index < 6 && styles.bottomBorder,
    ]
      .filter(Boolean) // filter out falsy values
      .join(" "), // join the values with a space
  });

  return (
    <>
      {confetti && <Confetti width={width} height={height} />}
      <div className={styles.board}>
        {Array.from({ length: 9 }, (_, index) => (
          <Tile key={index} {...tileProps(index)} />
        ))}

        <Strike strikeClassName={strikeClass} />
      </div>
      <div>
        <GameOver gameState={gameState} />
        {gameState !== GameState.inProgress && (
          <button
            className="text-blue-600 p-2 mt-4 bg-green-200 rounded-md"
            onClick={() => {
              setGameState(GameState.inProgress);
              setTiles(Array(9).fill(null));
              setPlayerTurn(PLAYER_X);
              setStrikeClass("");
              setConfetti(false);
            }}
          >
            Reset
          </button>
        )}
      </div>
    </>
  );
}
