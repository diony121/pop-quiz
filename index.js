let score = 0;

let selectionInput = prompt(`What is the square root of 64:
[1] Eight
[2] Nine
`);

let selection = Number(selectionInput);

if (Number.isNaN(selection)) {
  alert("You must enter a number");
} else if (selection < 1 || selection > 2) {
  alert("Your selection must be 1 or 2");
} else {
  if (selection === 1) {
    score += 1;
  }
}

selectionInput = prompt(`What is the biggest US state:
[1] Texas
[2] Alaska
`);

selection = Number(selectionInput);

if (Number.isNaN(selection)) {
  alert("You must enter a number");
} else if (selection < 1 || selection > 2) {
  alert("Your selection must be 1 or 2");
} else {
  if (selection === 2) {
    score += 1;
  }
}

selectionInput = prompt(`What is the result of 5 + 2 * 10:
[1] 25
[2] 70
`);

selection = Number(selectionInput);

if (Number.isNaN(selection)) {
  alert("You must enter a number");
} else if (selection < 1 || selection > 2) {
  alert("Your selection must be 1 or 2");
} else {
  if (selection === 1) {
    score += 1;
  }
}

if (score === 0){
  alert("The user answered 0 questions correctly.")
} else if (score === 3){
  alert("The user answered all questions correctly.");
} else {
  alert("The user answered some questions correctly.")
}