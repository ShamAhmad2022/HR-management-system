'use strict';

let dataFromLocalStorage = localStorage.getItem('employee');
let parsedData = JSON.parse(dataFromLocalStorage);

let administrationArray = new Array();
let marketingArray = new Array();
let developmentArray = new Array();
let financeArray = new Array();

for(let eachemployee of parsedData){
    switch(eachemployee.department){
        case 'Administration':
            administrationArray.push(eachemployee);
        break;
        
        case 'Marketing':
            marketingArray.push(eachemployee);
        break;
        
        case 'Development':
            developmentArray.push(eachemployee);
        break;
        
        case 'Finance':
            financeArray.push(eachemployee);
        break;
    }   
}


//Administration Department:
let administrationTable = document.getElementById('administrationDepTable');

let administrationTableRow = document.createElement('tr');

let departmentName1 = document.createElement('td');
departmentName1.textContent= administrationArray[0].department;

let numberOfEmployees1 = document.createElement('td');
numberOfEmployees1.textContent = administrationArray.length;

let totalSalary1 = document.createElement('td');

let administrationTotalSalaray=0;
for(let administrationEmployee of administrationArray){
    administrationTotalSalaray+= administrationEmployee.salary;
}

totalSalary1.textContent= administrationTotalSalaray;

let averageSalary1 = document.createElement('td');
averageSalary1.textContent = Math.round(administrationTotalSalaray/administrationArray.length);

administrationTableRow.appendChild(departmentName1); 
administrationTableRow.appendChild(numberOfEmployees1); 
administrationTableRow.appendChild(averageSalary1); 
administrationTableRow.appendChild(totalSalary1); 

administrationTable.appendChild(administrationTableRow);


//Marketing Department:
let marketingTable = document.getElementById('marketingDepTable');

let marketingTableRow = document.createElement('tr');

let departmentName2 = document.createElement('td');
departmentName2.textContent= marketingArray[0].department;

let numberOfEmployees2 = document.createElement('td');
numberOfEmployees2.textContent = marketingArray.length;

let totalSalary2 = document.createElement('td');

let marketingTotalSalaray=0;
for(let marketingEmployee of marketingArray){
    marketingTotalSalaray+= marketingEmployee.salary;
}
totalSalary2.textContent= marketingTotalSalaray;

let averageSalary2 = document.createElement('td');
averageSalary2.textContent = Math.round(marketingTotalSalaray/marketingArray.length);

marketingTableRow.appendChild(departmentName2); 
marketingTableRow.appendChild(numberOfEmployees2); 
marketingTableRow.appendChild(averageSalary2); 
marketingTableRow.appendChild(totalSalary2); 

marketingTable.appendChild(marketingTableRow);


//Development department
let developmentTable = document.getElementById('developmentDepTable');

let developmentTableRow = document.createElement('tr');

let departmentName3 = document.createElement('td');
departmentName3.textContent= developmentArray[0].department;

let numberOfEmployees3 = document.createElement('td');
numberOfEmployees3.textContent = developmentArray.length;

let totalSalary3 = document.createElement('td');

let developmentTotalSalaray=0;
for(let marketingEmployee of developmentArray){
    developmentTotalSalaray+= marketingEmployee.salary;
}
totalSalary3.textContent= developmentTotalSalaray;

let averageSalary3 = document.createElement('td');
averageSalary3.textContent = Math.round(developmentTotalSalaray/developmentArray.length);

developmentTableRow.appendChild(departmentName3); 
developmentTableRow.appendChild(numberOfEmployees3); 
developmentTableRow.appendChild(averageSalary3); 
developmentTableRow.appendChild(totalSalary3); 

developmentTable.appendChild(developmentTableRow);

//finance department
let financeTable = document.getElementById('financeDepTable');

let financeTableRow = document.createElement('tr');

let departmentName4 = document.createElement('td');
departmentName4.textContent= financeArray[0].department;

let numberOfEmployees4 = document.createElement('td');
numberOfEmployees4.textContent = financeArray.length;

let totalSalary4 = document.createElement('td');

let financeTotalSalaray=0;
for(let financeEmployee of financeArray){
    financeTotalSalaray+= financeEmployee.salary;
}
totalSalary4.textContent= financeTotalSalaray;

let averageSalary4 = document.createElement('td');
averageSalary4.textContent = Math.round(financeTotalSalaray/financeArray.length);

financeTableRow.appendChild(departmentName4); 
financeTableRow.appendChild(numberOfEmployees4); 
financeTableRow.appendChild(averageSalary4); 
financeTableRow.appendChild(totalSalary4); 

financeTable.appendChild(financeTableRow);


//All departments:
let alldepartmentsTable = document.getElementById('allDepartments');

let alldepartmentsTableRow = document.createElement('tr');

let numberOfEmployees5 = document.createElement('td');
numberOfEmployees5.textContent = parsedData.length;

let totalSalary5 = document.createElement('td');

let alldepartmentsTotalSalaray=0;
for(let financeEmployee of parsedData){
    alldepartmentsTotalSalaray+= financeEmployee.salary;
}
totalSalary5.textContent= alldepartmentsTotalSalaray;

let averageSalary5 = document.createElement('td');
averageSalary5.textContent = Math.round(alldepartmentsTotalSalaray/parsedData.length);

alldepartmentsTableRow.appendChild(numberOfEmployees5); 
alldepartmentsTableRow.appendChild(averageSalary5); 
alldepartmentsTableRow.appendChild(totalSalary5); 

alldepartmentsTable.appendChild(alldepartmentsTableRow);