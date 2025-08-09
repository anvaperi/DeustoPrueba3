interface Employee {
  name: string;
  surname: string;
  email: string;
  birthDate: Date;
}

class SalesEmployee implements Employee {
  name: string;
  surname: string;
  email: string;
  birthDate: Date;
  sdUnit: string;
  area: string;

  constructor(
    name: string,
    surname: string,
    email: string,
    birthDate: string,
    sdUnit: string,
    area: string
  ) {
    this.setName(name);
    this.setSurname(surname);
    this.setEmail(email);
    this.setBirthDate(birthDate);
    this.setSdUnit(sdUnit);
    this.setArea(area);
  }
// getters and setters  
// }  
  setName(newName: string) {
    this.name = newName;
  }

  setSurname(newSurname: string) {
    this.surname = newSurname
  }

  setEmail(newEmail: string) {
    this.email = newEmail;
  }

  setBirthDate(newBirthdate: string) {
    this.birthDate = new Date(newBirthdate);
  }

  setSdUnit(newSdUnit: string) {
    this.sdUnit = newSdUnit;
  }

  setArea(newArea: string) {
    this.area = newArea;
  }

  getName(): string {
    return this.name;
  }

  getSurname(): string { 
    return this.surname;
  }

  getEmail(): string { 
    return this.email;
  }

  getBirthDate(): Date { 
    return this.birthDate;
  }

  getSdUnit(): string { 
    return this.sdUnit;
  }

  getArea(): string { 
    return this.area;
  }
}

function addEmployee() {
  let newSalesEmployee: SalesEmployee = new SalesEmployee(
    (document.getElementById('name') as HTMLInputElement).value,
    (document.getElementById('surname') as HTMLInputElement).value,
    (document.getElementById('email') as HTMLInputElement).value,
    (document.getElementById('birthDate') as HTMLInputElement).value,
    (document.getElementById('sdUnit') as HTMLInputElement).value,
    (document.getElementById('area') as HTMLInputElement).value
  )
  console.log(`
Datos del nuevo empleado: 
  Nombre: ${newSalesEmployee.getName()}
  Apellidos: ${newSalesEmployee.getSurname()}
  Email: ${newSalesEmployee.getEmail()}
  Fecha de nacimiento: ${newSalesEmployee.getBirthDate()}
  Unidad de venta: ${newSalesEmployee.getSdUnit()}
  Zona geográfica: ${newSalesEmployee.getArea()}
`);
}


