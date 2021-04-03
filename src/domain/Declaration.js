export default class Declaration {
    constructor(theSalary, theDependants) {
        this.totalSalary = theSalary;
        this.dependentsNumber = theDependants;
        this.tax = null;
    }

    isValid() {
        return this.totalSalary && this.dependentsNumber;
    }

    get totalSalary() {
        return this._totalSalary;
    }

    get dependentsNumber() {
        return this._dependentsNumber;
    }

    get tax() {
        return this._tax;
    }

    set totalSalary(theSalary) {
        console.log('setting totalSalary');
        this._totalSalary = theSalary;
    }

    set dependentsNumber(theDependants) {
        console.log('setting dependentsNumber');
        this._dependentsNumber = theDependants;
    }

    set tax(theTax) {
        console.log('setting tax');
        this._tax = theTax;
    }

    toObject() {
        return {
            totalSalary: this._totalSalary,
            dependentsNumber: this._dependentsNumber,
            tax: this._tax,
        };
    }
}
