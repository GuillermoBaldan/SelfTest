let array = JSON.parse(localStorage.getItem("SelfTest"));
let arrayContentLoaded;
if (array == null) {
  //Se crea el array
  array = [];
}
let externalFile;

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
    array.push(document.getElementById("editionBoard").value);
    document.getElementById("editionBoard").value = "";
    localStorage.setItem("SelfTest", JSON.stringify(array));
  });

  document
    .getElementById("displayContentSavedButton")
    .addEventListener("click", function () {
      array.forEach((element) => {
        document.getElementById("display").innerHTML += element + "<br>";
      });
    });

  document
    .getElementById("donwloadData")
    .addEventListener("click", function () {
      let data = JSON.stringify(array);
      let a = document.createElement("a");
      let file = new Blob([data], { type: "text/plain" });
      a.href = URL.createObjectURL(file);
      a.download = "SelfTest.json";
      a.click();
    });

  document.getElementById("loadData").addEventListener("click", function () {
    arrayContentLoaded = JSON.parse(externalFile);
  });

  document
    .getElementById("displayContentLoadedButton")
    .addEventListener("click", function () {
      arrayContentLoaded.forEach((element) => {
        document.getElementById("display").innerHTML += element + "<br>";
      });
    });
});
