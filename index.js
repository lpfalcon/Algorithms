// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Hello World</h1>`;

function getPermutations(word) {
  if (word.length <= 1) {
    return [word];
  }
  const permitutationsList = [];
  const wordArray = [...word];
  for (const [index, letter] of wordArray.entries()) {
    const spliceArray = [...wordArray];
    spliceArray.splice(index, 1);
    const permutations = getPermutations(spliceArray);
    for (const permutation of permutations) {
      permitutationsList.push(`${letter}${permutation}`);
    }
  }
  return permitutationsList;
}

const permutations = getPermutations('sol');

console.log(permutations);
