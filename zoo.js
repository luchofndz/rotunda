class Zoo {
  constructor() {
    this.animalCollection = [];
  }
  addAnimal(animal) {
    this.animalCollection.push(animal)
    return this.animalCollection;
  }
  createAnimal = (kind) => {
    var aniaml = new Animmal;
    animal.animalSound("grr");
    animal.speak("this is a test message");
    this.addAnimal(animal);
  }
}

class Animal {
  constructor() {
    this.animalWord = " Animal Sound ";
  }
  animalSound = (sound) => {
    this.animalSound = sound;
  }
  speak = (inputText) => {
    var output = inputText.split(" ").join(this.animalWord);
    alert(output);
  }
}

submit = () => {
  var zoo = new Zoo;
  const textMessage = document.getElementById("").value;
  //const textMessage = document.getElementById("").value;
}

/*
mycar = new Model("Ford", "Mustang");
document.getElementById("demo").innerHTML = mycar.show();
*/