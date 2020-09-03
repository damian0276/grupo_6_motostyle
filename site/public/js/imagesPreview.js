window.addEventListener("load", () => {
  //captura de elementos
  /*
  let coverImage = document.querySelector(".coverImage-input");
  let imgPreview = document.getElementById("preview-cover-img");

  coverImage.addEventListener("change", () => {
    let file = coverImage.files[0];
    let reader = new FileReader();
    reader.onload = function (e) {
      console.log(e);
      imgPreview.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });*/

  let inputsFile = document.querySelectorAll(".botonImg");
  let previewsImages = document.querySelectorAll(".preview-img");
  //console.log(inputsFile);
  //console.log(previewsImages);
  //-----------Para que se muestren las imagenes cuando la ponemos en el input ------------------
  for (let i = 0; i < inputsFile.length; i++) {
    inputsFile[i].addEventListener("change", () => {
      let file = inputsFile[i].files[0];
      let reader = new FileReader();
      reader.onload = function (e) {
        console.log(e);
        previewsImages[i].src = e.target.result;
      };
      reader.readAsDataURL(file);
    });
  }
});
