'use strict';

function AddEmployee(employeeId, fullName, department, level, imageURL){
  this.employeeId = employeeId;
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.imageURL = imageURL;
}

AddEmployee.prototype.claculateTheSalary = function(){

  let salary=0;

  if(this.level.toLocaleLowerCase() === 'senior'){
    salary = Math.floor(Math.random()*(2000-1500+1))+1500;
    return salary-Math.floor(salary*.075);
  }
  
  else if(this.level.toLocaleLowerCase() === 'mid-senior'){
    salary = Math.floor(Math.random()*(1500-1000+1))+1000;
    return salary-Math.floor(salary*.075);
  }
  
  salary = Math.floor(Math.random()*(1000-500+1))+500;
  return salary-Math.floor(salary*.075);


}

AddEmployee.prototype.render = function(){
  const tr = document.createElement('tr');

  const td1 = document.createElement('td');
  td1.textContent = this.employeeId;

  const td2 = document.createElement('td');
  td2.textContent = this.fullName;
  
  const td3 = document.createElement('td');
  td3.textContent = this.department;
  
  const td4 = document.createElement('td');
  td4.textContent = this.level;

  const td5 = document.createElement('td');
  td5.textContent = this.claculateTheSalary();
  
  const td6 = document.createElement('td');
  td6.textContent = this.imageURL;

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);
  tr.appendChild(td6);

  const table = document.getElementsByTagName('table');
  table[0].appendChild(tr);
}

const employee1 = new AddEmployee (1000, 'Ghazi Samer', 'Administration', 'Senior', 'ImgURL');
const employee2 = new AddEmployee (1001, 'Lana Ali', 'Finance', 'Senior', 'ImgURL');
const employee3 = new AddEmployee (1002, 'Tamara Ayoub', 'Marketing', 'Senior', 'ImgURL');
const employee4 = new AddEmployee (1003, 'Safi Walid', 'Administration', 'Mid-Senior', 'ImgURL');
const employee5 = new AddEmployee (1004, 'Omar Zaid', 'Development', 'Senior', 'ImgURL');
const employee6 = new AddEmployee (1005, 'Rana Saleh', 'Development', 'Junior', 'ImgURL');
const employee7 = new AddEmployee (1006, 'Hadi Ahmad', 'Finance', 'Mid-Senior', 'ImgURL');

console.log(employee1.render());
console.log(employee2.render());
console.log(employee3.render());
console.log(employee4.render());
console.log(employee5.render());
console.log(employee6.render());
console.log(employee7.render());