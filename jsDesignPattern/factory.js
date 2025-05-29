class Employee {
  static employeeId = 0;
  constructor(name) {
    this.name = name;
    Employee.employeeId++;
    this.id = Employee.employeeId;
  }
}

class Salary {
  static salaryId = 0;
  constructor(salary) {
    this.salary = salary;
    Salary.salaryId++;
  }
}

class Attendance {
  static attendanceId = 0;
  constructor(attendance) {
    this.attendance = attendance;
    Salary.attendanceId++;
  }
}

class Client {
  static clientId = 0;
  constructor(client) {
    this.client = client;
    Salary.clientId++;
  }
}

class Factory {
    create(choose,value){
      switch(choose){
        case 'Employee':
        return new Employee(value);
        case 'Salary':
        return new Salary(value);
        case 'Attendance':
        return new Attendance(value);
        case 'Client':
        return new Client(value);
      }
    }
}

const F = new Factory();
console.log(F.create('Employee','Ganesh'));

