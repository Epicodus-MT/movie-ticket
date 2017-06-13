//business logic
function Ticket (title, time, age){
  this.title = title;
  this.time = time;
  this.age = age;
  this.price = 12;
}

Ticket.prototype.isDiscountAge = function() {
  if (this.title === "Wonder Woman") {
    this.price += 5 ;
  }else{
    if (this.age < 18 || this.age >= 65) {
      this.price -= 2;
    }
    if (this.time === "matinee") {
      this.price -= 2;
    }
  }
  return this.price;
}

//user interface logic
$(document).ready (function () {
  $("form#new-ticket").submit(function (event) {
    event.preventDefault();

    $("#purchase span").each(function() {
      $(this).empty();
    });
    // $(".age").empty();
    // $(".movie").empty();
    // $(".time").empty();
    // $(".purchase-price").empty();



    var inputtedAge = $("input#age").val();
    var checkedTitle = $("input[name='movie']:checked").val();
    var checkedTime = $("input[name='time']:checked").val();



    var myTicket = new Ticket(checkedTitle, checkedTime, inputtedAge);
    $(".age").append(myTicket.age);
    $(".movie").append(myTicket.title);
    $(".time").append(myTicket.time);
    $(".purchase-price").append(myTicket.isDiscountAge());


  })
});
