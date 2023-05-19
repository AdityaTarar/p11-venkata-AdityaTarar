function createBankingApp() {
  let counter = 1;

  return function generateTransactionId() {
    const uniqueString = counter;
    counter++;
    return Symbol(uniqueString);
  };
}

const generateTransactionId = createBankingApp();

const transaction1 = generateTransactionId();
console.log(transaction1);

const transaction2 = generateTransactionId();
console.log(transaction2);

const transaction3 = generateTransactionId();
console.log(transaction3);
