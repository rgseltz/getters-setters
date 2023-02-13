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
    // getElement(id) {
    //     return document.getElementById(`${id}`);
    // }
    // displayResults(celcius, farenheit) {
    //     return document.getElementById('results').innerHTML = `Celcisus : ${celcius} | Farenheit : ${farenheit}`
    // }
    // handleTemperature() {
    //     const celciusInput = this.getElement('celcius-temp');
    //     const farenheitInput = this.getElement('farenheit-temp');
    //     // const temp = celcisusInput.value ? new Temperature(celcisusInput.value) : Temperature.fromFarenheit(farenheitInput.value);
    //     farenheitInput.value = this.farenheit
    //     this.displayResults(celciusInput.value || this.celcius, this.farenheit);
    //     celciusInput.value = '';
    //     farenheitInput.value = '';
    // }
}

// function initApp() {
//     const tempBtn = document.querySelector('#temp-button');
//     tempBtn.addEventListener('click', clickHandler);
// }

// function clickHandler(evt) {
//     evt.preventDefault();
//     const temp = !document.getElementById('celcius-temp').value ? Temperature.fromFarenheit(document.getElementById('farenheit-temp').value) : new Temperature(document.getElementById('celcius-temp').value);
//     temp.handleTemperature();
// }
// initApp();
class DomManager {
    // constructor() {
    //     celciusInput = document.getElementById("celcius-temp");
    //     farenheitInput = document.getElementById("farenheit-temp");
    // }
    static listenOnFarenheitInput() {
        const farenheitInput = document.getElementById("farenheit-temp");
        farenheitInput.addEventListener('change', this.celciusEvent);
    }
    static celciusEvent() {
        const celciusBtn = document.getElementById('temp-button');
        celciusBtn.addEventListener('click', this.handleCelciusEvent)
    }
    static handleCelciusEvent(e) {
        e.preventDefault();
        let tempObj = DomManager.createObj();
        const { celcius, farenheit } = tempObj;
        DomManager.displayResults(celcius, farenheit);
    }
    static listenOnCelciusInput() {
        const celciusInput = document.getElementById("celcius-temp");
        celciusInput.addEventListener('change', this.farenheitEvent)
        this.farenheitEvent();
    }
    static farenheitEvent() {
        const farenheitBtn = document.getElementById("temp-button");
        farenheitBtn.addEventListener('click', this.handleFarenheitEvent);
    }
    static listenOnInputs() {
        const celciusInput = document.getElementById("celcius-temp");
        const farenheitInput = documnet.getElementById("farenheit-temp");

    }
    static handleFarenheitEvent(e) {
        e.preventDefault();
        const tempObj = DomManager.createObj();
        const { celcius, farenheit } = tempObj;
        DomManager.displayResults(celcius, farenheit);
    }
    // static handleEvent(e) {
    //     e.preventDefault();
    //     const tempObj = DomManager.createObj();
    //     const { celcius, farenheit } = tempObj;
    //     DomManager.displayResults(celcius, farenheit);
    // }
    static createObj() {
        const celciusInput = document.getElementById("celcius-temp");
        const farenheitInput = document.getElementById("farenheit-temp");
        console.log(farenheitInput.value);
        let tempObj;
        tempObj = celciusInput.value !== '' ? new Temperature(celciusInput.value) : Temperature.fromFarenheit(farenheitInput.value);
        console.log(tempObj);
        return tempObj;
    }
    static displayResults(celcius, farenheit) {
        return document.getElementById("results").innerText = `Celcius : ${celcius} | Farenheit : ${farenheit}`;
    }
}
DomManager.listenOnCelciusInput();



