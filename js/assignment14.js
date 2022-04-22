/**
 * Problem 1.
 * Create JSON for each employee with the following details (first name, department, designation, salary, raise eligible)
 * Sam, Tech, Manager, 40000, true
 * Mary, Finance, Trainee, 18500, true
 * Bill, HR, Executive, 21200, false
 *
 * Print JSON(s) to console.
 **/

let companyStart = {
  'employees':[
    {
      'first_name': 'Sam',
      'department': 'Tech',
      'position': 'Manager',
      'salary': 40000,
      'raise_eligibility': true
    },
    {
      'first_name': 'Mary',
      'department': 'Finance',
      'position': 'Trainee',
      'salary': 18500,
      'raise_eligibility': true
    },
    {
      'first_name': 'Bill',
      'department': 'HR',
      'position': 'Executive',
      'salary': 21200,
      'raise_eligibility': false
    }
  ]
}

console.log('*****Problem 1*****')
console.log(companyStart['employees']);

/**
 * Problem 2.
 *
 * Create JSON for the company with the following details (companyName, website, employees)
 * Tech Stars, www.techstars.site, array of Employees
 *
 * Print JSON to console.
 **/

 let company = {
   'companyName': 'Tech Stars',
   'website': 'www.techstars.site',
   'employees':[
     {
       'first_name': 'Sam',
       'department': 'Tech',
       'position': 'Manager',
       'salary': 40000,
       'raise_eligibility': true
     },
     {
       'first_name': 'Mary',
       'department': 'Finance',
       'position': 'Trainee',
       'salary': 18500,
       'raise_eligibility': true
     },
     {
       'first_name': 'Bill',
       'department': 'HR',
       'position': 'Executive',
       'salary': 21200,
       'raise_eligibility': false
     }
   ]
 }

 console.log('*****Problem 2*****')
 console.log(company);


/**
 * Problem 3.
 *
 * A new employee has joined the company. Update the JSON from problems 1 and 2 to reflect the addition of:
 * Anna, Tech, Executive, 25600, false
 *
 * Write function to add a new employee
 *
 * Print updated JSON to console.
 **/
const newHire = {
  'first_name': 'Anna',
  'department': 'Tech',
  'position': 'Executive',
  'salary': 25600,
  'raise_eligibility': false}


company.employees.push(newHire)

console.log('*****Problem 3*****')
console.log(company)

/**
 * Problem 4.
 *
 * Given the JSON for the company, calculate the total salary for all company employees.
 *
 * Print total salary to console.
 **/
totalSalary = 0
for(const index in company.employees){
  totalSalary += company.employees[index].salary
}

console.log('*****Problem 4*****')
console.log('Total Salary = ' + totalSalary)



/**
 * Problem 5.
 *
 * It's raise time. If an employee is raise eligible, increase their salary by 10%.
 * Given the JSON of the company and its employees, write a function to update the salary
 * for each employee who is raised eligible, then set their eligibility to false.
 *
 * Print names of employees who got a raise to console, list original and new salary.
 **/


console.log('*****Problem 5*****')
for(const index in company.employees){
    if (company.employees[index].raise_eligibility === true)
      {
      console.log(company.employees[index].first_name + ' : Old salary was ' + company.employees[index].salary)
      company.employees[index].salary = company.employees[index].salary * 1.10
      console.log(company.employees[index].first_name + ' : New salary is ' + company.employees[index].salary)
      }
}



/**
 * Problem 6.
 *
 * Some employees have decided to work from home. The following array indicates who is working from home.
 * Use the array to update the company JSON. For each employee, add another property called 'wfh' and set it to true or false
 *
 * Working from home: ['Anna', 'Sam']
 *
 * Print updated JSON to console.
 **/
console.log('*****Problem 6*****')

company.employees.forEach((element) => {
  element.wfh = false
})


for(const index in company.employees){
    if (company.employees[index].first_name === 'Anna')   //I tried using a boolen here || but it was changing the values for all of the names which is why I decided to copy and paste this for Sam
      {
      company.employees[index].wfh = true
      console.log(company.employees[index].first_name + ' wfh = ' + company.employees[index].wfh)
      }
}


for(const index in company.employees){
    if (company.employees[index].first_name === 'Sam')
      {
      company.employees[index].wfh = true
      console.log(company.employees[index].first_name + ' wfh = ' + company.employees[index].wfh)
      }
}

console.log(company)
