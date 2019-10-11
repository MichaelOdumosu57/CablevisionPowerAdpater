

/*selenium setup */ //{
var webdriver = require('selenium-webdriver')
var needed =require('./sec/creden.js')

// }  /**/

/*chrome setup */ //{
var chrome = require('selenium-webdriver/chrome');
var chromePath = require('chromedriver').path;
var chromeService = new chrome.ServiceBuilder(chromePath).build();
chrome.setDefaultService(chromeService);
// console.log(webdriver.Capabilities.chrome())
var chromeDriver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    // .setChromeOptions(new chrome.Options().headless())
    .usingServer("https://" + needed.sauceUser + ":" + needed.sauceKey +
          "@ondemand.saucelabs.com:443/wd/hub")
    .build()
// }  /**/

/*firefox setup */ //{
var firefox = require('selenium-webdriver/firefox');
var firefoxPath = require('geckodriver').path;
var firefoxService = new firefox.ServiceBuilder(firefoxPath).build();
// firefox.setDefaultService(firefoxService);
var firefoxDriver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.firefox())
    // .setFirefoxOptions(new firefox.Options().headless())
    .usingServer("https://" + needed.sauceUser + ":" + needed.sauceKey +
          "@ondemand.saucelabs.com:443/wd/hub")
    .build()
// }  /**/


/*ie setup */ //{
var ie = require('selenium-webdriver/ie');
var iePath = require('iedriver').path;
var ieService = new ie.ServiceBuilder(iePath).build();
// ie.setDefaultService(ieService);
var ieDriver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.ie())
    // .setieOptions(new ie.Options().headless())
    .usingServer("https://" + needed.sauceUser + ":" + needed.sauceKey +
          "@ondemand.saucelabs.com:443/wd/hub")
    .build()
// }  /**/

/*edge setup */ //{
// get the Mircosoft.exe driver ok
// var edge = require('selenium-webdriver/edge');
// var edgePath = require('edgedriver').path;
// var edgeService = new edge.ServiceBuilder(edgePath).build();
// // edge.setDefaultService(edgeService);
// var edgeDriver = new webdriver.Builder()
//     .withCapabilitedges(webdriver.Capabilitedges.edge())
//     // .setedgeOptions(new edge.Options().headless())
//     .usingServer("https://" + needed.sauceUser + ":" + needed.sauceKey +
//           "@ondemand.saucelabs.com:443/wd/hub")
//     .build()
// }  /**/


/*safari setup  */ //{
// they wont give u the executable
// var safari = require('selenium-webdriver/safari');
// var safariPath = require('ddry-selenium-safari');
// console.log(safariPath())
// var safariService = new safari.ServiceBuilder(safariPath).build();
// safari.setDefaultService(safariService);
// var safariDriver = new webdriver.Builder()
//     .withCapabilitsafaris(webdriver.Capabilitsafaris.safari())
//     // .setsafariOptions(new safari.Options().headless())
//     .usingServer("https://" + needed.sauceUser + ":" + needed.sauceKey +
//           "@ondemand.saucelabs.com:443/wd/hub")
//     .build()
// }  /**/

/*node mode choice thread multiple  app*/ //{
function severalAuto(   dev_obj   ){
    for(   i of dev_obj.drivers   ){
        i.then((driver)=>{
            driver.get('http://24.189.66.225').then((a)=>{
                driver.get('http://24.189.66.225/startMyBusiness').then((a)=>{
                    driver.get('http://24.189.66.225/services').then((a)=>{
                        driver.get('http://24.189.66.225/projects').then((a)=>{
                            driver.get('http://24.189.66.225/blog').then((a)=>{
                                driver.get('http://24.189.66.225/contact').then((a)=>{
                                    driver.quit()
                                })
                            })
                        })
                    })
                })
            })
        })
        
    }
}
severalAuto({drivers:[ firefoxDriver,chromeDriver,ieDriver]})
// }  /**/



/* fix this so you can properly connect SauceLabs with Selenium */ //{
// driver.getSession().then(function (sessionid){
//       driver.sessionID = sessionid.id_;
// });

// driver.sleep(2000).then(function() {
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