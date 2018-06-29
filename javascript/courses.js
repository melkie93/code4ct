//navbar
$(document).ready(function(){
  $('.menu-toggle').click(function(){
    $('nav').toggleClass('active')
  })
})


// styling my cart
  // styling my add and remove
  $(function(){
    $("#add1").click(function(){
      $("<h2 style='color:white;' id='button1'>Intro to Coding: Web Pages price:R250</h2>").appendTo("#cart");
    });
  });

  $(function(){
    $('#remove1').click(function(){
        $('#button1').remove();
    });
  });
  $(function(){
    $("#add2").click(function(){
      $("<h2 style='color:white;' id='button2'>Intro to Coding: Music price: R250</h2>").appendTo("#cart");
    });
  });

  $(function(){
    $('#remove2').click(function(){
        $('#button2').remove();
    });
  });
  $(function(){
    $("#add3").click(function(){
      $("<h2 style='color:white;' id='button3'>Intro to Coding: Animation price: R250</h2>").appendTo("#cart");
    });
  });

  $(function(){
    $('#remove3').click(function(){
        $('#button3').remove();
    });
  });
  $(function(){
    $("#add4").click(function(){
      $("<h2 style='color:white;' id='button4'>Beginner JavaScript price: R1800</h2>").appendTo("#cart");
    });
  });

  $(function(){
    $('#remove4').click(function(){
        $('#button4').remove();
    });
  });
  $(function(){
    $("#add5").click(function(){
      $("<h2 style='color:white;' id='button5'>Beginner Front End Web Development price: R1800</h2>").appendTo("#cart");
    });
  });

  $(function(){
    $('#remove5').click(function(){
        $('#button5').remove();
    });
  });
  $(function(){
    $("#add6").click(function(){
      $("<h2 style='color:white;' id='button6'>Beginner Python price: R1800</h2>").appendTo("#cart");
    });
  });

  $(function(){
    $('#remove6').click(function(){
        $('#button6').remove();
    });
  });
  // styling my total
  var total = 0;
// "#add1, #add2, #add3, #add4, #add5, #add6, #add7, #add8, #add9, #add10, #add11, #add12"
 $(function(){
   $("[id^=add]").click(function(){
     total = Number(total) + Number($(this).val());
     if(total < 0 ) {
       $('#total').text("Total:R " + total);
       // true
     } else {
       // console.log ('dont do anything');
       $('#total').text("Total:R " + total);
     }
   });
   // $('#total').text("Total:R " + total);
 });

 $(function(){

   $("[id^=remove]").click(function(){
     total = Number(total) - Number($(this).val());
     if(total < 0 ) {
       $('#total').text("Total:R " + total);
       // true
     } else {
       // console.log ('dont do anything');
       $('#total').text("Total:R " + total);
     }

   });

 });
