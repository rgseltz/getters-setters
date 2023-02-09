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
    getElement(id) {
        return document.getElementById(`${id}`);
    }
    displayResults(celcius, farenheit) {
        console.log('c', celcius);
        console.log('f', farenheit);
        return document.getElementById('results').innerHTML = `Celcisus : ${celcius} | Farenheit : ${farenheit}`
    }
    handleTemperature() {
        const celciusInput = this.getElement('celcius-temp');
        const farenheitInput = this.getElement('farenheit-temp');
        // const temp = celcisusInput.value ? new Temperature(celcisusInput.value) : Temperature.fromFarenheit(farenheitInput.value);
        farenheitInput.value = this.farenheit
        this.displayResults(celciusInput.value || this.celcius, this.farenheit);
        celciusInput.value = '';
        farenheitInput.value = '';
    }
}

const tempBtn = document.querySelector('#temp-button');

function initApp() {
    tempBtn.addEventListener('click', clickHandler);
}

function clickHandler(evt) {
    evt.preventDefault();
    const temp = !document.getElementById('celcius-temp').value ? Temperature.fromFarenheit(document.getElementById('farenheit-temp').value) : new Temperature(document.getElementById('celcius-temp').value);
    console.log(temp);
    temp.handleTemperature();
    // temp.displayResults(temp.celcius, temp.farenheit);
}
initApp();



