# Prague Airport flights info

## Synopsis

Simple module getting information about arrivals and departures from
Prague International Airport (Vaclav Havels Airport) webpage.

## Code Example

Require module, call and get result!
Call with parameters 'departures' or 'arrivals'.

```
var pragueInfo = require('prague-airport-flights-info');

const departures = [];

pragueInfo.getFlightInfo('departures', function(obj){
  departures = obj;
});

```

## Contributors

Marek Feuermann

## License

MIT
