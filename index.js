var randomImg1=Math.random();
randomImg1=randomImg1*6;
randomImg1=Math.floor(randomImg1)+1;
var DiceSelection="dice" + randomImg1 + ".png";
var srcDice="images/" + DiceSelection;
var img1=$(".img1").attr("src",  srcDice);

var randomImg2=Math.floor(Math.random()*6)+1;
var DiceSelector2="dice" + randomImg2 + ".png";
var srcDice2="images/" +  DiceSelector2;
var img2=$(".img2").attr("src",srcDice2 );

if(randomImg1>randomImg2){
    $( ".winner").text("Player 1 Wins");
}else if(randomImg1<randomImg2){
    $( "h1").text("Player 2 Wins");
}else if(randomImg1=randomImg2){
    $( "h1").text("Tie");
}


//uguguygugyuy//