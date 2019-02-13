console.log("Connected!");

$(".fa-plus").on("click", function() {
  $("input").toggle(100);
});

$("input[type='text']").keypress(function(e) {
  if (e.which === 13) {
    var newTodo = $(this).val();
    $(this).val("");
    $("ul").append(
      '<li><span class="delete"><i class="fas fa-trash-alt"></i></span>' +
        newTodo +
        "</li>"
    );
  }
});

$("ul").on("click", "li", function() {
  $(this).toggleClass("done");
  console.log("li was clicked!");
});

$("ul").on("click", ".delete", function(e) {
  $(this)
    .parent()
    .fadeOut(200, function() {
      this.remove();
    });
  e.stopPropagation(); //so that event for parent element doesn't concurrently fire
});
