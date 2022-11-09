import React, { useCallback } from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

const Results = ({ results }) => {
  const checkIfAudio = useCallback((audios) => {
    for (var i = 0; i < audios.length; i++) {
      if (audios[i].audio !== "") {
        return audios[i];
      }
    }
  });
  if (results) {
    return (
      <div className="Results">
        <h2>{results.word}</h2>

        <Phonetics phonetic={checkIfAudio(results.phonetics)} />

        {results.meanings.map((meaning, index) => (
          <p key={index}>
            <Meaning meaning={meaning} />
          </p>
        ))}
      </div>
    );
  } else {
    return null;
  }
};
export default Results;
