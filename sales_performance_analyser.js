
//Create a Function to Calculate Average Sales

function CalculateAverageSales(salesfigures) {

let Sum_sales = salesfigures.reduce((acc,curr) => acc + curr, 0); 
let AverageSales = Sum_sales / salesfigures.length;
console.log(`Average Sales = ${AverageSales}`)

}

let salesfigures = [120,150,130];
CalculateAverageSales(salesfigures);


