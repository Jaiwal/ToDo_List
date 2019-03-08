// //check off Specific todos by clicking


// $("li").click(function(){


//     //if li is gray
//     if($(this).css("color")==="rgb(128, 128, 128)")
//     {
//             //turm it black
//             $(this).css({
//                 color:"black",textDecoration:"none"
//             });
//     }
      
//     //else
//     else{
//              //turn it gray
//              $(this).css({
//                 color:"gray",textDecoration:"line-through"
//             }); 
//     }
     
   
// });

//can also be done as


$("ul").on("click","li",function()
{
$(this).toggleClass("completed");


});

//click on X to delete a todo

$("ul").on("click","span",function(event){
    // $(this).parent().remove();
         $(this).parent().fadeOut(500,function(){
             $(this).remove();  //this refer to parent li not span
         });
    event.stopPropagation();
});

// $("ul").click(function(){
//     alert("clcked on ul");
// });

// $("#container").click(function(){
//     alert("clcked on container");
// });

// $("body").click(function(){
//     alert("clcked on body");
// });








//adding todo


$('input').keypress(function(event){
     if(event.which===13)
     {     //grabbing todo text from input
          var todoText=$(this).val();
          $(this).val("");
          //create a new li and add todo ul
          $("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText + "</li>");
     }
  });

  $(".fa-plus").click(function(){
      $("input").fadeToggle();

  });
  