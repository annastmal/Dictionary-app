import "./styles.css";
import React from "react";

const WordCard = ({ header, subtitle = "None", synonyms, example, number }) => {
  return (
    <div className="card">
      <h4>{header}</h4>
      <p>{number + ". " + subtitle}</p>
      <p>Example: {example}</p>
      <div class="synonyms">
        <span>
          Synonyms:{" "}
          {synonyms.map((synonym) => (
            <span>{synonym},</span>
          ))}
        </span>
      </div>
    </div>
  );
};

export default WordCard;
