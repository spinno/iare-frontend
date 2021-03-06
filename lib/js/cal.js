// Generated by CoffeeScript 1.9.3
var menuSetup;

menuSetup = function(names) {
  var i, len, name, results;
  results = [];
  for (i = 0, len = names.length; i < len; i++) {
    name = names[i];
    results.push($(".menu-btn." + name).data("target", name).click(function() {
      $(".frame > div").addClass('hidden');
      return $("#" + ($(this).data("target"))).removeClass('hidden');
    }));
  }
  return results;
};

$(function() {
  var $cal;
  $cal = $("#cal").fullCalendar({
    aspectRatio: 1
  });
  return menuSetup(["main", "osa", "booking"]);
});
