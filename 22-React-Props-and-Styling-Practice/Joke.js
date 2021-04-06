import React from "react";

function Joke(props) {
  /* Alternateive solution for non-inputed question:
<h3 style={{display: props.question ? "block" : "none"}}>Question: {props.question}</h3>
 
... or this one:
<h3 style={{display: !props.question && "none"}}>Question: {props.question}</h3>

... because when solution below is used following WARNING is being thrown:
"Warning: validateDOMNesting(...): <div> cannot appear as a descendant of <p>. 
in div (created by Joke) in p (created by Joke) in div (created by Joke) in Joke 
(created by App) in div (created by App) in App"
  */
  return (
    <div>
      <p>
        {props.question === undefined ? (
          ""
        ) : (
          <div>
            <b>Question:</b>
            {props.question}
          </div>
        )}
      </p>
      <p style={{ color: !props.question && "#888888" }}>
        <b>Punchline</b>: {props.punchLine}
      </p>
    </div>
  );
}

export default Joke;
