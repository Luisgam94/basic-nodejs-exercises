const moment = require('moment');

const datesNow = moment(new Date(Date.now())).format()
console.log(datesNow) // 2021-11-27T11:13:42-05:00 - hora local

const dates = {
    timestamp: Date.now(),
    datetime: Date(Date.now()).toString(),
}

console.log(dates.timestamp) // 1638027055074
console.log(dates.datetime)  // Sat Nov 27 2021 10:30:55 GMT-0500 (Peru Standard Time) - hora local
console.log(new Date('Mon Aug 23 2021 14:07:52 GMT+0000 (GMT)').toJSON()) // 2021-08-23T14:07:52.000Z
console.log(new Date(1629836162765)) // 2021-08-24T20:16:02.765Z

console.log('-------------')
const issueAtDate = new Date(1629841666616);
const exp = Number(59) - 10;
const issuedAtMoment = moment(issueAtDate);
issuedAtMoment.add(exp, 'seconds');
issuedAtMoment.isAfter(moment());

console.log(issueAtDate) // 2021-08-24T21:47:46.616Z
console.log(issuedAtMoment.isAfter(moment())) // false
console.log(moment(Date.now()).format().toString()) // 2021-11-27T10:33:35-05:00
console.log(issuedAtMoment.toJSON().normalize()) // 2021-08-24T21:48:35.616Z
console.log(Date(1629837254522)) // Sat Nov 27 2021 10:33:35 GMT-0500 (Peru Standard Time)


const hoy = new Date();
console.log('La fecha de hoy es: ', hoy); // La fecha de hoy es:  2021-11-27T15:33:35.838Z

const fecha = Date(1629837254522).toString()
console.log(fecha) // Sat Nov 27 2021 10:33:35 GMT-0500 (Peru Standard Time)

const convertLocalTime = new Date(1629837254522);
const hourOffset = convertLocalTime.getTimezoneOffset() / 60;
convertLocalTime.setHours( convertLocalTime.getHours() + hourOffset );
console.log(convertLocalTime) // 2021-08-25T01:34:14.522Z

