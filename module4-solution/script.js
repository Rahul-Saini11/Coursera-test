(function (window) {

var names = ["Rahul", "John", "Jerry", "Jason", "Yaakov", "Saini", "Pankaj", "Jay"];

for (var i in names) {

  var firstLetter = ((names[i]).charAt(0)).toLowerCase();

  if (firstLetter == 'j') {
     window.byeSpeaker.speak(names[i]);
  } else {
     window.helloSpeaker.speak(names[i]);
  }
}
})(window);