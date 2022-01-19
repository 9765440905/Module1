// 1.The line without semicolon works fine 
// because of inbuild Automatic Semicolon Insertion, Javascript adds semicolon while parsing the source code
//  multiple line code and its working fine,
// In JavaScript There are three ways to write multiline code for that we can use
// three methods Template literal,Cocatenation,Using newline character.
alert("I'm JavaScript!");
alert('Hello') // this line is not having semicolon
alert(`World`)
alert(3 + 1 + 2); // this is multiple line code and its working

// 2.let admin=9, fname=10.5; 
// fname = "Guvi";
// lname = "geek"
// admin = fname+lname;
// alert( admin ); // "Guvi geek"
// Solution
let admin=9, fname=10.5; 
fname = "Guvi";
lname = "geek"
admin = fname+" "+lname;
alert( `"${admin}"` ); // "Guvi geek"

// 3.let fname=10.5; 
// fname = "Guvi";
// lname = "geek"
// let name = fname+lname;
// alert( 'hello ${name}' );
// solution
let fname=10.5; 
fname = "Guvi";
lname = "geek"
let name = fname+lname;
alert( `hello ${name}` );

// 4.let a = prompt("First number?");
// let b = prompt("Second number?");
// alert(a + b);
// Solution
let a =parseInt(prompt("First number?"));//2
let b =parseInt(prompt("Second number?"));//2
alert(a + b);//4

// 5.var a = "2" > "12";
//Don't touch below this
// if (a) {
//   console.log("Code is Blasted")
// }
// else
// {
//   console.log("Diffused") 
// }
// Solution
var a = 2 > 12;
//Don't touch below this
if (a) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
}

s (19 sloc)  424 Bytes
   
// 7.let a = prompt("Enter a number?");
//Don't modify any code below this
// if (a) {
//     console.log( 'OMG it works for any number inc 0' );
//    }
//    else
//    {
//     console.log( "Success" );
//    }
// Solution
let a =Number(prompt("Enter a number?"));
//Don't modify any code below this
if (a) {
 console.log( 'OMG it works for any number inc 0' );
}
else
{
 console.log( "Success" );
}

//8.let login = 'Employee';
// let message = (login == 'Employee') ? :
// (login == 'Director') ? 'Greetings' :
// (login == '') ? 'No login' :
// '';
// console.log(message); 
// Solution
let login = 'Employee';
let message = (login == 'Employee') ? 'Welcome':
              (login == 'Director') ? 'Greetings' :
              (login == '') ? 'No login' :'';
console.log(message);

// 9.You cant change the value of the msg
// let message;
// if (null || 2 || undefined )
// {
//  let message = "welcome boss";
// }
// else
// {
//  let message = "Go away";
// }
//   console.log(message);
// Solution
let message="welcome boss";
if (null || 2 || undefined )
{
 let message = "welcome boss";
}
else
{
  let message = "Go away";
}
  console.log(message);

// 10.let message;
// let lock = 2;
// //Dont change any code below this 
// if (null || lock || undefined )
// {
//   message = "Go away";
// }
// else
// {
//  message = "welcome";
// }
//   console.log(message);
// Solution
let message;
let lock = 0;
//Dont change any code below this 
if (null || lock || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
  console.log(message);

// 11.let message;
// let lock = 2;
// //Dont change any code below this
// if (lock && " " || undefined )
// {
//   message = "Go away";
// }
// else
// {
//  message = "welcome";
// }
// console.log(message);
// Solution
let message;
let lock=0;
//Dont change any code below this
if (lock && " " || undefined )
{
  message ="Go away";
}
else
{
 message ="welcome";
}
console.log(message);  

// 12.Change the code to print
// 3
// 2
// 1
// let i = 3;
// while (i) {
//   console.log( --i );
// }
// Solution
let i = 3;
while (i) {
  console.log( i-- );
}

// 13.Change the code to print 1 to 10 in 4 lines
// let num = 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// Solution
let num = 1
console.log(num,num += 1,num += 1);
console.log(num += 1,num += 1,num += 1);
console.log(num += 1,num += 1);
console.log(num += 1,num += 1);

// 14.Change the code to print even numbers
//You are allowed to modify only one character 
// for (let num = 2; num <= 20; num += 1) {
//     console.log(num)
//   }
//Solution
for (let num = 2; num <= 20; num += 2) 
{ 
    console.log(num);
}

// 15.Change the code to print all the gifts
// let gifts = ["teddy bear", "drone", "doll"];
// for (let i = 0; i < 3; i++) {
//     console.log('Wrapped ${'gifts[i]'} and added a bow!');
//   }
// Solution
let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
  console.log(`Wrapped ${gifts[i]} and added a bow!`);
}

// 16.Fix the code to disarm the bomb.
// let countdown = 100;
// while (countdown > 0) {
//     countdown--;
//     if(countdown == 0)
//     {
//      console.log("bomb triggered");
//     }
//   }
// Solution
let countdown = 100;
while (countdown < 0) {
  countdown--;
  if(countdown == 0)
  {
   console.log("bomb triggered");
  }
}

// 17.Whats the msg printed and why?
// var lemein = “0”;
// var lemeout = 0;
// var msg = “”;
// if (lemein) {
//  msg += “hi”;
//  }
// if (lemeout) {
//  msg += ‘Hello’;
// }
// console.log(msg)
// solution
var lemein = "0";
var lemeout = 0;
var msg = "";
if (lemein) {
 msg += "hi";
 }
if (lemeout) {
 msg += "Hello";
}
console.log(msg);//hi
// '0' - It is a truthy value,hence if condition becomes true & returns hi