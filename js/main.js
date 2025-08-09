var SalesEmployee = /** @class */ (function () {
    function SalesEmployee(name, surname, email, birthDate, sdUnit, area) {
        this.setName(name);
        this.setSurname(surname);
        this.setEmail(email);
        this.setBirthDate(birthDate);
        this.setSdUnit(sdUnit);
        this.setArea(area);
    }
    // getters and setters  
    // }  
    SalesEmployee.prototype.setName = function (newName) {
        this.name = newName;
    };
    SalesEmployee.prototype.setSurname = function (newSurname) {
        this.surname = newSurname;
    };
    SalesEmployee.prototype.setEmail = function (newEmail) {
        this.email = newEmail;
    };
    SalesEmployee.prototype.setBirthDate = function (newBirthdate) {
        this.birthDate = new Date(newBirthdate);
    };
    SalesEmployee.prototype.setSdUnit = function (newSdUnit) {
        this.sdUnit = newSdUnit;
    };
    SalesEmployee.prototype.setArea = function (newArea) {
        this.area = newArea;
    };
    SalesEmployee.prototype.getName = function () {
        return this.name;
    };
    SalesEmployee.prototype.getSurname = function () {
        return this.surname;
    };
    SalesEmployee.prototype.getEmail = function () {
        return this.email;
    };
    SalesEmployee.prototype.getBirthDate = function () {
        return this.birthDate;
    };
    SalesEmployee.prototype.getSdUnit = function () {
        return this.sdUnit;
    };
    SalesEmployee.prototype.getArea = function () {
        return this.area;
    };
    return SalesEmployee;
}());
function addEmployee() {
    var newSalesEmployee = new SalesEmployee(document.getElementById('name').value, document.getElementById('surname').value, document.getElementById('email').value, document.getElementById('birthDate').value, document.getElementById('sdUnit').value, document.getElementById('area').value);
    console.log("\nDatos del nuevo empleado: \n  Nombre: ".concat(newSalesEmployee.getName(), "\n  Apellidos: ").concat(newSalesEmployee.getSurname(), "\n  Email: ").concat(newSalesEmployee.getEmail(), "\n  Fecha de nacimiento: ").concat(newSalesEmployee.getBirthDate(), "\n  Unidad de venta: ").concat(newSalesEmployee.getSdUnit(), "\n  Zona geogr\u00E1fica: ").concat(newSalesEmployee.getArea(), "\n"));
}
