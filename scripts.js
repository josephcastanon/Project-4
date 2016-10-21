$(document).ready(function(){

//   console.log("hello world");
//
//   var myGreeting = "hello, world with variables";
//
//   console.log(myGreeting + "and also strings!");
//
// var x = 100;
// var y = 5;
//
// console.log((x*y) + "5");
//
// if (x > 5) {
//   console. log("it's 5!");
// } else if (x == 100) {
//   console.log("it's 100");
// } else {
//   console.log("it's neither 5 nor 100");
// }
var opening = alert ("This is a story about Bob");
var next =alert ("Bob had 5 cats, James, Jack, John, Jared, and Jill");
var cat =prompt ("How many of Bob's cats are males?");
if (cat =="4") {
  alert("Good I see that your'e paying attention");
} else {
  alert ("how are you not paying attention so early in this narrative?") };

var next1 =alert ("Bob liked to spend most of his days inside. He played guitar in his free time.");
var next2 =alert ("On Sundays Bob went to the cemetary for lunch");
var next3 =alert ("While eating his peanutbutter and chicken sandwich in the graveyard, Bob would sometimes sing to the graves of people he never met.")
var next4 =alert ("Bob enjoyed singing to the deceased because he felt that the dead wouldn't judge him.")
var guitar =prompt ("What kind of instrument does Bob play?");
if (guitar =="guitar") {
    alert("Great! You're actually following this story!")
} else {
  alert ("It seems like you're not paying attention to this story.")};
var next5 =alert ("When it rained, Bob went back home.")
var next6 =alert ("On these rainy days, Bob watched episodes of The Twilight Zone for hours. It was his favorite show.")
var next7 =alert ("When there wasn't any rain, Bob still enjoyed staying inside.")
var next8 =alert ("Bob had a brother but he lived in another country that Bob never heard about.")
var catname =prompt ("Let's see if you're keeping up! What is the name of Bob's only female cat?")
if (catname =="Jill") {
  alert("Wow someone's actually listening to this story");
}if (catname =="jill") {
  alert("You're close but check your capital letters for proper nouns");
} else {
  alert ("It seems like you're memory ain't that good.")};
var next9 = alert("Anyways, let's continue with this story.")

var next10 = alert("One of these usual mornings when Bob awoke, something was missing.")

var next11 =alert("Bob always awoke to the sound of his 5 cats meowing and purring but this morning there was no sound at all.")

var next12 =alert("Bob thought to himself for a second")

var ask1 = prompt("He asked himself, should I get up and see what's wrong or go back to sleep?");

if (ask1 =="get up")
alert("Bob got up");

if (ask1 =="go back to sleep") {
  alert ("Bob went back to sleep.");
} else {
  alert ("Bob couldn't figure out what to do."
)};

var end = alert ("TO BE CONTINUED...")

$('body').append("Would you like to hear the story again?");


  // var next1 =alert ("Bob liked to spend most of his days inside. He played guitar in his free time.");
  // var next2 =alert ("On Sundays Bob went to the cemetary for lunch");


  // var math2 = prompt ("What is 5*5");
  // var math = prompt ("What is 3+2?");
  //
  // if (math =="5") {
  //   alert("correct!");
  // } else {
  //   alert ("you're an idiot");
  // }
  //
  // var math2 = prompt ("What is 5*5");
  // if (x > 5) {
  //   console. log("it's 5!");
  // } else if (x == 100) {
  //   console.log("it's 100");
  // } else {
  //   console.log("it's neither 5 nor 100");


  $("body").prepend();
  var alink = document.createElement("a");
  alink.href = "index.html";
  alink.text = "(yes)";
  document.getElementsByTagName("body")[0].appendChild(alink)



  $("body").prepend();
  var alink = document.createElement("a");
  alink.href = "https://www.google.com";
  alink.text = "(no thanks)";
  document.getElementsByTagName("body")[0].appendChild(alink)

});
