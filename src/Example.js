import React from "react";

export default function Example(props) {
  if (props.example) {
    return (
        <div className="Example">
          <span><strong>Example: </strong><em>{props.example}</em></span>;
        </div>
    );
  } else {
    return null;
  }
}
