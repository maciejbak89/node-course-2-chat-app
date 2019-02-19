var moment = require('moment');

var date = moment();
console.log(date);
//date.add(30, 'year').subtract(9, 'months');
console.log(date.format('MMM Do, YYYY, h:mm a'));


var someTimestamp = moment().valueOf();
console.log(someTimestamp);


var createdAt = 1234567890;
var createdDate = moment(createdAt);
console.log(createdDate.format('MMM Do, YYYY, h:mm a'));