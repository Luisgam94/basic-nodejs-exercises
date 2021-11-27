const cron = require('node-cron');
const moment = require('moment');



cron.schedule('* * * * *', () => {
    const fecha = moment(new Date(Date.now())).format()
    console.log('running a task every minute ',fecha);
});
