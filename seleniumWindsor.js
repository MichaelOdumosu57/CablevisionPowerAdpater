

/*selenium setup */ //{
var webdriver = require('selenium-webdriver'),
var needed =require('./sec/creden.js')

// }  /**/

/*chrome setup */ //{
var chrome = require('selenium-webdriver/chrome');
var chromePath = require('chromedriver').path;
var chromeService = new chrome.ServiceBuilder(chromePath).build();
chrome.setDefaultService(chromeService);
console.log(webdriver.Capabilities.chrome())
var chromeDriver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    // .setChromeOptions(new chrome.Options().headless())
    .usingServer("https://" + username + ":" + accessKey +
          "@ondemand.saucelabs.com:443/wd/hub")
    .build()
// }  /**/

/*node mode choice thread multiple  app*/ //{
function severalAuto(   dev_obj   ){
    for(   i of dev_obj.drivers   ){
        i.then((driver)=>{
            driver.get('http://www.windsorempire.com').then(()=>{
                driver.getCapabilities().then((value)=>{
                    console.log(value.Map)
                    debugger
                })
                driver.getTitle('http://www.windsorempire.com').then((title)=>{
                    console.log(' i went to the site')
                    console.log(title)
                    driver.quit()
                })
            })
        })
        
    }
}
severalAuto({drivers:[chromeDriver]})
// }  /**/



/* fix this so you can properly connect SauceLabs with Selenium */ //{
// driver.getSession().then(function (sessionid){
//       driver.sessionID = sessionid.id_;
// });

driver.sleep(2000).then(function() {
//   driver.getTitle().then(function(title) {
//     if(title === 'webdriver - Google Search') {
//       console.log('Test passed');
//       var testPassed = true;
//     } else {
//       console.log('Test failed');
//       var testPassed = false;
//     }

//     saucelabs.updateJob(driver.sessionID, {
//         name: 'Google search results page title test',
//         passed: testPassed
//     });
//   });
// });
// }  /**/