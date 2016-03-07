'use strict';
$(document).ready(function(){
var currentTotal = 0;
var firstNumber;
var secondNumber;
var fullNumber;
var result;

//Numbers
  $('span:not(#cancel,#calc, .operator)').on('click', function(){
    var number = $(this).text();
    $('#screen').append(number);
    fullNumber = $('#screen').text();
    console.log(fullNumber);
  });

//Operators
  $('.operator:not(#calc, #cancel)').on('click', function(){
    var operator = $(this).text();
    console.log(operator);

    if(operator === 'x'){
      // actualOperator = '*';
      result = operator.replace(/x/g, '*');
      $('#screen').append(' ' + result + ' ');

    }
  //   else if(operator === &divide;){
  //    result = operator.replace(/\u00F7/g, '/');
  //    $('#screen').append(' ' + result + ' ');
  //  }
    else if(operator !== '+' || '-' || 'x' || '=' || 'C'){
     result = operator.replace(/\u00F7/g, '/');
     $('#screen').append(' ' + result + ' ');
    }
    else {
      var operator = $(this).text();
      $('#screen').append(' ' + operator + ' ');
    }
  });

//Equals
  $('#calc').on('click', function(){
    var total = eval(fullNumber);
    console.log(total);
    $('#screen').empty();
    $('#screen').append(total);
  });
//Clear
  $('#cancel').on('click', function(){
    // console.log('cancel');
    // console.log(this.innerHTML);
    $('#screen').empty();
  });

});





// $(document).ready(function(){
//
//   var currentTotal = 0;
//   var secondNumber;
//   var total;
//
//   function pickNumber(event){
//     var number = this.innerHTML;
//     if(currentTotal === 0) {
//       currentTotal = number;
//       console.log(currentTotal);
//       $('#screen').html(currentTotal);
//
//     } else {
//       secondNumber = number;
//       $('#screen').html(secondNumber);
//       total = +currentTotal + +secondNumber;
//       console.log(secondNumber);
//       console.log(currentTotal);
//     }
//     $('#screen').html(total);
//     currentTotal = 0;
//   }
//   // var mathMethod;
//   // function operators(event){
//   //     if(this.innerHTML === '-'){
//   //       mathMethod = 'subtraction';
//   //     } else if(this.innerHTML === '+'){
//   //       mathMethod = 'addition';
//   //     } else if(this.innerHTML === 'x'){
//   //       mathMethod = 'multiplication';
//   //     } else if(this.innerHTML === 'C'){
//   //       mathMethod = 'clear';
//   //     } else if(this.innerHTML === '='){
//   //       mathMethod = 'total';
//   //     } else {
//   //       mathMethod = 'division';
//   //     }
//   //   console.log(mathMethod);
//   // }
//   var operators = $('.operator');
//
//   function isNumber(event){
//     if($.isNumeric(this.innerHTML)) {
//       console.log('number!');
//     } else{
//         console.log('not a number!');
//     }
//   }
//
//   // function printToCalc(){
//   //   this.innerHTML = currentTotal;
//   // }
// // $('#screen').html(currentTotal);
//   // $('#screen').on('click', printToCalc);
//
//   // $('.operator').on('click', operators);
//
//   $('span').on('click', pickNumber);
//   // $('span').on('click', isNumber);
//
// });
