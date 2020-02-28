class Zoo {
  constructor() {
    this.animalCollection = [];
  }
  addAnimal(animal) {
    this.animalCollection.push(animal)
    return this.animalCollection;
  }
  createAnimal(kind) {
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
  animalSound(sound) {
    this.animalSound = sound;
  }
  speak(inputText) {
    var output = inputText.split(" ").join(this.animalWord);
    alert(output);
  }
}

submit = () => {
  //var zoo = new Zoo;
  //const textMessage = document.getElementById("").value;
  //const textMessage = document.getElementById("").value;
  var e = document.getElementsByClassName("dropdown-selection");
  //var e = document.getElementById("dropdown-selection");
  var result = e.options[e.selectedIndex].value;
  console.log("result", result);
  alert(result); //ID002
  //$(".dropdown-toggle").dropdown();
}

/*
mycar = new Model("Ford", "Mustang");
document.getElementById("demo").innerHTML = mycar.show();
*/