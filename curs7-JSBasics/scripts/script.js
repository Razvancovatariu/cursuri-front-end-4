//alert("My first alert form a different file");
var x;
x=2;
console.log(x);


// numbers
var age = 29;
console.log("My age is",age);

var price = 4.99;
console.log("The price is",price,"$");

var fullName ="Covatariu Razvan";
console.log("My name is",fullName);

var paragraph = "Line 1 \nLine 2";
console.log(paragraph);

var backslash = "variable with \\";
console.log(backslash);

var quotes="\"this is a string inside quotes\"";
console.log(quotes);

var differentQuotes = '"another string"';
console.log(differentQuotes);

var isTrue=true,
    isFalse=false;
console.log(isTrue,isFalse);

var nullValue=null;
console.log("Null value",nullValue);

var undefinedValue;
console.log("Undefined value", undefinedValue);

var x=2;
console.log(x); // afisat 2
x = undefined;
console.log(x); //afisat undefined

console.log(43 % 10); //3 Restul impartirii lui 43 la 10

console.log(2 =='2');      //true
console.log(2 ==='2');     //false
console.log(2 === 2);      //true

console.log(typeof 10);             //afiseaza nr
console.log(typeof "text");         //string
console.log(typeof true);          // boolean
console.log(typeof false);          //boolean
console.log(typeof myVariable);     //nedefinit

console.log(typeof nullValue);      //object
console.log(typeof nullValue===null);  //false

var n = -10;
//var isPositive= n > 0? true : false;
var isPositive= n > 0 ? 1 : 0;
console.log("Is positive",isPositive);


var p =1+1;
var q= p*2;
console.log(p,q);


var firstName="Chuck";
var lastName="Norris";
var fullName= firstName+" "+lastName;
console.log("fullName", fullName);


var names=['diana','razvan','norbert','serban','marcus','alex','tamas'];
console.log(names[2]);
console.log(names.sort());
console.log('lenght',names.length);


var robot= {
  model:'TRX1000',
  color:'red',
  "full name":"Robot's name",
  //color:'blue'--->nu putem avea asa ceva in acelasi obiect
  walk:function(){
   console.log('robot is walking');
  }
};
console.log('color',robot.color);
console.log('full name', robot["full name"]); //robot.full name    incorect
robot.walk();


var color ="red"; //console.log(color);
if(color ==="red"){
  console.log("red color")
} else{
  console.log("not red");
}

var email="melania.moldovan@scoalainformala.ro";
console.log('index',email.indexOf("@"));
if (email.indexOf("@")>-1) {
  console.log("email correct");
} else{
  console.log("email incorrect");
}


var weather="rainy";
switch(weather){
  case 'rainy':
    console.log("Bring an umbrella");
    break;
  case 'sunny':
    console.log("Dress lightly");
    break;
  case 'cloudy':
    console.log("Go outside");
    break;
  default: console.log("Don't die");
    break;
}

var i=0;
while(i < 10);{
   console.log('number',i);
   i++;    //acelasi cu  i=i+1
}
console.log("while done");


var j=15;
do{
  console.log('j',j);
  j++;
} while (j<10);
console.log("do while done");


var numbers=[4,6,8,-2,3];
for(var k=0; k<numbers.length; k++){
  console.log('position k',k);
  console.log('element at position k',numbers[k]);
}

























































