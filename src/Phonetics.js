import React from "react";
import { createRoot } from "react-dom/client";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetics(props) {
  return (
    <>
      {props.phonetic ? (
        <ReactAudioPlayer src={props.phonetic.audio}  controls />
      ) : null}{" "}
      {props.phonetic ? props.phonetic.text : null}
    </>
  );
}
const root = createRoot(document.getElementById("root"));
root.render(<Phonetics />);
