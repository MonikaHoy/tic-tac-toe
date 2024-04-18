import styles from "./Strike.module.css";

export default function Strike({
  strikeClassName,
}: {
  strikeClassName: string;
}) {
  return <div className={`${strikeClassName} ${styles.strike}`} />;
}
