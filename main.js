// Generated by CoffeeScript 1.9.3
var createIcon, createIcons, dimFactory, lightFactory;

lightFactory = function(icon) {
  return function() {
    return icon.attr({
      fill: '#fff'
    });
  };
};

dimFactory = function(icon) {
  return function() {
    return icon.attr({
      fill: '#000'
    });
  };
};

createIcon = function(name) {
  var paper;
  paper = Snap("#" + name + "-icon");
  return Snap.load("/imgs/" + name + "-icon.svg", function(f) {
    var icon;
    icon = f.select('#icon');
    paper.append(icon);
    return $("#" + name + "-icon").hover(lightFactory(icon)).mouseleave(dimFactory(icon));
  });
};

createIcons = function(list) {
  var i, len, name, results;
  results = [];
  for (i = 0, len = list.length; i < len; i++) {
    name = list[i];
    results.push(createIcon(name));
  }
  return results;
};

$(function() {
  return createIcons(["iare", "cluster", "cal", "news"]);
});

$(function() {});
