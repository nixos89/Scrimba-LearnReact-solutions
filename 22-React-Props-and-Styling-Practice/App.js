import React from "react";
import Joke from "./Joke.js";

function App() {
  return (
    <div>
      <Joke
        question="Why are gay people always smiling?"
        punchLine="Because they can’t keep a straight face."
      />
      <Joke
        question="Why did David Hasselhoff change his name to 'The Hoff?'"
        punchLine="It’s less hassle."
      />
      <Joke
        question="Why does Waldo wear stripes?"
        punchLine="Because he doesn’t want to be spotted."
      />
      <Joke punchLine="It’s hard to explain puns to kleptomaniacs because they always take things literally." />
      <Joke
        question="What is Whitney Houston’s favorite type of coordination? "
        punchLine="HAAANNNNND EYEEEEEEE."
      />
    </div>
  );
}

export default App;
