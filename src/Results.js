import React, { useCallback } from "react";
import WordCard from "./components/WordCard/WordCard";
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
      <div class="container">
        <h2>{results.word}</h2>
        <Phonetics phonetic={checkIfAudio(results.phonetics)} />
        <div className="Results">
          {results.meanings.map((meaning, index) => (
            <WordCard
              key={index}
              number={index + 1}
              header={meaning.partOfSpeech}
              subtitle={
                meaning.definitions[index]
                  ? meaning.definitions[index].definition
                  : "None"
              }
              example={
                meaning.definitions[index]
                  ? meaning.definitions[index].example
                  : "None"
              }
              synonyms={meaning.synonyms}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return null;
  }
};
export default Results;
