function printMessage() {
  console.log("My first function");
}
printMessage();

//--------------------------------------------------

function print(message) {
  console.log(message);
}
print(); // undefined
print("My first function with parameters");

//--------------------------------------------------

function printUser(name,gender,weight,height){
   var bmi= weight / (height * height);
  
  console.log(name+ '|'+gender+'| BMI:'+bmi);
  
  if(bmi<18.5){
    console.log(name+ '|'+gender+'| BMI:'+bmi+'underweight');
  }else if (bmi<25){
    console.log(name+ '|'+gender+'| BMI:'+bmi+'normal weight');
  }else if (bmi<30){
    console.log(name+ '|'+gender+'| BMI:'+bmi+'overweight');
  }else {
    console.log(name+ '|'+gender+'| BMI:'+bmi+'obese');
  }
}

printUser("Ana","F",55,1.6);
printUser("Ion","M",180, 1.80);

var persons = [
  {
    name: "Ana",
    gender: "F",
    height: 1.6,
    weight: 60
  },
  {
    name: "Ion",
    gender: "M",
    height: 1.8,
    weight: 180
  }
];

for (var i=0;i<persons.length; i++){
  printUser(persons[i].name,persons[i].gender,persons[i].weight,persons[i].height)
}

//------------------------------------------------------------------------------

function computeSum(a,b){
  console.log('sum',a+b);
  
  a="My special number";
  console.log(a);
 }
  computeSum(2,3);  // 5 my special number
var a=2,b=3;
computeSum(a,b);  //5 my special numbers
console.log(a);    //a ramane 2
//even if a is modified inside the function ,it's value is not modified outside
//a is sent through valueOf

//----------------------------------------------------------------------------$

function displayFullName(name){
  console.log(name.first +' '+name.last);
  name.last="Batman";
  console.log(name.last); //Batman
}
var nameObject ={
  first:"Bruce",
  last:"Wayne"
};

displayFullName(nameObject); //Bruce Wayne,Batman
console.log(nameObject.last);// Batman













