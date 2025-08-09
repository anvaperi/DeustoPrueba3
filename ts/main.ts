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
    birthDate: Date,
    sdUnit: string,
    area: string
  ) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.birthDate = birthDate;
    this.sdUnit = sdUnit;
    this.area = area;
  }

  getName(): string {
    return this.name;
  }

  setName(newName: string) {
    this.name = newName;
  }

  getSurname(): string { 
    return this.surname;
  }

  setSurname(newSurname: string) {
    this.surname = newSurname
  }

  getEmail(): string { 
    return this.email;
  }

  setEmail(newEmail: string) {
    this.email = newEmail;
  }

  getBirthDate(): Date { 
    return this.birthDate;
  }

  setBirthDate(newBirthdate: Date) {
    this.birthDate = newBirthdate;
  }

  getSdUnit(): string { 
    return this.sdUnit;
  }

  setSdUnit(newSdUnit: string) {
    this.sdUnit = newSdUnit;
  }

  getArea(): string { 
    return this.area;
  }

  setArea(newArea: string) {
    this.area = newArea;
  }
}