
const getCountries=()=>{

    const xhr= new XMLHttpRequest();

    xhr.open("GET","https://restcountries.com/v3.1/all");
    xhr.send();

    xhr.responseType="json";

    xhr.onload =()=> {
        
      const countriesdata = xhr.response;
      console.log(countriesdata);

      // Get all the countries from Asia continent /region using Filter function
      console.log("the countries from Asia continent /region using Filter function");

      const asiancountry=countriesdata.filter((country)=>country.region=="Asia").map((country)=>country.name.common);
      console.log(asiancountry);

      // Get all the countries with a population of less than 2 lakhs using Filter function
    console.log("all the countries with a population of less than 2 lakhs using Filter function");

      const county2lpop=countriesdata.filter((country)=>country.population<200000).map((country)=>country.name.common);
      console.log(county2lpop);

      
      // Print the following details name, capital, flag using forEach function
      console.log("All countries name, capital, flag using forEach function");

      const details=countriesdata.forEach((country)=>{
        console.log({name:country.name.common,capital:country.capital,flag:country.flag});
      });
      console.log(details)

      // Print the total population of countries using reduce function
      console.log("the total population of countries using reduce function");

      const totalpopulation=countriesdata.reduce((total,country)=>total+country.population,0);
      console.log(totalpopulation);


      // Print the country which uses US Dollars as currency.
      console.log("The country which uses US Dollars as currency");
      const usdcountry=countriesdata.filter((country)=>country
      .currencies && country.currencies.USD)
      .map((country)=>country.name.common);
      
      console.log(usdcountry);


    };
};

getCountries();
