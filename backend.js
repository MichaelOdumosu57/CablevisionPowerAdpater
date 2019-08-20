
/**/ //{
// }  /**/


const express = require('express')
const app = express()
const port = 4200 // angular port rmbr to change this
const file_name = __filename.split("/")[__filename.split("/").length-1].split(".js")[0]
const path = require('path')
const fs = require('fs');
const compression = require('compression')
const cors = require('cors')
const ultraObject = require('./ultraObject.js')
const http = require("https");




/* application global variables*/ //{
var projectPath = '/home/uoul/My_Computer/Projects/WindsorEmpire'
 // }  /**/
app.use(cors())
app.use(compression())
app.set('etag', false)



app.get('/', function (req, res, next) {
    console.log('saw it')
	res.sendFile(path.join(projectPath,'index.html'))
});


app.get('/startMyBusiness', function (req, res, next) {
    console.log('saw it')
	res.sendFile(path.join(projectPath,'about.html'))
});


app.get('/contact', function (req, res, next) {
    console.log('saw it')
	res.sendFile(path.join(projectPath,'contact.html'))
});

app.get('/projects', function (req, res, next) {
    console.log('saw it')
	res.sendFile(path.join(projectPath,'projects.html'))
});

app.get('/blog', function (req, res, next) {
    console.log('saw it')
	res.sendFile(path.join(projectPath,'blog.html'))
});

app.get('/credits', function (req, res, next) {
    console.log('saw it')
	res.sendFile(path.join(projectPath,'credits.html'))
});

app.get('/services', function (req, res, next) {
	res.sendFile(path.join(projectPath,'services.html'))
});

/*endpoint for all application dependencies*/ //{
app.get('/dependencies/:file', function (req, res, next) {
    // console.log(   req.url  )
    // console.log(   path.join(projectPath,'dependencies/index',req.url.split("/")[req.url.split("/").length-1]   )   )
	res.sendFile(path.join(projectPath,'dependencies/index',req.url.split("/")[req.url.split("/").length-1] ))
});

// }  /**/

app.get('/myJS/:file', function (req, res, next) {
    
    if(   req.params.file.indexOf('css') !== -1){
        
        
        res.append('MIME-type', 'text/css');
        
	    
	    
    }
    
    
    res.sendFile(path.join(projectPath,'myJS',req.params.file))
});






app.listen(port, () => console.log(`${file_name} app listening on port ${port}!`))




// how does the shipengineAPI manage to take his goobly gook and turn it to a meaningful object


