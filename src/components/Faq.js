import React from "react";

function Faq(props) {
  return (
    <div className="container">
      <p id="questions">Q: {props.questions}</p>
      <p id="answers">A: {props.answers}</p>
    </div>
  );
}

export default Faq;
