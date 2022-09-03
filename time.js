// https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/images/date_time_object.png

const now = new Date()
console.log(now) // Sat Jan 04 2020 00:56:41 GMT+0200 (Eastern European Standard Time)

const now = new Date()
console.log(now.getFullYear()) // 2020

const now = new Date()
console.log(now.getMonth()) // 0, because the month is January,  month(0-11)

const now = new Date()
console.log(now.getDate()) // 4, because the day of the month is 4th,  day(1-31)

const now = new Date()
console.log(now.getDay()) // 6, because the day is Saturday which is the 7th day
//  Sunday is 0, Monday is 1 and Saturday is 6
// Getting the weekday as a number (0-6))

const now = new Date()
console.log(now.getHours()) // 0, because the time is 00:56:41

const now = new Date()
console.log(now.getMinutes()) // 56, because the time is 00:56:41

const now = new Date()
console.log(now.getSeconds()) // 41, because the time is 00:56:41

const now = new Date() //
console.log(now.getTime()) // 1578092201341, this is the number of seconds passed from January 1,
                           // 1970 to January 4, 2020 00:56:41


// Using getTime()

const now = new Date() //
console.log(now.getTime()) // 1578092201341, this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41

// Using Date.now()

const allSeconds = Date.now() //
console.log(allSeconds) // 1578092201341, this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41

const timeInSeconds = new Date().getTime()
console.log(allSeconds == timeInSeconds) // true

// Let us format these values to a human readable time format. Example:

const now = new Date()
const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // 4/1/2020 0:56