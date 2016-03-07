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
  });

//Operators
  $('.operator:not(#calc, #cancel)').on('click', function(){
    var operator = $(this).text();

    if(operator === 'x'){
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
    $('#screen').empty();
  });

});
