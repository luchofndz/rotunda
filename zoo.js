class Zoo {
  constructor() {
    this.animalCollection = [];
  }
  addAnimal(animalObj) {
    this.animalCollection.push(animalObj)
    return this.animalCollection;
  }
  createAnimal(animalSelected, message) {
    const animal = new Animal;
    let sound = this.getAnimalSound(animalSelected);
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
      case "Lion":
        text = " roar ";
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
    let output = inputText.split(" ").join(this.word);
    output = output.trim() + this.word;
    document.getElementById("output-zoo").innerHTML = output;
  }
}

submit = () => {
  const zoo = new Zoo;
  let animalSelected = document.getElementById('animal-selection');
  let animal = animalSelected.options[animalSelected.selectedIndex].innerHTML;
  let message = document.getElementById('form-message').value;

  if (message && animalSelected) {
    zoo.createAnimal(animal, message);
  }
  else {
    let output = "Please select an animal and write a message before submit!";
    document.getElementById("output-zoo").innerHTML = output;
  }  
}