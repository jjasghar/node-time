
const net = require('net');
const portNumber = process.argv[2] || 8000;

let date = new Date();
let month = zeroCheck(date.getUTCMonth() + 1);
let monthDate = zeroCheck(date.getDate());
let hours = zeroCheck(date.getHours());
let minutes = zeroCheck(date.getMinutes());

function zeroCheck(moment){
	return moment < 10 ? "0" + moment : moment;
}

let formattedDate = hours + ":" + minutes ;

// Uncomment the following for a v2 that adds the full date: 2019-08-13 12:47
//let formattedDate = date.getFullYear() + "-" + month  + "-" + monthDate + " " + hours + ":" + minutes ;


const server = net.createServer((socket) => {
  socket.write("the time is: " + formattedDate);
  socket.end("\n");
  console.log("Someone hit your server at:",formattedDate);

}).on('error', (err) => {
  // handle errors here
  throw err;
});


server.listen(portNumber);
