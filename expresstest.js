const express = require('express')
const app = express()
const port = process.env.PORT || 4200 // angular port rmbr to change this
const file_name = __filename.split("/")[__filename.split("/").length-1].split(".js")[0]
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
    
    console.log('got it')
    // console.log(   req   )
    
    
    /* determining home page*/ //{
    // at this point were good because I used a regex to modify the resouce endpoints in the files
    var file = 'index.html'

    
    if(   req.params.file !== undefined   ){
        
        
        file = redirects[req.params.file]
        
        
    }
    
    res.sendFile(path.join(__dirname,  file ))
    // }  /**/
    return
    

	
}
function errorMiddleware(err,res,req,next){
    res.sendFile(path.join(__dirname,  '404.html' ))
}
app.get('/',errorMiddleware);
// app.get('/', function (req, res) {
//  res.send(JSON.stringify({ Hello: 'World'}));
// });

/* code that helps see where your files are */ //{
// var filesList = ''
// fs.readdir(__dirname , (err,files) => {
// 	if (err) throw err


// 	else{
// 		files.map((x)=>{
// 		    filesList += x
// 		})
//         res.end(fileList)
// 	}
// })
// }  /**/

app.listen(port, () => console.log(`${file_name} app listening on port ${port}!`))

//