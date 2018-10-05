var inputNumber = 0;



$(document).ready( function (){
  $("#inputForm").submit( function (event) {
    event.preventDefault();
    $("#outputList").empty();
    var inputNumber = parseInt($("input#number").val());
    console.log(inputNumber);
    typeof inputNumber === "number" ? inputNumber : alert("Please make sure you entered a number!");
    for (i=1; i <= inputNumber; i ++) {
      if (i % 3 === 0 && i % 5 === 0) {
        $("ul#outputList").append("<li>Ping-Pong</li>");
      } else if (i % 3 === 0) {
        $("ul#outputList").append("<li>Ping</li>");
      } else if (i % 5 === 0) {
        $("ul#outputList").append("<li>Pong</li>");
      } else {
        $("ul#outputList").append("<li>" + i + "</li>");
      }

    }
  });
});
