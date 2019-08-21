const http = require('http');
const fs = require('fs');
const path = require('path')
const port = process.env.PORT || 3000


const server = http.createServer((req, res) => {
    
res.statusCode = 200;
res.setHeader('Content-Type', 'text/html');
var filesList = ''
fs.readdir(__dirname , (err,files) => {
	if (err) throw err


	else{
		files.map((x)=>{
		    filesList += x
		})
		res.end(   fs.readFileSync(   path.join(   __dirname,'index.html'   )   )   );
	}
})

  
});

server.listen(port,() => {
  console.log(`Server running at port `+port);
});
