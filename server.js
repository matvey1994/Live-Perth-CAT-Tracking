var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://www.transperth.wa.gov.au/API/CatLiveTimesMap/CatLiveTimesMapApi/GetCatInfo',
  'headers': {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({})
};
request(options, function (error, response) { 
  if (error) throw new Error(error);
  console.log(response.body);
});