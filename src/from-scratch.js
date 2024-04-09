// Q1 
const loop0UpTo10 = () => {
    for (let i = 0; i < 10; i++) {
      console.log(i);
    }
};
console.log("Question 1");
loop0UpTo10();

// Q2 
const loop5to10 = () => {
  for (let i = 5; i <= 10; i++) {
    console.log(i);
  }
};
console.log("Question 2");
loop5to10();

// Q3
// you do NOT need an if check
const loopEvenNumbersUpTo10 = () => {
    for (let i = 0; i < 10; i+=2) { // incrementing by 2 with STARTING at 0 => only even values 
        // if (i % 2 === 0) continue;  // not needed since incrementing by 2 
        console.log(i);
    }
};
console.log("Question 3");
loopEvenNumbersUpTo10();

// Q4 
const countdown5to0 = () => {
    for (let i = 5; i >= 0; i--) {
      console.log(i);
    }
};
console.log("Question 4");
countdown5to0();

// Q5  
const loopUpToNum = () => {
};

// Q10 
const fizzbuzz = () => {
};

module.exports = {
  loop0UpTo10,
  loop5to10,
  loopEvenNumbersUpTo10,
  countdown5to0,
  loopUpToNum,
  fizzbuzz,
};
