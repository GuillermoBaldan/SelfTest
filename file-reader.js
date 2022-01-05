function previewFile() {
  const display = document.getElementById("display");
  const [file] = document.querySelector("input[type=file]").files;
  const reader = new FileReader();

  reader.addEventListener(
    "load",
    () => {
      // this will then display a text file
      display.innerText = reader.result;
    },
    false
  );

  if (file) {
    reader.readAsText(file);
  }
}

document.addEventListener("DOMContentLoaded", () => {});
