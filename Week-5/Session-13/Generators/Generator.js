function* symbolIterator(arr) {
  for (let i = 0; i < arr.length; i++) {
    yield Symbol(arr[i]);
  }
}
const strings = ["hello", "world", "test"];
const iterator = symbolIterator(strings);

for (const symbol of iterator) {
  console.log(symbol);
}
