import "./styles.css";
import React from "react";

const WordCard = ({ header, subtitle = "None", synonyms, example, number }) => {
  return (
    <div className="card">
      {header && <h4 className="header">{header}</h4>}
      {subtitle && <div className="definition">{number + ". " + subtitle}</div>}
      <br />
      <div>
        {example && (
          <span className="example">
            <strong>Example:</strong> <span>{example}</span>
          </span>
        )}
      </div>
      <div>
        {synonyms.length != 0 && (
          <span className="synonyms">
            <strong>Synonyms:</strong>{" "}
            {synonyms.map((synonym, index) => {
              if (index === synonyms.length) {
                return <span>{synonym}. </span>;
              } else if (index === 6) {
                return <span>{synonym}. </span>;
              }else if (index < 6) {
                return <span>{synonym}, </span>;
              }
            })}
          </span>
        )}
      </div>
    </div>
  );
};

export default WordCard;
