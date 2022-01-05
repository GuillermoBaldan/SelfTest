let array = JSON.parse(localStorage.getItem("SelfTest"));
if (array == null) {
  //Se crea el array
  array = [];
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("saveButton").addEventListener("click", function () {
    array.push(document.getElementById("editionBoard").value);
    document.getElementById("editionBoard").value = "";
    localStorage.setItem("SelfTest", JSON.stringify(array));
  });

  document
    .getElementById("displayContentButton")
    .addEventListener("click", function () {
      array.forEach((element) => {
        document.getElementById("display").innerHTML += element + "<br>";
      });
    });
});
