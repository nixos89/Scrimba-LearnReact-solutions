import React from "react";

import Joke from "./Joke";
import jokesData from "./jokesData";

/** MDN docs at following links:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findindex
 */

function App() {
  /*
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const doubled = nums.map(function (num) {
    return num * 2;
  });
  console.log(doubled);*/

  const jokeComponents = jokesData.map((joke) => {
    retrun(
      <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />
    );
  });

  return <div>{jokeComponents}</div>;
}

export default App;
