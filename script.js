/*
var posts = [
    {
      title: "Cats are awesome",
      author: "Sarthak",
      comments: ["ya you are right","no you arent right"]
    },
    {
        title: "Dogs are awesome",
        author: "Sarthak Shah",
        comments: ["Yes you are right","nop"]
    }
];

*/
/*
var someObject = {
    
    friends: [
        {name: "Malfoy"},
        {name: "Crabbe"},
        {name: "Goyle"}
    ],
    color: "baby blue",
    isEvil: true
};
*/

/*
var movies = [
    {
      title: "Godfather",
      rating: "5 Stars",
      hasWatched: true
    },
    {
      title: "Inception",
      rating: "5 Stars",
      hasWatched: true        
    },
    {
      title: "Shutter Island",
      rating: "4.5 Stars",
      hasWatched: true        
    },
    {
      title: "The Awakening",
      rating: "3 Stars",
      hasWatched: false        
    },
    {
      title: "No Mens Land",
      rating: "3 Stars",
      hasWatched: false        
    }
];

Array.prototype.myForEach = function(doProcessing){
   for(var i = 0 ; i < this.length ; i++){
       doProcessing(this[i]);
   }                        
};

function doProcessing(myObject){
  if(myObject.hasWatched){
    console.log("You have watched "+'\"'+myObject.title+'\"'+" - "+myObject.rating);  
  }
  else{
    console.log("You have not watched "+'\"'+myObject.title+'\"'+" - "+myObject.rating);       
  }
};


movies.myForEach(doProcessing);

*/


/*
var body = document.getElementsByTagName("body");
var defaultColor = true;


setInterval(function(){
    if(defaultColor){
        body[0].style.backgroundColor="blue";
    }
    else{
        body[0].style.backgroundColor="red";
    }
    defaultColor = !defaultColor;
},1000);

*/

/*
var button = document.getElementById("changer");
var body = document.getElementById("change");
var defaultColor = true;

button.addEventListener("click",function(){
    if(defaultColor){
        body.style.backgroundColor="brown";
    }
    else{
        body.style.backgroundColor="cyan";
    }
    defaultColor = !defaultColor;
});

*/

var scoreOne = document.getElementById("scoreOne");
var scoreTwo = document.getElementById("scoreTwo");
var playingTo = document.getElementById("playingTo");
var playingToInput = document.getElementById("playingToInput");
var oneScored = document.getElementById("oneScored");
var twoScored = document.getElementById("twoScored");
var reset = document.getElementById("reset");
var raceTo = 5;
var winnerFound=false;
var playerOneScore,playerTwoScore;
playerOneScore=playerTwoScore=0;

var resetFunction = function(){
    playerOneScore=playerTwoScore=0;
    scoreOne.innerHTML=0;
    scoreTwo.innerHTML=0;
    scoreOne.classList.remove("win");
    scoreTwo.classList.remove("win");
    winnerFound=false;
}

reset.addEventListener("click", resetFunction);

playingToInput.addEventListener("click",function(){ 
  raceTo = playingTo.innerHTML = playingToInput.value;
  resetFunction();
});

oneScored.addEventListener("click",function(){
   if(!winnerFound){
       playerOneScore = playerOneScore+1;
       scoreOne.innerHTML=playerOneScore;
       if(playerOneScore==raceTo){
           winnerFound=true;
           scoreOne.classList.add("win");
       }
   } 
});

twoScored.addEventListener("click",function(){
   if(!winnerFound){
       playerTwoScore = playerTwoScore+1;
       scoreTwo.innerHTML=playerTwoScore;
       if(playerTwoScore  ==raceTo){
           winnerFound=true;
           scoreTwo.classList.add("win");
       }
   } 
});










