/** FEEDBACK: Great job! */
const brokenLoop = (start, end) => {
  let result = '';
  for (let i = start; i <= end; i++) {  // go from start to end, incrementing 
    result += i;
  }
  return result;
};

const brokenNested = () => {
  let result = '';
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 10; j++) {  // nested loop 
      result += `-${i}${j}`;
    }
  }
  return result.slice(1);
};

// named exports 
module.exports = {
  brokenLoop,
  brokenNested,
};
