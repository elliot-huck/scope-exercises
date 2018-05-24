const llamaNamer = function () {
  const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
  const randomizer = Math.floor(Math.random() * 7)
  
  let name = "";
  let suffix = "";
  const namer = function () {
    name = possibleNames[randomizer]
    suffix = " the Llama"
  }
  namer();

  return name + suffix
}

for (let i = 0; i < 5; i++) {
  nameMaker = llamaNamer();
  console.log(nameMaker);
}