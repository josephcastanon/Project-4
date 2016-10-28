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
var opening = alert ("This is a story about Matthew");
var next =alert ("Matthew had 5 cats, James, Jack, John, Jared, and Jill");
var cat =prompt ("How many of Matthew's cats are males?");
if (cat =="4") {
  alert("Good I see that you're paying attention");
} else {
  alert ("how are you not paying attention so early in this narrative?") };

var next1 =alert ("Matthew liked to spend all of his days inside. He scratched his head in his free time.");
var next2 =alert ("On Sundays, Matthew went to the morgue for lunch");
var next3 =alert ("While eating his fruit roll-up on the autopsy table, Matthew would sometimes sing and play the flute to the dead bodies of people he never met.")
var next4 =alert ("Matthew enjoyed singing to the deceased because he felt that the dead wouldn't judge him for his tone-deaf singing.")
var guitar =prompt ("What kind of instrument does Matthew play?");
if (guitar =="flute") {
    alert("Great! You're actually following this story!")
} else {
  alert ("It seems like you're not paying attention to this story.")};
var next5 =alert ("When it rained, Matthew went back home.")
var next6 =alert ("On these rainy days, Matthew watched episodes of Girls Gone Wild for hours. It was his favorite show.")
var next7 =alert ("When there wasn't any rain, Matthew still enjoyed staying inside.")
var next8 =alert ("Matthew had a brother but he lived in another country that Matthew never heard about.")
var catname =prompt ("Let's see if you're keeping up! What is the name of Matthew's only female cat?")
if (catname =="Jill") {
  alert("Wow someone's actually listening to this story");
}if (catname =="jill") {
  alert("You're close but check your capital letters for proper nouns, you silly goose");
} else {
  alert ("It seems like youre memory ain't that good, kid.")};
var next9 = alert("Anyways, let's continue with this story.")

var next10 = alert("One of these usual mornings when Matthew awoke, something was missing.")

var next11 =alert("Matthew always awoke to the feeling of his 5 cats licking his toes but this morning there was no licking at all.")

var next12 =alert("Matthew thought to himself for a second")

var ask1 = prompt("He asked himself, should I get up and see what's wrong or go back to sleep?");

if (ask1 =="get up")
alert("Matthew got up");

if (ask1 =="go back to sleep") {
  alert ("Matthew laid back in bed and was tragically attacked and murdered by his 5 undercover-spy cats.");
} else {
  alert ("Matthew started to walk around the bed. He tripped over his feet and broke his ankle. His savage, blood-thirsty cats began to gnaw on his feet until they consumed his entire body. Matthew was never seen again. Rumor has it you can still hear his horrible singing if you visit the morgue..."
)};

var end = alert ("RIP Matthew")

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
  alink.href = "https://scontent.cdninstagram.com/hphotos-xfp1/t51.2885-15/e15/11018530_1583863771859884_770672537_n.jpg";
  alink.text = "(no thanks)";
  document.getElementsByTagName("body")[0].appendChild(alink)

});
