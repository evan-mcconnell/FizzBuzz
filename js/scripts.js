var pingPongAnswer = [];

var answers = function(userNumber) {
  pingPongAnswer = [];
  for (i = 1; i <= userNumber; i++) {
    if (i % 15 === 0) {
      pingPongAnswer.push("Ping-Pong");
    } else if (i % 5 === 0) {
      pingPongAnswer.push("Pong");
    } else if (i % 3 === 0) {
      pingPongAnswer.push("Ping");
    } else {
      pingPongAnswer.push(i);
    }
  };
  return pingPongAnswer;
};



$(document).ready( function (){
  $("#inputForm").submit( function (event) {
    event.preventDefault();
    $("#outputList").empty();
    inputNumber = parseInt($("input#number").val());
    !isNaN(parseInt(inputNumber)) ? inputNumber : alert("Please make sure you entered a number!");
    console.log(inputNumber);
    var resultsArray = answers(inputNumber);
    console.log(resultsArray);
    var answerList = resultsArray.forEach( function(input){
      $("#outputList").append("<li>" + input + "</li>");
    });
    $("#outputList").show();
  });
});
