class Foo {
  constructor(name) {
    this.name = name;
  }

  display() {
    console.log(this.name);
  }
}

var foo = new Foo("Nikola");
foo.display(); // Nikola

/* The assignment operation below simulates loss of context
 * similar to passing the handler as a callback in the actual
 * React Component */
var display = foo.display;
display(); // thorws TypeError: this is undefined
