const whileToFor = () => {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
};
// console.log("Question 6");
// whileToFor();

const continueGuardClause = () => {
  for (let i = 1; i < 5; i++) {
    if (i === 2 || i === 3) continue;
    console.log("Sure glad this isn't 2 or 3");
    console.log(i);
  }
};
console.log("Question 7");
continueGuardClause();

// named exports 
module.exports = {
  whileToFor,
  continueGuardClause,
};
