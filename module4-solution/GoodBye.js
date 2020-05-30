(function (window) {

var byeSpeaker = {};
var word = "Good Bye";

byeSpeaker.speak = function (name) {
  console.log(word + " " + name);
}

window.byeSpeaker = byeSpeaker;

})(window);