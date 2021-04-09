class Foo {
  constructor(name) {
    this.name = name;
  }
  display() {
    console.log(this.name);
  }
}

var foo = new Foo("Saurabh");
foo.display = foo.display.bind(foo);
foo.display(); // Saurabh

var display = foo.display;
