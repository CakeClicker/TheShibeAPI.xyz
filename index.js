var express = require('express')
const winston = require('winston');
var app = express()
const port = 8081
const context =("request handeld ")
const io = require('@pm2/io');
const fs = require('fs');
const cissystem = require('cis-system')
//bruh, my lint got mad at me, when i was reading off code from docs lmfao
const logger = winston.createLogger({
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: 'combined.log' })
    ]
  });
  logger.log({
    level: 'start',
    message: 'api start'
  });
  //pm2 stuff

		 
  const currentReqs = io.counter({
    name: 'Realtime request count',
    id: 'app/realtime/requests'
  });
  
app.get('', function (req, res) {
	
    console.log('request required')
	console.log("Shibes are so awesome!");
    res.send("Welcome! Current endpoints,   /shibe           added https:// so fetch works again for bots on discord xD")
    console.log("Request Finished")
    logger.info('api request handeld');
    currentReqs.inc();
		
  });
  const path = require('path');

const directoryPath = path.join(__dirname, 'image/shibe');
const pickRandomNumber = (max) => Math.floor(Math.random() * max);

const allowedFileTypes = [".jpg", ".png"];
const hasAllowedEnding = file => allowedFileTypes.some(ending => file.toLowerCase().endsWith(ending));

	console.log("Shibes are so awesome!");
app.get('/shibe', function (req, res) {
    fs.readdir(directoryPath, function (err, files) {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        const images = files.filter(hasAllowedEnding);
        const pickedIndex = pickRandomNumber(images.length);
        const imageName = images[pickedIndex];
		
		
		res.send( "[" + `"` + "https://cdn.theshibeapi.xyz/shibes/"+imageName + `"` + "]");
		
		 logger.info('api request handeld for shibe image');
    
       
        currentReqs.inc();		
		
		
		
 });
})
const birddirectoryPath = path.join(__dirname, 'bird');
const birdpickRandomNumber = (max) => Math.floor(Math.random() * max);

const birballowedFileTypes = [".jpg", ".png"];
const birbhasAllowedEnding = file => allowedFileTypes.some(ending => file.toLowerCase().endsWith(ending));

app.get('/bird', function (req, res) {
    fs.readdir(birddirectoryPath, function (err, files) {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        const images = files.filter(hasAllowedEnding);
        const pickedIndex = birdpickRandomNumber(images.length);
        const imageName = images[pickedIndex];
        res.sendFile(path.join(birddirectoryPath, imageName));
		logger.info('api request handeld for bird img');
        currentReqs.inc();

});
})
app.get('/imagecount', function (req, res) {

  fs.readdir(directoryPath, (err, files) => {
    res.send(files.length)
    logger.info('api request handeld');
    currentReqs.inc();

  }); 
})

app.get('/endpoints', function (req, res) {
 res.send("Current endpoints, /shibes")
 logger.info('api request handeld');
  currentReqs.inc();
});

app.get('/animals', function (req, res) {
  res.send("Curent animals On the api, Shibe images ")
  logger.info('api request handeld');
         currentReqs.inc();
 })
 

console.log("works here")
// i apparently dont remember any syntax of javascript, thats nice

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
	console.log("Cakey the fruity Boi")
  })

  

















  