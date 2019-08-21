const express = require('express')
const app = express()
const port = process.env.PORT || 3000

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

app.listen(port)

//