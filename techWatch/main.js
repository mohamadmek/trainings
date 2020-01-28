const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  // for (let i = 0; i < companies.length; i++){
  //   console.log(companies[i])
  // }

  // forEach

  // companies.forEach(company => console.log(company.name));

  // filter

  // let canDrink = [];
  // for (let i = 0; i < ages.length; i++) {
  //   if(ages[i] < 20) {
  //     canDrink.push(ages[i]);
  //   }
  // }
  // console.log(canDrink)

  // const canDring = ages.filter(age => age < 20);
  // console.log(canDring)

  // map
  //create array of company name
//   const companyNames = companies.map(function(company) {
//     return company.name;
//   });
// console.log(companyNames)

// const companyNames = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
// console.log(companyNames);

// const agesSquare = ages.map(age => Math.sqrt(age))
//                         .map(age => age * 2)
// console.log(agesSquare)


  // sort 
  // reduce


  //forEach

  // for(let i = 0; i < companies.length; i++) {
  //   console.log(companies[i])
  // }

  // companies.forEach(company => console.log(company))

  //filter
  // let lowAge = [];
  // for(let i = 0; i< ages.length; i++) {
  //   if(ages[i] < 20) {
  //     lowAge.push(ages[i])
  //   }
  // }
  // console.log(lowAge)

  // const lowAge2 = ages.filter(age => age < 20 )
  // console.log(lowAge2)

  //map

  // const newAges = ages
  //                 .map(age => age * 2)
  //                 .map(age => Math.sqrt(age))
  // console.log(newAges)
  
  //sort

  // const sortedAges = ages.sort((a1,a2) => a2-a1)
  // console.log(sortedAges)

  // const sortedComp = companies.sort((c1,c2) => (c1.start > c2.start ? 1 : -1))

  // console.log(sortedComp)

  //reduce

  // let sumAges = 0;
  // for(let i = 0; i< ages.length; i++)
  //   {
  //     sumAges += ages[i];
  //   }

  //   console.log(sumAges)

  // const sumAges2 = ages.reduce((total, age) =>  total + age,0);

  // console.log(sumAges2)

  // const totalYears = companies.reduce(function(total, year) {
  //  return total += year.end - year.start;
  // },0);

  // console.log(totalYears)