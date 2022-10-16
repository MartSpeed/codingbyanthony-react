let today = new Date(); // object for the current date and time
console.log(today); // prints the current date and time in the format of yyyy/mm/dd with zulu time
console.log(today.toString()); // prints the current weekday, month, date, year and 24hr time with current time zone
console.log(today.toDateString()); // prints the current weekday, month, dat and year
console.log(today.toTimeString()); // prints the current 24 hr time
console.log(today.toUTCString()); // prints the current 24 hr time without the current 24hr time zone, used GMT instead

/**
 * when using dates, the months are 0 indexed
 * new Date(year, month, hour, minute, second, millisecond)
 */

today = new Date(2022,1,3,42,43,23,23);
console.log(today);
console.log(today.toString());

/**
 * creating dates with a time value
 * time values take in milliseconds as the default value
 */
today = new Date(929397621000);
console.log(today.toString());

/**
 * creating dates, with a dat/time string
 */

today = new Date("October 16, 2022 13:30:30");
console.log(today.toString());

// grab the current date, which is the day of the month
today = new Date();
console.log(today.getDate());

// grab the day, which is the week day as a number
// days of the week are also 0 indexed
today = new Date();
console.log(today.getDay());

// get full year
today = new Date();
console.log(today.getFullYear());

// get hours
today = new Date();
console.log(today.getHours());

// get milliseconds
today = new Date();
console.log(today.getMilliseconds());

// get minutes
today = new Date();
console.log(today.getMinutes());

// get month
// returns month in the 0 index
today = new Date();
console.log(today.getMonth());

// git seconds
today = new Date();
console.log(today.getSeconds());

// get time
// displays time in milliseconds
today = new Date();
console.log(today.getTime());

// there are getters and setters for time values
today = new Date();
today.setFullYear(2023);
console.log(today.toString());

// how to calculate elapsed time
startTime = new Date();
endTime - new Date();

let time_difference = endTime.getTime() - startTime.getTime();
console.log(time_difference);

function timeDifference() {
    for(let i = 0; i < 100000000; i++){

    }
}
// difference of time function
timeDifference();

