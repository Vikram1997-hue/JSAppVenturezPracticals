let company = {
    comp_name: "Appventurez",
    location: "Sector 59, Noida"
};

let department = {
    dept_name: "Backend",
    tech: ['Node.js', 'MongoDB', 'MySQL']
};

let employee = {
    name: "Vikramaditya"
};

employee.__proto__ = department;
department.__proto__ = company;

console.log(`${employee.name} works at ${employee.comp_name}, which is located in ${employee.location}. 
He is very happy to be a part of the ${employee.dept_name} team, where he is learning ${employee.tech[0]}`);

//alternatively
console.log(`${employee.name} works at ${department.comp_name}, which is located in ${department.location}. 
He is very happy to be a part of the ${employee.dept_name} team, where he is learning ${employee.tech[0]}`);

//can i print the proto?
console.log(department.__proto__)
console.log(employee.__proto__) 

