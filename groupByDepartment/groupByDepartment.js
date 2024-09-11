function groupByDepartment(employees){
    const departments = {}
    for (const employee of employees) {
        // if(departments[employee.department]){
        //     departments[employee.department].push(employee.name)
        // }else{
        //     departments[employee.department] = [employee.name]
        // }
        departments[employee.department] = departments[employee.department] ?? []
        departments[employee.department].push(employee.name)
    }
    return departments
}

const employees = [
    { name: 'Alice', department: 'HR' },
    { name: 'Bob', department: 'IT' },
    { name: 'Charlie', department: 'HR' },
    { name: 'David', department: 'Finance' }
  ];
  
console.log(groupByDepartment(employees))