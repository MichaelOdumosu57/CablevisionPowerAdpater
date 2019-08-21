const http = require('http');
const fs = require('fs');
const path = require('path')
const port = process.env.PORT || 4200

/* application global variables*/ //{
var redirectsKey= [
                    'startMyBusiness',
                    'contact',
                    'projects',
                    'blog',
                    'credits',
                    'services',
                    '/'
                    
                ]
var redirectsValue = [
                        'about.html',
                        'contact.html',
                        'projects.html',
                        'blog.html',
                        'credits.html',
                        'services.html',
                        'index.html'
                    ]
// }  /**/

var server
// function generateBackend(   dev_obj   ){
    
server = http.createServer((req, res) => {
    
res.statusCode = 200;
res.setHeader('Content-Type', 'text/html');

/* routing logic*/ //{
// if the cable string is not foud im probably looking for a webpage
console.log(    req.url.indexOf('/CablevisionPowerAdpater/dependencies/index/')   )
if(   req.url.indexOf('/CablevisionPowerAdpater/dependencies/index/') !== -1   ){
    
    var dependencyRequest
    console.log('dependencies')
    if(   req.url.indexOf('css') !== -1){
        
        
        res.setHeader('Content-Type', 'text/css');
        
	    
    }
    
    dependencyRequest = fs.readFileSync(   path.join(__dirname,'dependencies','index',req.url.split("/")[req.url.split("/").length-1] )   )
	res.end(   dependencyRequest   )
	generateBackend()
	
}


if(   req.url.indexOf('/CablevisionPowerAdpater/dependencies/index/') === -1   ){
    
    var endRequest = 'false'
    var fileRequest = ''
    res.setHeader('Content-Security-Policy', 'upgrade-insecure-requests');
    
    /* figuring out which page to send*/ //{
    
    redirectsKey.forEach((a,b)=>{
        
        
        if(   req.url.indexOf(   a   )!== -1 && endRequest === 'false'   ){
            
            
            endRequest = 'true'
            console.log('sending '+ redirectsValue[b]   )
            fileRequest= fs.readFileSync(   path.join(__dirname,redirectsValue[b])   )
            res.end(    fileRequest   )
            generateBackend()
            
            
        }
        
        
    })
    
    
    if(   endRequest === 'false'   ){
        
        
        console.log('sending 404')
        fileRequest = fs.readFileSync(   path.join(__dirname,'404.html')   )
        res.end(    fileRequest   )
        generateBackend()
        
    }
    // }  /**/
    
    
	
}
// }  /**/

if(   server.listening === false   ){

}


/* code that helps see where your files are */ //{
// var filesList = ''
// fs.readdir(__dirname , (err,files) => {
// 	if (err) throw err


// 	else{
// 		files.map((x)=>{
// 		    filesList += x
// 		})
        // res.end(fileList)
// 	}
// })
// }  /**/

  
});
server.on('request',()=>{
    console.log('request')
})

// }

// generateBackend()
server.listen(port,() => {
  console.log(`Server running at port `+port);
});