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
 */