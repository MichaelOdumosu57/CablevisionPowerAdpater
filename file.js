const http = require('http');
const fs = require('fs');
const path = require('path')
const url = require('url')
const port = process.env.PORT || 3000

/* application global variables*/ //{
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


const server = http.createServer((req, res) => {
    
res.statusCode = 200;
res.setHeader('Content-Type', 'text/html');
var reqInfo = url.parse(   req.url   )
res.end('<h1>'+reqInfo.path+'</h1>')
// res.end(   fs.readFileSync(   path.join(   __dirname,'index.html'   )   )   );
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

server.listen(port,() => {
  console.log(`Server running at port `+port);
});
