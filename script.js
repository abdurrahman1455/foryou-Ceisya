$(document).ready(function () {
  $(".container")
    .mouseenter(function () {
      $(".card").stop().animate(
        {
          top: "-145px",
        },
        "slow"
      );
    })
    .mouseleave(function () {
      $(".card").stop().animate(
        {
          top: 0,
        },
        "slow"
      );
    });
});

function myFunction() {
  let rahasia =  document.getElementById("hidden-secret") 
  // rahasia.style.transition = "2s";
  rahasia.style.display = "block";
}