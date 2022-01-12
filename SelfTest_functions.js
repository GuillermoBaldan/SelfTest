import { allTestsArray } from "./index.js";

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

function createTestCollection(name) {
  let testCollection = {
    name: name,
    tests: [],
  };
  allTestsArray.push(testCollection);
  localStorage.setItem("SelfTest", JSON.stringify(allTestsArray));
}

function formatMemoryApp() {
  let voidData = [];
  localStorage.setItem("SelfTest", JSON.stringify(voidData));
}

export { saveTest, createTestCollection, formatMemoryApp };
