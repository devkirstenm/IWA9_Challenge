const salary = 4000;
const lodging = 'apartment'
const size = 'large'


// Only change the syntax below (not the values or key names)

const expenses = {
    food: 51.7501,
    transport:  10.2,
}
  
const tax = {
    '734': '3%',
    '234': '20%',
    '913': '12%', // 12% tax on R4000 = R480 tax
    '415': '38%',
    '502': '42%',
}

const rent = {
    none: 0,
    'small-room': 200,
    'large-room': 300,
    'small-apartment': 400,
    'large-apartment': 800,
    'small-house': 1200,
    'large-house': 2400,
}

// You can change below however you want
const taxAsDecimal = parseFloat(tax['913']) / 100; // parseFloat('913') will call that string '913' and not what it represents; instead you must input the object "tax" so it knows '913' represents a number
    console.log(taxAsDecimal)

const startingAfterTax = salary * (1 - taxAsDecimal); // without the 1 you will be given the tax amount of the salary, with the 1 you will be given the salary minus the tax
    console.log('R' + startingAfterTax)

const type = size + '-' + lodging; // added dash because the key contains a dash and it needs to be identical to call it correctly
    console.log(type)

const balance = startingAfterTax - expenses.food - expenses.transport - rent[type]; // you need to call each key separately e.g., expenses.food & expenses.transport
console.log('R' + balance.toFixed(2)) // added toFixed to round off number to 2 decimal places

