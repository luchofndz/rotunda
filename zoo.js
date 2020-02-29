class Zoo {
  constructor() {
    this.animalCollection = [];
  }
  addAnimal(animalObj) {
    this.animalCollection.push(animalObj)
    return this.animalCollection;
  }
  createAnimal(animalSelected, message) {
    console.log("values selected:", animalSelected, message);
    var animal = new Animal;
    var sound = this.getAnimalSound(animalSelected);
    animal.animalSound(sound);
    animal.speak(message);
    this.addAnimal(animal);
  }
  getAnimalSound(animal) {
    let text = "";
    switch(animal) {
      case "Tiger":
        text = " grr ";
        break;
      case "Cow":
        text = " muu ";
        break;
      case "Snake":
        text = " pss ";
        break;
      case "Chicken":
        text = " pio ";
        break;
      case "Wolf":
        text = " auu ";
        break;
      default:
        text = "";
    }
    return (
      text
    );
  }
}

class Animal {
  constructor() {
    this.word = " Sound ";
  }
  animalSound(sound) {
    this.word = sound;
  }
  speak(inputText) {
    var output = inputText.split(" ").join(this.word);
    console.log(output);
    alert(output);
  }
}

submit = () => {
  var zoo = new Zoo;
  var animalSelected = document.getElementById('animal-selection');
  var animal = animalSelected.options[animalSelected.selectedIndex].innerHTML;
  var message = document.getElementById('form-message').value;
  zoo.createAnimal(animal, message);
}