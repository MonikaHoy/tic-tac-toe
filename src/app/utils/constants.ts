import styles from "../components/Strike/Strike.module.css";

export const PLAYER_X = "X";
export const PLAYER_O = "O";

export const winningCombos = [
  // Rows
  { combo: [0, 1, 2], strikeClass: styles.strikeRow1 },
  { combo: [3, 4, 5], strikeClass: styles.strikeRow2 },
  { combo: [6, 7, 8], strikeClass: styles.strikeRow3 },
  // Columns
  { combo: [0, 3, 6], strikeClass: styles.strikeColumn1 },
  { combo: [1, 4, 7], strikeClass: styles.strikeColumn2 },
  { combo: [2, 5, 8], strikeClass: styles.strikeColumn3 },
  // Diagonals
  { combo: [0, 4, 8], strikeClass: styles.strikeDiagonal1 },
  { combo: [2, 4, 6], strikeClass: styles.strikeDiagonal2 },
];
