
const net = require('net');
const portNumber = process.argv[2] || 8000;

const server = net.createServer((socket) => {

  let date = new Date();
  let month = zeroCheck(date.getUTCMonth() + 1);
  let monthDate = zeroCheck(date.getDate());
  let hours = zeroCheck(date.getHours());
  let minutes = zeroCheck(date.getMinutes());
  let seconds = zeroCheck(date.getSeconds());

  function zeroCheck(moment){
    return moment < 10 ? "0" + moment : moment;
  }

  // Uncomment the following for a v2 that adds the full date: 2019-08-13 12:47
  //let formattedDate = date.getFullYear() + "-" + month  + "-" + monthDate + " " + hours + ":" + minutes ;
  let formattedDate = hours + ":" + minutes + ":" + seconds;

  socket.write("the time is: " + formattedDate);
  socket.end("\n");
  console.log("Someone hit your server at:", formattedDate);

}).on('error', (err) => {
  // handle errors here
  throw err;
});


server.listen(portNumber);
