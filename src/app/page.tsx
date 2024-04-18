import Link from "next/link";
import Board from "./components/Board/Board";

export default function Home() {
  return (
    <>
      <div>
        <h1>MONI&apos;S TIC TAC TOE GAME</h1>
        <Link href="/about">Press here for game rules</Link>
      </div>
      <Board />
    </>
  );
}
