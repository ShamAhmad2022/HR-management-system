'use strict';

function Employee(fullName, department, level, imageURL){
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.imageURL = imageURL;
}

Employee.prototype.generateId= () =>{
  return Math.floor(Math.random()*(9999-1000+1))+1000;
}

Employee.prototype.claculateTheSalary = function(){

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

Employee.prototype.render = function(){

  const administrationArt = document.getElementById('administration-sec');
  const marketingArt = document.getElementById('marketing-sec');
  const developmentArt = document.getElementById('development-sec');
  const financeArt = document.getElementById('finance-sec');
  
  const card = document.createElement('div');
  card.className="emplCard";

  const EimgDiv = document.createElement('div');
  
  const Eimg = document.createElement('img');
  Eimg.src= this.imageURL;
  Eimg.className= 'emp-img';

  EimgDiv.appendChild(Eimg);

  card.appendChild(EimgDiv);

  const EparDiv = document.createElement('div');

  const firstP = document.createElement('p');
  firstP.textContent = 'Name : ' + this.fullName + ' - ID: ' +this.generateId();
  
  const secondP = document.createElement('p');
  secondP.textContent = 'Department : ' + this.department + ' - ' + this.level;
  
  const lastP = document.createElement('p');
  lastP.textContent = this.claculateTheSalary();

  EparDiv.appendChild(firstP);
  EparDiv.appendChild(secondP);
  EparDiv.appendChild(lastP);

  card.appendChild(EparDiv);

  switch(this.department){
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
  
  // section.appendChild(card);
  
}

const addEmployee = (e) =>{
  e.preventDefault();

  let fullName= e.target.fullname.value;
  let department= e.target.department.value;
  let level= e.target.Level.value;
  let imageURL= e.target.imageURL.value;

  const employee = new Employee (fullName, department, level, imageURL);
  console.log(employee);
  employee.render();
}

const employeesForm = document.getElementById('employee-Form');
employeesForm.addEventListener('submit', addEmployee);