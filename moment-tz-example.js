const momentTz = require('moment-timezone');

const todayDate = Date.now()
console.log(todayDate)

const lima  = momentTz.tz(todayDate, "America/Lima").format();
console.log(lima) // 2021-11-27T11:25:38-05:00

const chile = momentTz.tz(todayDate, "America/Santiago").format();
console.log(chile) // 2021-11-27T13:25:38-03:00

const losAngeles = momentTz.tz(todayDate, "America/Los_Angeles").format();
console.log(losAngeles) // 2021-11-27T08:25:38-08:00

