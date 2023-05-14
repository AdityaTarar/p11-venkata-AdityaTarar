function calcWordFrequencies() {
  const input = prompt("Enter a list of words separated by spaces:");
  const words = input.trim().split(/\s+/);
  const frequencyMap = new Map();

  for (const word of words) {
    const count = frequencyMap.get(word) || 0;
    frequencyMap.set(word, count + 1);
  }

  for (const [word, count] of frequencyMap) {
    console.log(`${word} ${count}`);
  }
}
