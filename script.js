$(document).ready(function() {
  // References:
  var $form = $("#rForm");
  var $subm = $("#submitForm");
  var $impt = $form
    .find("option, :input")
    .not(":button, :submit, :reset, :hidden");
  // Submit function:
  $form.submit(function(e) {
    e.preventDefault();
    // $.post($(this).attr('action'), $(this).serialize(), function(response){
    // On success, clear all inputs;
    $impt
      .val("")
      .attr("value", "")
      .removeAttr("checked")
      .removeAttr("selected");
    // },'json');
    // return false;
  });
});