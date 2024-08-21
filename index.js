var randomnumber1 =Math.floor(Math.random()*6)+1;
console.log(randomnumber1);

//math.random generates random between 0-1;
//we will multiply it with 6 to generate between 1-6
//as 6 is non inclusive we will add +1 to get values till 6

var randomdiceimg="dice"+randomnumber1+".png";
var randomsource="images/"+randomdiceimg;//imges/dice1.png

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomsource);



var randomnumber2 =Math.floor(Math.random()*6)+1;
console.log(randomnumber2);

var randomdiceimg2="dice"+randomnumber2+".png";
var randomsource2="images/"+randomdiceimg2;

document.querySelectorAll("img")[1].setAttribute("src",randomsource2);

if(randomnumber1>randomnumber2)
{
    document.querySelector("h1").innerText="Player 1 wins";

}
else if(randomnumber2>randomnumber1)
{
  document.querySelector("h1").innerText="Player 2wins";

}
else if( randomnumber1==randomnumber2)
{
  document.querySelector("h1").innerText="Tie";
}