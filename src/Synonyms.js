import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <span>
          <strong>Similar: </strong>
          <em></em>
          {props.synonyms.map((synonym, index) => {
            return <span key={index}>{synonym}</span>;
          })}
        </span>
      </div>
    );
  } else {
    return null;
  }
}
