var config = {
    apiKey: "AIzaSyC1yYMNVs-rkVP040Su6ZwFSDVCXLZwC5I",
    authDomain: "firstproject-c32a7.firebaseapp.com",
    databaseURL: "https://firstproject-c32a7.firebaseio.com",
    projectId: "firstproject-c32a7",
    storageBucket: "firstproject-c32a7.appspot.com",
    messagingSenderId: "1089648735509"
};
firebase.initializeApp(config);
var database = firebase.database();
// database.ref().on("value", function(snapshot) {
database.ref().on("value", function (snapshot) {

var date = new Date(randomDate);
var convertedDate = moment(new Date(randomDate));

console.log(date);
console.log(convertedDate);

//1. ... to convert the randomDate into three other date formats

console.log(moment(convertedDate).format("mm/dd/yy"));
console.log(moment(convertedDate).format("MMM DDD, YYYY hh:mm:ss"));
console.log(moment(convertedDate).format("X"));

// ... to determine the time in years, months, days between today and the randomDate.

var fromNow= moment( date , "YYYYMMDD" ). fromNow();
console.log(fromNow);
console.log(moment(convertedDate).toNow());
console.log(moment(convertedDate).diff(moment(),"years")

var newDate = moment(new Date("02/14/2001"))



