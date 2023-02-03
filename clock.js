class WorldClock {
    constructor(estHour, estMinutes, isMorning = true) {
        this.estHour = estHour;
        this.estMinutes = estMinutes;
        this.isMorning = isMorning;
        this.amPm = isMorning ? 'AM' : 'PM'
        this.est = `${estHour} : ${estMinutes} ${this.amPm}`;
    }
    get israelTime() {
        let israelHour = this.estHour + 7;
        if (israelHour > 12) {
            israelHour -= 12;
            this.amPM = 'PM';
        }
        if (israelHour <= 0) {
            israelHour += 12;
            this.amPm = 'PM'
        }
        return `${israelHour} : ${this.estMinutes} ${this.amPm}`
    }
    set israelTime(timeString) {
        let [hour, min] = timeString.split(':').map(el => +el);
        this.amPM = hour >= 12 ? 'PM' : 'AM';
        hour -= 7;
        hour >= 12 ? hour -= 12 : hour;
        hour <= 0 ? + 12 : hour;
        this.est = `${hour}:${min} ${this.amPm}`;
    }
    // set est(timeString) {
    //     let [hour, min] = timeString.split(':').map(el => +el);
    //     this.amPM = hour >= 12 ? 'PM' : 'AM';
    //     hour -= 7;
    //     hour >= 12 ? hour -= 12 : hour;
    //     hour <= 0 ? + 12 : hour;
    //     // this.israelTime = `${hour}:${min} ${this.amPm}`;
    // }
    static fromIsrael(isrHour, min, isMorning) {
        let amPm = isMorning ? 'AM' : 'PM';
        let estHour = isrHour - 7;
        amPm = (estHour <= 0) || (estHour >= 12) ? 'PM' : 'AM';
        if (estHour >= 12) estHour -= 12;
        if (estHour <= 0) estHour += 12;
        return new WorldClock(estHour, min, amPm);
    }
}