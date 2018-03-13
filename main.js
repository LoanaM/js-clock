var d = new Date();
var ora = d.getHours();
var minuti = d.getMinutes();
var sec = d.getSeconds();
var year = d.getFullYear();
var month = d.getMonth();
var day = d.getDate();
var dayofweek = d.getDay();

document.getElementById('ora').innerHTML = ora
document.getElementById('min').innerHTML = minuti
document.getElementById('sec').innerHTML = sec
document.getElementById('day').innerHTML = day
document.getElementById('mese').innerHTML = month
document.getElementById('anno').innerHTML = year
