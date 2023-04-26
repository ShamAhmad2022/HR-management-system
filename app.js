'use strict';

function Employee(Id=0, fullName, department, level, imageURL, salary=0){
  this.Id=Id;
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.imageURL = imageURL;
  this.salary=salary;
  Employee.allEmployees.push(this);
}

Employee.allEmployees = new Array();

Employee.prototype.generateId= function(){
  this.Id= Math.floor(Math.random()*(9999-1000+1))+1000;
}

Employee.prototype.claculateTheSalary = function(){

  let salary=0;

  if(this.level.toLocaleLowerCase() === 'senior'){
    salary = Math.floor(Math.random()*(2000-1500+1))+1500;
    this.salary = salary-Math.floor(salary*.075);

  }
  
  else if(this.level.toLocaleLowerCase() === 'mid-senior'){
    salary = Math.floor(Math.random()*(1500-1000+1))+1000;
    this.salary = salary-Math.floor(salary*.075);
 
  }
  
  salary = Math.floor(Math.random()*(1000-500+1))+500;
  this.salary = salary-Math.floor(salary*.075);

}

Employee.prototype.render = function(){

  const administrationArt = document.getElementById('administration-sec');
  const marketingArt = document.getElementById('marketing-sec');
  const developmentArt = document.getElementById('development-sec');
  const financeArt = document.getElementById('finance-sec');

  administrationArt.innerHTML='';
  marketingArt.innerHTML='';
  developmentArt.innerHTML='';
  financeArt.innerHTML='';


  for(let eachemployee of Employee.allEmployees){
    
    const card = document.createElement('div');
    card.className="emplCard";

    const EimgDiv = document.createElement('div');
    
    const Eimg = document.createElement('img');
    Eimg.src= eachemployee.imageURL;
    Eimg.className= 'emp-img';

    EimgDiv.appendChild(Eimg);

    card.appendChild(EimgDiv);

    const EparDiv = document.createElement('div');

    const firstP = document.createElement('p');
    firstP.textContent = 'Name : ' + eachemployee.fullName + ' - ID: ' +eachemployee.Id;
    
    const secondP = document.createElement('p');
    secondP.textContent = 'Department : ' + eachemployee.department + ' - ' + eachemployee.level;
    
    const lastP = document.createElement('p');
    lastP.textContent = eachemployee.salary;

    EparDiv.appendChild(firstP);
    EparDiv.appendChild(secondP);
    EparDiv.appendChild(lastP);

    card.appendChild(EparDiv);

    switch(eachemployee.department){
      case 'Administration':
        administrationArt.appendChild(card);
        break;
      
      case 'Marketing':
          marketingArt.appendChild(card);
        break;
      
      case 'Development':
          developmentArt.appendChild(card);
        break;
      
      case 'Finance':
          financeArt.appendChild(card);
        break;
      
    }

  }
    
}

const addEmployee = (e) =>{
  e.preventDefault();

  let fullName= e.target.fullname.value;
  let department= e.target.department.value;
  let level= e.target.Level.value;
  let imageURL= e.target.imageURL.value;

  const employee = new Employee ();
  employee.fullName=fullName;
  employee.department=department;
  employee.level=level;
  employee.imageURL=imageURL;
  employee.generateId();
  employee.claculateTheSalary();
  employee.render();

  console.log(employee);
  saveToLocalStorage();
}

const saveToLocalStorage = () => {
  let allEmployeesStringified = JSON.stringify(Employee.allEmployees);
  localStorage.setItem('employee', allEmployeesStringified);
}

const getFromLocalStorage = () => {
  let dataFromLocalStorage = localStorage.getItem('employee');
  let allEmployeesParsed = JSON.parse(dataFromLocalStorage);
  if(allEmployeesParsed !== null){
    for (let eachemployee of allEmployeesParsed){
      new Employee(eachemployee.Id, eachemployee.fullName, eachemployee.department, eachemployee.level, eachemployee.imageURL, eachemployee.salary);
    } 
    Employee.allEmployees[0].render();
  }
 
}

const employeesForm = document.getElementById('employee-Form');
employeesForm.addEventListener('submit', addEmployee);
getFromLocalStorage(); // it need to be executed once