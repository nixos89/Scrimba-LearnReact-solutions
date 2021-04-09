// "use strict";
const wait = (time) => new Promise((resolve) => setTimeout(resolve, time));

wait(4000).then(() => console.log("Hello!"));
