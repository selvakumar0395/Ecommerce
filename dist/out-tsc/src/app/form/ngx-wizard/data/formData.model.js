//Wizard form data class Starts
export class FormData {
    constructor() {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.work = '';
        this.street = '';
        this.city = '';
        this.state = '';
        this.zip = '';
    }
    clear() {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.work = '';
        this.street = '';
        this.city = '';
        this.state = '';
        this.zip = '';
    }
}
//Wizard form data class Ends
//Personal tab data class starts
export class Personal {
    constructor() {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
    }
}
//Personal tab data class ends
//Address tab data class starts
export class Address {
    constructor() {
        this.street = '';
        this.city = '';
        this.state = '';
        this.zip = '';
    }
}
//Address tab data class Ends
//# sourceMappingURL=formData.model.js.map