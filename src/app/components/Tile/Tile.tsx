import styles from "./Tile.module.css";

interface TileProps {
  className?: string;
  value: string;
  onClick: () => void;
  playerTurn?: string;
}

export default function Tile({
  className,
  value,
  onClick,
  playerTurn,
}: TileProps) {
  let hoverClass = null;
  if (value == null && playerTurn != null) {
    hoverClass = playerTurn === "X" ? styles.xHover : styles.oHover;
  }

  return (
    <div
      className={`${styles.tile} ${hoverClass} ${className} `}
      onClick={onClick}
    >
      {value}
    </div>
  );
}
