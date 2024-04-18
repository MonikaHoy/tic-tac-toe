import Link from "next/link";
import { Metadata } from "next";
import Player from "../components/VideoPlayer";

export const metadata: Metadata = {
  title: "Game rules",
};

export default function About() {
  return (
    <>
      <Link href="/">Go back to play </Link>
      <h1>How to play</h1>
      <p>1. Click on the square you want to place your X or O</p>
      <p>2. The game will automatically switch between X and O</p>
      <Player />
    </>
  );
}
