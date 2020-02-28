class Zoo {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Animal {
  constructor() {
  }

  // insert = (index, string) => {
  //   if (index > 0)
  //   {
  //     return this.substring(0, index) + string + this.substring(index, this.length);
  //   }
  
  //   return string + this;
  // }

  speak = (inputText) => {
    var inputText = "I want apple";
    var b = " miaw ";
    var output;

    output = inputText.replace("", b);
    var inputText = "I want apple";
    var b = " miaw ";
    var output = inputText.split(" ").join(b);
   alert(output);
    
  }
}
/*
class Cat extends Animal {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

mycar = new Model("Ford", "Mustang");
document.getElementById("demo").innerHTML = mycar.show();
*/