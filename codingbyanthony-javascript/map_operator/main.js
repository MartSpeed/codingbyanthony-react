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

// filter out things from the array

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

const retailCompanies = companies.filter(company => company.start >= 1980)
console.log(retailCompanies)

// map
// sort
// reduce