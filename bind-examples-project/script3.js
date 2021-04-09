class Foo {
  constructor(name) {
    this.name = name;
    this.display = this.display.bind(this);
  }

  display() {
    console.log(this.name);
  }
}

var foo = new Foo("Nikola");
foo.display(); // Nikola

var display = foo.display;
display(); // Nikola
