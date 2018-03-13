var d = new Date();
var ora = d.getHours();
var minuti = d.getMinutes();
var sec = d.getSeconds();
var year = d.getFullYear();
var month = d.getMonth();
var day = d.getDate();
var dayofweek = d.getDay();

if (month == 0) {month = "gennaio";}
if (month == 1) {month = "febbraio";}
if (month == 2) {month = "marzo";}
if (month == 3) {month = "aprile";}
if (month == 4) {month = "maggio";}
if (month == 5) {month = "giugno" ;}
if (month == 6) {month = "luglio" }
if (month == 7) {month = "agosto" }
if (month == 8) {month = "settembre" }
if (month == 9) {month = "ottobre" }
if (month == 10) {month = "novembre" }
if (month == 11) {month = "dicembre" }


if (dayofweek == 0) {dayofweek = "Dom"}
if (dayofweek == 1) {dayofweek = "Lun"}
if (dayofweek == 2) {dayofweek = "Mar"}
if (dayofweek == 3) {dayofweek = "Mer"}
if (dayofweek == 4) {dayofweek = "Gio"}
if (dayofweek == 5) {dayofweek = "Ven"}
if (dayofweek == 6) {dayofweek = "Sab"}


document.getElementById('ora').innerHTML = ora
document.getElementById('min').innerHTML = minuti
document.getElementById('sec').innerHTML = sec
document.getElementById('day').innerHTML = day
document.getElementById('mese').innerHTML = month
document.getElementById('anno').innerHTML = year
document.getElementById('sett').innerHTML = dayofweek
