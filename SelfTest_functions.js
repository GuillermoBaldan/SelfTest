function saveTest(collectionNumber, question, a, b, c, d, solution) {
  let test = {
    question: question,
    a: a,
    b: b,
    c: c,
    d: d,
    solution: solution,
  };
  allTestsArray[collectionNumber].tests.push(test);
  localStorage.setItem("SelfTest", JSON.stringify(allTestsArray));
}

export { saveTest };
