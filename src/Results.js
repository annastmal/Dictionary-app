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
        <h2 className="result_word">{results.word}</h2>
        <Phonetics phonetic={checkIfAudio(results.phonetics)} />
        <div className="Results">
          {results.meanings.map((meaning, index) => {
            console.log(meaning);
            {
              if (
                meaning.definitions[0] !== null &&
                meaning.partOfSpeech !== null
              ) {
                return (
                  <WordCard
                    key={index}
                    number={index + 1}
                    header={meaning.partOfSpeech}
                    subtitle={
                      meaning.definitions[0]
                        ? meaning.definitions[0].definition
                        : null
                    }
                    example={
                      meaning.definitions[0]
                        ? meaning.definitions[0].example
                        : null
                    }
                    synonyms={meaning.synonyms}
                  />
                );
              }
            }
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
};
export default Results;
