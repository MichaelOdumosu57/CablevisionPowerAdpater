const express = require('express')
const app = express()
const port = process.env.PORT || 4200 // angular port rmbr to change this
const file_name = __filename.split("/")[__filename.split("/").length-1].split(".js")[0]

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