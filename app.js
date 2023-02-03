class Temperature {
    constructor(celcius) {
        this.celcius = celcius;
    }
    get farenheit() {
        return this.celcius * 1.8 + 32;
    }
    set farenheit(value) {
        this.celcius = (value - 32) / 1.8;
    }
    static fromFarenheit(value) {
        return new Temperature((value - 32) / 1.8);
    }
}

