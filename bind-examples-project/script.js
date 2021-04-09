var obj = {
  name: "Nikola",
  display: function () {
    // "use strict";
    console.log("(in da anonymous method) this.name:", this.name); // 'this' points to obj
  },
  display2: () => {
    // 'this' is bounded LEXICALLY, ie. to GLOBAL scope because it's ARROW function!
    console.log("(in da arrow method) this.name:", this.name);
  },
};
obj.display(); // Nikola
obj.display2(); // uh oh! global!

var name = "uh oh! global!";
var outerDisplay = obj.display; // assigning reference to 'display' function
var outerDisplayObj = obj.display(); // it DOES have OWNER object!

/* Following invocation does NOT have OWNER object, because it's only a REFERENCE!!!
Therefore it points to GLOBAL object */
console.log("invoking outerDisplay function as object...");
outerDisplay(); // uh oh! global!

console.log("outerDisplayObj:", outerDisplayObj); // undefined

/*
function setTimeout(callback, delay) {
  console.log("performing 'setTimeout'...");
  // next line LOOSES its CONTEXT (referes to GLOBAL scope again instead of LOCAL scope)!!
  callback(); // JS internally assings callback = obj.display;
}*/

console.log("About to execute 'setTimeout':");
setTimeout(obj.display, 3000);

obj.display = obj.display.bind(obj);
var outerDisplayBinded = obj.display;
console.log("Invoking 'outerDisplayBinded()':");
outerDisplayBinded();

console.log("About to execute 'setTimeout' (HARDLY binded):");
setTimeout(obj.display, 6000);
