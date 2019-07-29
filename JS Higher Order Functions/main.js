const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// Regular for
for (let i = 0; i < companies.length; i++) {
  console.log(companies[i]);
}
// for (i in companies) {
//   console.log(companies[i]);
// }
// for (let i of companies) {
//   console.log(i);
// }

// foreach is a better way to loop an array, doesn't return anything back
// requires an iterator, index, array
// companies.forEach(company => {
//   console.log(company);
// });

// ************filter********
// fitler data depending on a condition from array

// Filter list of ages older than 21

// old way
// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }

// with filter
// const canDrink = ages.filter(age => {
//   if (age >= 21) {
//     return true;
//   }
// });

// Better syntax with es6
const canDrink = ages.filter(age => age >= 21);
console.log("Filter example 21 over", canDrink);

// Filter retail companies
const retailCompanies = companies.filter(
  company => company.category === "Retail"
);
console.log("Filter example Retail companies", retailCompanies);

// Filter 80s companies
const eightiesCompanies = companies.filter(
  company => company.start >= 1980 && company.start < 1990
);
console.log("Filter example companies from the 80s", eightiesCompanies);

// Companies that lasted at least 10 years
const longerThanTenYears = companies.filter(
  company => company.end - company.start >= 10
);
console.log(
  "Filter example companies from companies that lasted more than 10 years",
  longerThanTenYears
);

// ************map*******
// Creates a new array from an existing array

// Create array of company names
const companyNames = companies.map(company => company);
console.log("Map example of company names", companyNames);

const companyNamesAndDates = companies.map(
  company => `${company.name} [${company.start} - ${company.end}]`
);
console.log(
  "Map example of company with names and dates",
  companyNamesAndDates
);

// Square root of ages
const SqrtAges = ages.map(age => Math.sqrt(age)).map(age => age * 2);
console.log("Example of double map with square root of ages time 2", SqrtAges);

// *******sort*******
// Sort companies by start year
const sortedCompanies = companies.sort((c1, c2) =>
  c1.start > c2.start ? 1 : -1
);
console.log("Example of Sort companies by start year", sortedCompanies);

// Sort ages from low to high
const sortAges = ages.sort((a, b) => b - a);
console.log("Example of sort to Ages From low to high", sortAges);

// *******reduce******

// Sum the ages
// let ageSum=0;
// for(let i=0;i<ages.length;i++){
//     ageSum+=ages[i];
// }
const ageSum = ages.reduce((total, age) => total + age, 0);
console.log("Example of reduce with sum of ages", ageSum);

// Total years of the companies
const totalYears = companies.reduce(
  (total, company) => total + (company.end - company.start),
  0
);
console.log(
  "Example of reduce with the total years of the companies",
  totalYears
);

// Combine methods
const combined = ages
  .map(age => age * 2)
  .filter(age => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b);
console.log(
  "Example of the combination of map, filter, sort and reduce",
  combined
);
