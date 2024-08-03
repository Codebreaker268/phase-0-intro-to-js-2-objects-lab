// Write your solution in this file!
let employee={
    name:"Godi",
    streetAdress:"Tom Mboya",
}
function  updateEmployeeWithKeyAndValue(employee, key, value){
 let newEmployee= {...employee}
    newEmployee[key]=value;
    console.log(newEmployee)
    return newEmployee;
 
}
updateEmployeeWithKeyAndValue(employee,"name","Jimmy");
function  destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key){
    let clone={...employee}
    delete clone[key];
    return clone;
    
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}