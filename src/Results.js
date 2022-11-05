import React from "react";
import Meaning from "./Meaning";

const Results = ({ results }) => {
  if (results) {
    return (
      <div className="Results">
        <h2>{results.word}</h2>
        {results.meanings.map((meaning, index) => (
          <p key= {index}>
            <Meaning meaning={meaning}/>
          </p>
        ))}
      </div>
    );
  } else {
    return null;
  }
};
export default Results;
