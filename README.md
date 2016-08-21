# Prague Airport flights info

## Synopsis

Simple module getting information about arrivals and departures from
Prague International Airport (Vaclav Havels Airport) webpage.

## Code Example

Require module, call and get result!
Call with parameters 'departures' or 'arrivals'.

```
var pragueAirportInfo = require('prague-airport-flights-info');

pragueAirportInfo.getFlightInfo('departures', function(departuresObj){
  console.log(departuresObj);
});

```

## Contributors

Marek Feuermann

## License

MIT
