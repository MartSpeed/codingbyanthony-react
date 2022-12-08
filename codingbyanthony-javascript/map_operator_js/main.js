const companies = [
    {name: "company one", category: "finance", start: 1981, end:2004},
    {name: "company two", category: "retail", start: 1992, end:2008},
    {name: "company three", category: "auto", start: 1999, end:2007},
    {name: "company four", category: "retail", start: 1989, end:2010},
    {name: "company five", category: "technology", start: 2009, end:2014},
    {name: "company six", category: "finance", start: 1987, end:2010},
    {name: "company seven", category: "auto", start: 1986, end:1996},
    {name: "company eight", category: "technology", start: 2011, end:2016},
    {name: "company nine", category: "retail", start: 1981, end:1989},
];

const ages = [33,12,20,16,5,54,21,44,61,13,15,45,25,64,32];

// for(let i = 0; i < companies.length; ++i) {
//     console.log(companies[i]);
// }

// forEach takes in 3 different arguments [iterator, index, array]

// companies.forEach(function (company) {
//     console.log(`start: ${company.start}, end: ${company.end}`);
// })

// FILTER out things from the array

//  filter for loop method get 21 and older
// let canDrink = [];
// for(let i = 0; i < ages.length; ++i){
//     if(ages[i] >= 21){
//         canDrink.push(ages[i])
//     }
// }

// filter method
// const canDrink = ages.filter(function(age){
//     if(age >= 21){
//         return true;
//     }
// })

// const canDrink = ages.filter(age => age >= 21)
// console.log(canDrink);

// companies that started in the 80s
// const retailCompanies = companies.filter(company => company.start >= 1980 && company.start < 1990)
// console.log(retailCompanies)

//  get companies that l;asted 10 years or more
// const lastedTenYears = companies.filter(company => (company.end - company.start) >= 10 );
// console.log(lastedTenYears)

// MAP can create new arrays from the current array

// create array of company names
// const companyNames = companies.map(company => 1)
// const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`)
// console.log(testMap)

// const agesSquare = ages
// .map(age => Math.sqrt(age))
// .map(age => age * 2)
// console.log(agesSquare)

// SORT 

// sort companies by start year
// const sortedCompanies = companies.sort(function(c1, c2){
//     if(c1.start > c2.start){
//         return 1
//     }else{
//         return -1
//     }
// })

// sort single line method with a ternary operator for conditional
// const sortedCompanies = companies.sort((a,b) => a.start > b.start ? 1 : -1)
// console.log(sortedCompanies)

// sort ages from lowest to highest
// const sortAges = ages.sort((a,b) => a-b)
// console.log(sortAges)


// reduce
// add all ages together
// let ageSum = 0;
// for(let i = 0; i < ages.length; ++i){
//     ageSum += ages[i];
// }
// console.log(ageSum)

// ageSum using reduce
// const ageReduce = ages.reduce(function(total, age){
//     return total + age;
// }, 0)
// const ageReduce = ages.reduce((total, age) => total + age, 0);
// console.log(ageReduce)

// reduce, get total years from all companies
// const totalYear = companies.reduce((total, year) => total + (year.end - year.start), 0);
// console.log(totalYear)

// combine methods
const combine = ages
.map(age => age * 2)
.filter(age => age >= 40)
.sort((a,b) => a - b)
.reduce((a, b) => a + b, 0)
console.log(combine)