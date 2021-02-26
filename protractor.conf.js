var HtmlReporter = require('protractor-beautiful-reporter');
exports.config = {
    framework: 'jasmine', //Type of Framework used 
    directConnect:true,    
    specs: ['./src/tests/TestCases.js'], //Name of the Specfile
     capabilities:{
         'browserName':'chrome',
         chromeOptions: {
            // --allow-file-access-from-files - allow XHR from file://
            args: ['allow-file-access-from-files']
        }
     },
     onPrepare: function() {
        browser.ignoreSynchronization = true;
        browser.resetUrl = 'file:///';
        jasmine.getEnv().addReporter(new HtmlReporter({
         baseDirectory: 'Reports/screenshots'
      }).getJasmine2Reporter());
     }
  }