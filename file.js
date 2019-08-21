const http = require('http');
const fs = require('fs');
const path = require('path')
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

/* routing logic*/ //{
if(   req.url.indexOf('/CablevisionPowerAdpater/dependencies/index/') !== -1   ){
    
    
    if(   req.url.indexOf('css') !== -1){
        
        
        res.setHeader('Content-Type', 'text/css');
        
	    
    }
    
    
	res.end(   fs.readFileSync(   path.join(__dirname,'dependencies','index',req.url.split("/")[req.url.split("/").length-1] )   )   )
	
}
// }  /**/

res.end('<h1>'+ req.url +'</h1>')
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
