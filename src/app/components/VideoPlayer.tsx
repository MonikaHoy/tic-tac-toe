"use client";
import ReactPlayer from "react-player";

export default function Player() {
  return <ReactPlayer loop playing url={"/videos/tictactoe.mov"} />;
}
