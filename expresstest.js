const express = require('express')
const app = express()
const port = process.env.PORT || 4200 // angular port rmbr to change this
const fileName = __filename.split("/")[__filename.split("/").length-1].split(".js")[0]
const path = require('path')
const fs = require('fs');
const compression = require('compression')
const cors = require('cors')
// const ultraObject = require('./ultraObject.js')
const http = require("https");

/* application global variables*/ //{
var projectPath = '/home/uoul/My_Computer/Projects/WindsorEmpire'
var w_file = 'modfied.html'
var redirects= {
                    '/':'index.html',
                    'startMyBusiness':'about.html',
                    'contact':'contact.html',
                    'projects':'projects.html',
                    'blog':'blog.html',
                    'credits':'credits.html',
                    'services':'services.html',
                }
 // }  /**/
 
 
/* express app configure*/ //{
app.use(cors())
app.use(compression())
app.set('etag', false)
 // }  /**/


function fileMiddleware (req, res, next) {

    
    if(   process.argv[2] !== 'httpOnlyPlease'   ){
        
        
        res.append('Content-Security-Policy', 'upgrade-insecure-requests');
        
        
    }
    /* determining home page*/ //{
    // at this point were good because I used a regex to modify the resouce endpoints in the files
    var file = 'index.html'

    
    if(   req.params.file !== undefined   ){
        
        
        file = redirects[req.params.file]
        
        
    }
    
    console.log(file)
    if(   file === undefined   ){
        
        
        res.sendFile(path.join(__dirname,  '404.html' ))
        return
        
        
    }
    
    
    res.sendFile(path.join(__dirname,  file ))
    // }  /**/
    
    

	
}
function errorMiddleware(err,req,res,next){
    res.send(path.join(__dirname,  '404.html' ))
}
function directoryList(req,res,next){
    var filesList = ''

    res.send(__dirname)
}


app.get('/',fileMiddleware,errorMiddleware );
app.get('/:file',fileMiddleware,errorMiddleware )

/*endpoint for all application dependencies*/ //{
function dependencyEndpoint(req, res, next) {
    // console.log(   req.url  )
    // console.log(   path.join(projectPath,'dependencies/index',req.url.split("/")[req.url.split("/").length-1]   )   )
    
    if(   req.params.file.indexOf('css') !== -1){
        
        
        res.append('Content-Type', 'text/css');
        
	    
    }
    
    
	res.sendFile(path.join(__dirname,'dependencies','index',req.url.split("/")[req.url.split("/").length-1] ))
}
app.get('/CablevisionPowerAdpater/dependencies/index/:file', dependencyEndpoint,errorMiddleware);

app.get('/CablevisionPowerAdpater/dependencies/fonts/:file',dependencyEndpoint,errorMiddleware);
// }  /**/
app.all([/[^CablevisionPowerAdpater\/dependencies\/]/,/[^\/.+]/,/[^\/]/],(req,res,next)=>{
    console.log('got request for',req.url)
    res.sendFile(path.join(__dirname,  '404.html'))
})


app.listen(port,() => {
  console.log(`${fileName} running at port `+port);
});