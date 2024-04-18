import GameState from "../GameState";

export default function GameOver({ gameState }: { gameState: number }) {
  switch (gameState) {
    case GameState.inProgress:
      return <></>;
    case GameState.oWins:
      return <div className="text-blue-600 p-2">Player O wins! 🥳</div>;
    case GameState.xWins:
      return <div className="text-blue-600 p-2">Player X wins! 🥳</div>;
    case GameState.tie:
      return <div className="text-blue-600 p-2"> Tie! ⚔️ </div>;
    default:
      return <></>;
  }
}
