var page = require('webpage').create();
var url = 'http://hejinfo.com/';
page.open(url, function (status) {
  if (status !== 'success') {
    console.log('Unable to access the website');
  } else {
    var js = page.evaluate(function () {
      return document;
    });
    console.log(js.all[0].outerHTML);
    phantom.exit();
  }
});
