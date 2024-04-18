import Link from "next/link";

Link;

export default function NotFound() {
  return (
    <>
      <h1>Not Found MONI&apos;S TIC TAC TOE GAME</h1>
      <p>Could not find the requested page</p>
      <Link href="/">Click here to return to home page</Link>
    </>
  );
}
