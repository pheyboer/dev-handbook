const employees = [
  // Name       // Position        // Department
  ['John Doe', 'Software Engineer', 'Engineering'],
  ['Jane Smith', 'Product Manager', 'Product'],
  ['Mike Johnson', 'Sales Executive', 'Sales'],
  ['Emily Brown', 'HR Coordinator', 'Human Resources'],
  ['David Lee', 'Quality Assurance', 'Engineering']
  // 0              // 1              // 2
];

// Retrieve list of employee names from a specified department

/*
@param {string[][]} employees - Array of employees
@param {string} department - Name of target department
@param {string[]} Array of employee names from that department
*/


//Solution 1
const getEmloyeesByDepartment = function(employees, department) {
  let employeeNames = [];

  employees.forEach((employee) => {
    if (employee.includes(department)) {
      employeeNames.push(employee[0]);
    }
  });
 
  return employeeNames;
};
console.log(getEmloyeesByDepartment(employees, "Engineering"));


//Solution 2 handles edge cases
const getEmloyeesByDepartments = function(employees, department) {
  const employeeNames2 = [];

  employees.forEach(employee => {
    const employeeDepartment = employee[2];

    if (employeeDepartment === department) {
      const employeeName = employee[0];
      employeeNames2.push(employeeName);
    }
  });
  return employeeNames2;

};
console.log(getEmloyeesByDepartments(employees, "Engineering"));
console.log(getEmloyeesByDepartments(employees, "Test"));

//Practice Questions with same array Get Employees by position

const getEmployeesByPosition = function(employees, position) {
  const employeeNames = [];

  employees.forEach(employee => {
    const employeePosition = employee[1];

    if (employeePosition === position) {
      const employeeName = employee[0];
      employeeNames.push(employeeName);
    }
  });
  return employeeNames;
};
console.log(getEmployeesByPosition(employees, "Sales Executive"));
console.log(getEmployeesByPosition(employees, "Sales Executive"));
console.log(getEmployeesByPosition(employees, "HR Coordinator"));


//example 2

//we are writing a function with a param
//it should return a number 
//Inputs: array of product  objects
//output: number (total revenue)
//JSDOC - do /** and it will fill out the rest and */

/**
 * Calculates total revenue based on an array of sold products
 * @param {Array} arrayofProducts 
 * @returns {Number} Total revenue of all sold products
 */

const calculateTotalRevenue = function(arrayofProducts) {
  let totalRevenue = 0;

  // loop through products, work one at a time (for...of loop for an array)
  for (const product of arrayofProducts) {
    //ask here if you want error handling
    //loop through each product
    //now we want total price of products sold
    let totalPrice;

    //total price is product price * product quantity
    totalPrice = product.price * product.quantity;

    // add result to total revenue
    totalRevenue = totalRevenue + totalPrice;
  };

  const result = calculateTotalRevenue(exampleSoldProducts);
  console.log('Result: ', result);

  //get total price of this products sales based on quantity
  // product price * product quantity
  //add price to the Totalrevenue

  return totalRevenue;
};