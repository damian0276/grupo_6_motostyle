window.addEventListener("load", () => {
  let coverImage = document.querySelectorAll(".botonImg");
  //console.log(coverImage);
  coverImage[0].addEventListener("change", (e) => {
    console.log(e);
  });
});
