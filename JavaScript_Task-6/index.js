// 1.Declare four variables without assigning values and print them in console
var a;
let b;
const c;
var d;
console.log(a);
console.log(b);
console.log(c);
console.log(d);

// 2.How to get value of the variable myvar as output
var myvar =1;
console.log(myvar);

// 3. Declare variables to store your first name, last name, marital status, country and age in multiple lines
let firstName="Chokkalingam";
let lastName= "S";
let Maritalstatus="Unmarried";
let age=25;
let country="India";

// 4. Declare variables to store your first name, last name, marital status, country and age in a single line
let firstName="Chokkalingam", lastName= "S" , Maritalstatus="Unmarried",age=25,country="India";

// 5. Declare variables and assign string, boolean, undefined and null data types
let s="string", a=true , b=undefined,c=null;

es (11 sloc)  212 Bytes
   
// 6. Convert the string to integer
// parseInt()
// Number()
// Plus sign(+)
let a="string";
let b=parseInt(a);
let c=parseFloat(a);
let d=Math.abs(a);
console.log(b);
console.log(c);
console.log(d);

// 7. Write 6 statement which provide truthy & falsey values.
let a=5;
let result = (a>0)?"+ve number-True"
             :(typeof a=="string")?"string-True"          
             :(a%2)?"Odd-True"
             :(a%2==0)?"Even-True"
             :(a<0)?"-ve number-True"
             :(typeof a=="Number")?"Number-True"
             :(a);
console.log(result);

// 8.Print the contents of the input variable
var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
    ]
    function dataHandling(input)
    {
        for (var i = 0; i < input.length; i++) 
        {
          var s=input[i];
          for(let n of s)
          {
              console.log(n);
          }
        }
    }
        dataHandling(input);

// 9.What the output
myobject = {"1":"one","11":1,"name":"arun"}
// console.log(myobject.11); //Error
console.log(myobject.name); //arun 

// 10.Add a new key value pair to myobject
// key : ten
// value : ten
myobject["ten"]="ten";
console.log(myobject); 

// 11.Write out an object literal to represent the data below.
// Guvi, Geek, 6, IIT-M RP,Chennai.
let s={"name1":"Guvi","name2":"Geek","no":6,"location":"IIT-M","city":"Chennai"};
console.log(s);

// 12.How would you represent the following data using a combination of object literals and arrays? 
// Guvi, Geek, 6, IIT-M RP,Chennai.
// Amazon, Inc, 31, SP Infocity, Chennai.
// Google, Alphabet, 34 Amphitheater Parkway, MountainView.
// Tesla, Inc , 32, 333 Santana Row,San Jose.
let y=[{"name1":"Guvi","name2":"Geek","no":6,"location":"IIT-M","city":"Chennai"},
["name3","AmazonInc","no",31,"location","IIT-M RP","city","Chennai"],
{"name3":"Google","type":"Alphabet","no":34,"location":"Amphitheater Parkway","city":"MountainView"},
["name4","Tesla","no",32,"no1",333,"location","Santana Row","city","San Jose"]];
console.log(y);