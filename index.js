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

  document
    .getElementById("donwloadData")
    .addEventListener("click", function () {
      var data = JSON.stringify(array);
      var a = document.createElement("a");
      var file = new Blob([data], { type: "text/plain" });
      a.href = URL.createObjectURL(file);
      a.download = "SelfTest.json";
      a.click();
    });
});
