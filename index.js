export const isLeapYear = (year) => {
    let isLeapYr = false;
    year ? year = Number(year) : year = 1;
    year % 4 === 0 && ((year % 100 === 0 && year % 400 === 0) || year % 100 !== 0) ? isLeapYr = true : null;
    return isLeapYr;
}

export const getWeekDay = (cap) => {
    let day = new Date().toLocaleString("en-US", {weekday: 'long'});
    cap ? cap = cap.toString().toLowerCase() : cap = 0;
    let captostr = {
      "none": "0",
      "all": "2",
    };
    captostr.hasOwnProperty(cap) ? cap = captostr[cap] : null;
    cap = Number(cap);
    cap === 0 ? day = day.toLowerCase() : null;
    cap === 2 ? day = day.toUpperCase() : null;
    return day;
}

export const isWeekDay = (day) => {
    let date = new Date().getDay();
    day ? day = day.toString().toLowerCase() : day = 7;
    let daytostr = {
      "sunday": "0",
      "monday": "1",
      "tuesday": "2",
      "wednesday": "3",
      "thursday": "4",
      "friday": "5",
      "saturday": "6",
    }
    daytostr.hasOwnProperty(day) ? day = daytostr[day] : null;
    day = Number(day);
    return date === day ? true : false;
}

export const getTime = (dodate, sec) => {
    let date = new Date();
    let time;
    sec && sec.toString().toLowerCase() === "true" ? time = date.toLocaleTimeString() : time = date.toLocaleTimeString([], { timeStyle: "short" });
    return dodate && dodate.toString().toLowerCase() === "true" ? `${date.toLocaleDateString()} - ${time}` : `${time}`;
}

export const convertMilitaryTime = (time) => {
    let [timeWithoutPeriod, period] = time.split(" ");
    let [hours, minutes, seconds] = timeWithoutPeriod.split(":");
    if (period === "PM" && hours !== "12") hours = String(Number(hours) + 12);
    if (period === "AM" && hours === "12") hours = "00";
    return `${hours}:${minutes}${seconds ? `:${seconds}` : ''}`;
}

export const getDate = () => new Date().toLocaleDateString();

export const getDay = () => new Date().getDate();

export const getMonth = () => new Date().getMonth() + 1;

export const getYear = () => new Date().getFullYear();

export const timezone = {
    current : function() {
        let a = new Date().toLocaleDateString(undefined, { timeZoneName: 'long' }).split(" ");
        a.shift();
        return a.join(" ");
    }
}
