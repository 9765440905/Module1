// Solving problems using array functions on rest countries data.
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/all", true);
request.send();
request.onload = function () {
  var data = JSON.parse(request.response);
  console.log(data);
  //   1.Get all the countries from Asia continent /region using Filter function
  var casia = data.filter((element) => element.region === "Asia");
  console.log(casia);

  // 2.Get all the countries with a population of less than 2 lakhs using Filter function
  var population = data.filter((element) => element.population < 200000);
  console.log(population);

  // 3.Print the following details name, capital, flag using forEach function
  var cflag = data.forEach((element) => {
    console.log(`${element.name} ${element.capital} ${element.flag}`);
  });

  // 4.Print the total population of countries using reduce function.
  var result = data.reduce((accumulator, element) => {
    return accumulator + element.population;
  }, 0);
  console.log(result);
  // 5.Print the country which uses US Dollars as currency.
  let cusd = data.filter((element) => {
    for (let i in element.currencies) {
      if (element.currencies[i].code === "USD") {
        return true;
      }
    }
  });
  console.log(cusd);
};
