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
const loopUpToNum = (num) => {
    for (let i = 0; i < num; i++) {
      console.log(i);
    }
};
console.log("Question 5");
loopUpToNum();

// Q10 
const fizzbuzz = () => {
    for (let i = 1; i <= 100; i++) {
      if (i % 3 !== 0 && i % 5 !== 0) {
        console.log(i);
      }
      else if (i % 3 === 0 && i % 5 === 0) {
        console.log('fizzbuzz');
      }
      else if (i % 3 === 0 && i % 5 !== 0) {
        console.log('fizz');
      }
      else if (i % 3 !== 0 && i % 5 === 0) {
        console.log('buzz');
      }
    }
};
console.log("Question 10");
fizzbuzz();

// named exports 
module.exports = {
  loop0UpTo10,
  loop5to10,
  loopEvenNumbersUpTo10,
  countdown5to0,
  loopUpToNum,
  fizzbuzz,
};
