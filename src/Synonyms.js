import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <ul className="Synonyms">
        <span><strong>Similar: </strong><em></em>
        {props.synonyms.map((synonym, index) => {
          return <li key={index}>{synonym}</li>;
        })}
        </span>
      </ul>
    );
  } else {
    return null;
  }
}
