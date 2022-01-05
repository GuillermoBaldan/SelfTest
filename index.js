let array = JSON.parse(localStorage.getItem("SelfTest"));
if (array == null) {
  //Se crea el array
  array = [];
}
let i;
let finalFile;

function leer(input, form) {
  for (var i = 0; i < input.files.length; i++) {
    if (input.files[i]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        let img = document.querySelector('<img id="dynamic">');
        img.attr("src", e.target.result);
        img.appendTo(form);
      };
      reader.readAsDataURL(input.files[i]);
    }
  }
  return input.file[0];
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
      let data = JSON.stringify(array);
      let a = document.createElement("a");
      let file = new Blob([data], { type: "text/plain" });
      a.href = URL.createObjectURL(file);
      a.download = "SelfTest.json";
      a.click();
    });

  document.getElementById("uploadData").addEventListener("click", function () {
    let archivo = document.getElementById("pic");
    archivo.addEventListener("change", function (event) {
      finalFile = leer();
    });
    console.log(finalFile);
    /*  var file = document.getElementById("file").files[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function (event) {
      let data = event.target.result;
      array = JSON.parse(data);
    }; */
  });
});
