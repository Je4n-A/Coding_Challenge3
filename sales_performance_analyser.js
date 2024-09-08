
//Create a Function to Calculate Average Sales

function CalculateAverageSales(salesfigures) {

let Sum_sales = salesfigures.reduce((acc,curr) => acc + curr, 0); 
let AverageSales = Sum_sales / salesfigures.length;

console.log(`Average Sales = ${AverageSales}`)
 
return AverageSales; 

}

let salesfigures = [5000,8000,10000];
CalculateAverageSales(salesfigures);

// Create a function to Determine Performance Rating 

function determinePerformanceRating(AverageSales){

    if (AverageSales > 10000) {
        console.log(`Excellent`)

    } else if ( AverageSales <= 10000 && AverageSales >= 7000) {
        console.log(`Good`)
    
    } else if (AverageSales < 7000 && AverageSales > 4000) {
    console.log(`Satisfactory`)

    } else {
        console.log(`Needs Improvement`)
    }
}

determinePerformanceRating(AverageSales);


// Creating a Function to Identify Top and Bottom Performers

function findTopAndBottomPerformers(salesData1) {
    if (!salesData1 || salesData1.length === 0) {
        return{top_Performer: null, bottom_Performer: null};
    }
    let top_Performer = salesData1[0];
    let bottom_Performer = salesData1[0];

    top_Performer.totalsales = top_Performer.sales.reduce((acc,curr) => acc + curr, 0);
    bottom_Performer.totalSales = bottom_Performer.sales.reduce((acc,curr) => acc + curr, 0);

    for(let i=0; i < salesData1.length; i++) {
    let currentTotalSales = salesData1[i].sales.reduce((acc, curr) => acc + curr, 0);

    if (currentTotalSales > top_Performer.totalSales) {
        top_Performer = {...salesData1[i],totalSales: currentTotalSales};
    }

    if (currentTotalSales < bottom_Performer.totalSales){
        bottom_Performer = {...salesData1[i],totalSales: currentTotalSales};
    }
    
 }
    return {
        top_Performer: top_Performer,
        bottom_Performer: bottom_Performer
    }

}

let salesData1 = [

      { name: 'Alice', sales: [12000, 15000, 13000] },
    
      { name: 'Bob', sales: [7000, 6000, 7500] },
    
      { name: 'Charlie', sales: [3000, 4000, 3500] },
    
      { name: 'Diana', sales: [9000, 8500, 9200] },
    
];

let result1 = findTopAndBottomPerformers(salesData);
console.log(result1);

//Combine Functions to Generate a Performance Report 

function generatePerformanceReport(salesData) {

    function CalculateAverageSales(salesfigures){
    let Sum_sales = salesfigures.reduce((acc,curr) => acc + curr, 0); 
    let AverageSales = Sum_sales / salesfigures.length;
        return AverageSales; 
}

function determinePerformanceRating(AverageSales){

    if (AverageSales > 10000) {
        return(`Excellent`)

    } else if ( AverageSales <= 10000 && AverageSales >= 7000) {
        return(`Good`)
    
    } else if (AverageSales < 7000 && AverageSales > 4000) {
        return(`Satisfactory`)

    } else {
        return(`Needs Improvement`)
    }
}

    if (!salesData || salesData.length === 0) {
        return{top_Performer: null, bottom_Performer: null};
    }
    let top_Performer = salesData[0];
    let bottom_Performer = salesData[0];

    top_Performer.totalsales = top_Performer.sales.reduce((acc,curr) => acc + curr, 0);
    bottom_Performer.totalSales = bottom_Performer.sales.reduce((acc,curr) => acc + curr, 0);

    for(let i=0; i < salesData.length; i++) {
    let currentTotalSales = salesData[i].sales.reduce((acc, curr) => acc + curr, 0);
    let AverageSales = CalculateAverageSales(salesData[i].sales);
    let Performancerating = determinePerformanceRating(AverageSales);
        console.log(`Name -> ${salesData[i].name}`);
        console.log(`Average Sales -> ${AverageSales}`)
        console.log(`Performance Rating -> ${Performancerating}`)
        console.log(` <^>-<^>-<^>-<^>-<^>-<^>`)

    if (currentTotalSales > top_Performer.totalSales) {
        top_Performer = {...salesData[i],totalSales: currentTotalSales};
    }

    if (currentTotalSales < bottom_Performer.totalSales){
        bottom_Performer = {...salesData[i],totalSales: currentTotalSales};
    }
    
 }
    return {
        top_Performer: top_Performer,
        bottom_Performer: bottom_Performer
    };
}

let salesData = [

      { name: 'Alice', sales: [12000, 15000, 13000] },
    
      { name: 'Bob', sales: [7000, 6000, 7500] },
    
      { name: 'Charlie', sales: [3000, 4000, 3500] },
    
      { name: 'Diana', sales: [9000, 8500, 9200] },
    
    ];
 
let result = generatePerformanceReport(salesData);
console.log(`Top Performer ->, ${result.top_Performer.name}`);
console.log(`Bottom Perfomer -> ${result.bottom_Performer.name}`);