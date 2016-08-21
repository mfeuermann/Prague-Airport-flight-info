exports.getFlightInfo = function(action) {

  var http = require('http');
  var cheerio = require('cheerio');

  const host = 'www.prg.aero';
  const pathArival = '/en/flight-info/arrivals-departures/arrivals/';
  const pathDepartures = '/en/flight-info/arrivals-departures/departures/';

  if(action === 'arrivals'){
    objLink = pathArival;
  }

  if(action === 'departures'){
    objLink = pathDepartures;
  }

  var options = {
      host: 'www.prg.aero',
      path: objLink
  }

  var request = http.request(options, function (res) {
      var data = '';
      res.on('data', function (chunk) {
          data += chunk;
      });
      res.on('end', function () {

      $ = cheerio.load(data);

      const finalObjects = [];
      // traversing all rows
      if(action === 'arrivals'){
        $('.letistepraha_cms_ui_content_departurearrival_arrival > tbody  > tr').each(function(i, elem) {

          const arrivalObj = {dateTime: $(elem.children[1]).text(),
                              flightNum: $(elem.children[3]).text(),
                              Target: $(elem.children[5]).text(),
                              Company: $(elem.children[7]).text(),
                              Terminal: $(elem.children[9]).text(),
                              Status: $(elem.children[11]).text(),
                             };
         finalObjects.push(arrivalObj);
        });
      }

      if(action === 'departures'){
        $('.letistepraha_cms_ui_content_departurearrival_departure > tbody  > tr').each(function(i, elem) {

          const arrivalObj = {dateTime: $(elem.children[1]).text(),
                              flightNum: $(elem.children[3]).text(),
                              Target: $(elem.children[5]).text(),
                              Company: $(elem.children[7]).text(),
                              Terminal: $(elem.children[9]).text(),
                              CheckIn: $(elem.children[11]).text(),
                              Status: $(elem.children[13]).text(),
                             };
         finalObjects.push(arrivalObj);

        });
      }

      console.log(finalObjects);
      return finalObjects;

      });
  });
  request.on('error', function (e) {
      console.log(e.message);
  });
  request.end();
}
