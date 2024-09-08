
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
