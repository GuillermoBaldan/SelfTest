import {
  saveTest,
  createTestCollection,
  formatLocalStoreMemoApp,
} from "../SelfTest_functions.js";

let allTestsArray = JSON.parse(localStorage.getItem("SelfTest"));
let arrayContentLoaded;
if (allTestsArray == null) {
  //Se crea el array
  allTestsArray = [];
}
let externalFile;
let modal = document.querySelector(".modal");
let container = modal.querySelector(".container-modal");

function setVariable(variable, value) {
  variable = value;
}

function readFile() {
  const display = document.getElementById("display");
  const [file] = document.querySelector("input[type=file]").files;
  const reader = new FileReader();

  reader.addEventListener(
    "load",
    () => {
      // this will then display a text file
      externalFile = reader.result;
    },
    false
  );

  if (file) {
    reader.readAsText(file);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("saveButton").addEventListener("click", function () {
    console.log("allTestsArray:");
    console.log(allTestsArray);
    if (allTestsArray.length == 0) {
      //Display Modal for creating a new test collection

      modal.classList.remove("hidden");
    } else {
      let select = document.getElementById("options");
      let collectionNumber = 0;
      let question = document.getElementById("questionTextArea").value;
      let a = document.getElementById("answerATextArea").value;
      let b = document.getElementById("answerBTextArea").value;
      let c = document.getElementById("answerC-board").value;
      let d = document.getElementById("answerD-board").value;
      let solution = select.options[select.selectedIndex].value;
      saveTest(collectionNumber, a, b, c, d, solution);
    }
  });

  document
    .getElementsByClassName("create-test-collection-button")[0]
    .addEventListener("click", function () {
      let name = document.getElementsByClassName("input-test-name")[0].value;
      createTestCollection(name);
      modal.classList.add("hidden");
    });

  /*   document
    .getElementById("displayContentSavedButton")
    .addEventListener("click", function () {
      array.forEach((element) => {
        document.getElementById("display").innerHTML += element + "<br>";
      });
    }); */

  document
    .getElementById("downloadTests")
    .addEventListener("click", function () {
      let data = JSON.stringify(array);
      let a = document.createElement("a");
      let file = new Blob([data], { type: "text/plain" });
      a.href = URL.createObjectURL(file);
      a.download = "SelfTest.json";
      a.click();
    });

  document.getElementById("loadTests").addEventListener("click", function () {
    arrayContentLoaded = JSON.parse(externalFile);
  });

  document.getElementById("display").addEventListener("click", function () {
    arrayContentLoaded.forEach((element) => {
      document.getElementById("display").innerHTML += element + "<br>";
    });
  });

  document
    .getElementById("formatAppMemory")
    .addEventListener("click", function () {
      formatLocalStoreMemoApp();
    });

  document.getElementById("showData").addEventListener("click", function () {
    showLocalStoreMemoApp();
  });
});

export { setVariable, allTestsArray };
