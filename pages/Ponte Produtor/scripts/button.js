let button = document.getElementsByClassName("button-container");

$( button ).click(function() {
  $( content ).slideToggle( "slow" );
});

button.addEventListener("click", () => {
  let content = document.getElementsByClassName("content");
  let i = document.getElementsByClassName("fa-arrow-down");
  $( button ).click(function() {
    $( content ).slideToggle( "slow" );
    $( fa-arrow-down ).toggle();
  });
});