// Use the rest countries API url -> https://restcountries.eu/rest/v2/all and display all the country flags in console
// Use the same rest countries and print all countries name, region, sub region and population
let request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all",true);
request.send();
request.onload=function(){
    var data = JSON.parse(this.response);
    console.log(data);
    for(let x in data){
        console.log(data[x].flag +" "+data[x].name +" "+data[x].region+" "+data[x].subregion+" "+data[x].population);
    }
}