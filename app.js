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
class DomManager {
    static listenOnButton() {
        const btn = document.getElementById("temp-button");
        btn.addEventListener('click', this.handleClick)
    }
    static handleClick(e) {
        e.preventDefault();
        const celciusInput = document.getElementById("celcius-temp");
        const farenheitInput = document.getElementById("farenheit-temp");
        const tempObj = DomManager.createObj(celciusInput, farenheitInput);
        const { celcius, farenheit } = tempObj;
        DomManager.displayResults(celcius, farenheit);
        celciusInput.value = '';
        farenheitInput.value = '';
    }
    static createObj(celciusInput, farenheitInput) {
        let tempObj;
        tempObj = celciusInput.value !== '' ? new Temperature(celciusInput.value) : Temperature.fromFarenheit(farenheitInput.value);
        return tempObj
    }
    static displayResults(celcius, farenheit) {
        return document.getElementById("results").innerText = `Celcius : ${celcius} | Farenheit : ${farenheit}`;
    }
}
DomManager.listenOnButton();



