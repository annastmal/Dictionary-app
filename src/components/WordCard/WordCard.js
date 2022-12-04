import "./styles.css";
import React from "react";

const WordCard = ({ header, subtitle = "None", synonyms, example, number }) => {
  console.log(synonyms);
  return (
    <div className="card">
      <h4>{header}</h4>
      <div>{number + ". " + subtitle}</div>
      <div>
        {example && (
        <span>
        Example: <span className="example">{example}</span>
        </span>
        )}
        </div>
      <div>
        {synonyms.length != 0 && (
          <span>
            Synonyms:{" "}
            {synonyms.map((synonym, index) => {
              if (index < 5 ) {
                return <span className="synonyms">{synonym}, </span>;
              }
            })}
          </span>
        )}
      </div>
    </div>
  );
};

export default WordCard;
