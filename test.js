var http = require('http');
var str = '';

lati = Number(process.argv[2]);
longi = Number(process.argv[3]);

 http.get('http://nominatim.openstreetmap.org/reverse?format=json&lat='+lati+'&lon='+longi+'&zoom=18&addressdetails=1', function(res){
       
        console.log('Response is '+res.statusCode);

        res.on('data', function (chunk) {
              //console.log('BODY: ' + chunk);
               str += chunk;
         });


        res.on('end', function () {
        	str = JSON.parse(str);
             console.log(str);
        });

  });

 http.createServer(function(req, res){
    res.writeHead(200);
    res.write(str.address.country_code);
    console.log(str);
    res.end();
 }).listen(8080);
 console.log('Server listening on port 8080 ');