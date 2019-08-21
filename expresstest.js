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


app.get('/', function (req, res) {
 res.send(JSON.stringify({ Hello: 'World'}));
});

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