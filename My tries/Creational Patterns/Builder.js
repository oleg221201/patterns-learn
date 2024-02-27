var Project = /** @class */ (function () {
    function Project() {
        this.result = "Parts of project:";
    }
    Project.prototype.showProjectParts = function () {
        console.log(this.result);
    };
    Project.prototype.addPart = function (part) {
        this.result += "\n - ".concat(part);
    };
    return Project;
}());
var Employees = /** @class */ (function () {
    function Employees() {
        this.startNewProject();
    }
    Employees.prototype.startNewProject = function () {
        this.project = new Project();
    };
    Employees.prototype.deploying = function () {
        this.project.addPart('deploying');
    };
    Employees.prototype.development = function () {
        this.project.addPart('development');
    };
    Employees.prototype.management = function () {
        this.project.addPart('management');
    };
    Employees.prototype.testing = function () {
        this.project.addPart('testing');
    };
    Employees.prototype.getProject = function () {
        var project = this.project;
        this.startNewProject();
        return project;
    };
    return Employees;
}());
var Company = /** @class */ (function () {
    function Company() {
    }
    Company.prototype.employeesInvolvement = function (employees) {
        this.employees = employees;
        employees.startNewProject();
    };
    Company.prototype.full = function () {
        this.employees.management();
        this.employees.development();
        this.employees.testing();
        this.employees.deploying();
    };
    Company.prototype.devAndTest = function () {
        this.employees.development();
        this.employees.testing();
    };
    return Company;
}());
var clientFull = function (company, employees) {
    company.employeesInvolvement(employees);
    company.full();
    employees.getProject().showProjectParts();
};
var clientDevAndTest = function (company, employees) {
    company.employeesInvolvement(employees);
    company.devAndTest();
    employees.getProject().showProjectParts();
};
var clientCustom = function (employees) {
    employees.development();
    console.log('Development done (custom)');
    employees.project.showProjectParts();
    console.log('Few month later...');
    console.log('Client want to test code');
    employees.testing();
    console.log('Testing done (custom)');
    employees.project.showProjectParts();
    console.log('Few month later...');
    console.log('Client want to deploy code');
    employees.deploying();
    console.log('Deploying done (custom)');
    employees.project.showProjectParts();
};
var year = function (company, employees) {
    console.log('The year has begun');
    console.log('Client full');
    clientFull(company, employees);
    console.log('Client dev and test');
    clientDevAndTest(company, employees);
    console.log('Client custom');
    clientCustom(employees);
    console.log('The year is over');
};
var company = new Company();
var employees = new Employees();
year(company, employees);
