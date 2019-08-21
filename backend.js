
/**/ //{
// }  /**/

function noHeroku(   dev_obj  ){
const express = require('express')
const app = express()
const port = process.env.PORT || 4200 // angular port rmbr to change this
const file_name = __filename.split("/")[__filename.split("/").length-1].split(".js")[0]
const path = require('path')
const fs = require('fs');
const compression = require('compression')
const cors = require('cors')
const ultraObject = require('./ultraObject.js')
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
    
    console.log(   'saw ' + file   )
    var response = res
    const wStream = fs.createWriteStream(w_file,{
          start:0,
          autoClose:true
    })
    wStream.on('error',  function(err){
        setImmediate(() => {
            console.log('error thrown in writeStream close everything ',err)
            this.end()
            // console.log(this)

        });
    });
    wStream.once('finish',function(   ){
        // console.log('All writes are now complete. writestream closed');
        response.sendFile(w_file)
    })
    wStream.on('pipe', (src) => {
      console.error('something is piping into the writer');
      // assert.equal(src, r_stream);
    });
    wStream.on('unpipe', (src) => {
      console.error('Something has stopped piping into the writer.');
      // assert.equal(src, r_stream);
    });
    // console.log('writable stream intializaed')
    var receiving = new Promise((resolve,reject)=>{
        try {
          fs.accessSync(__dirname +'/' + file + '.html', fs.constants.R_OK);
          console.log('can read/write');
        }
        catch (err) {
            res.sendFile(path.join(projectPath,'404.html'))
        }
        const r_stream = fs.createReadStream(__dirname +'/' + req.params.file ,{
          start:0,
          autoClose:true
        })
        resolve( new Promise((resolve,reject)=>{
            function a(chunk){
                    console.log(chunk)
                    setImmediate(() =>{
                        if(   !wStream.write(   chunk.toString().split("&lt;").join("< ").split("&lt").join("< ")  )  ){
                            
                            // ccta.split(/http:\/\/windsorempire.com.+('|")/)
                            // ccta.split(/http:\/\/windsorempire.com(?:.+)(\/>|>)/) gets that endingtag
                            // ccta.split(/"http:\/\/windsorempire.com(?:.+)"|'http:\/\/windsorempire.com(?:.+)'/).join('"dependencies/index"')
                            // ccta.match(/'http:\/\/windsorempire.com(?:[^'|"]+(?!"|'))/)
                            // ccta.split(/'http:\/\/windsorempire.com\/[^']+\//).join("'dependencies/index/") the rege that did it the soultion is here \/[^']+\/, but that should not try to differentate out the file there is no spec for that,
                            
                            // the final string ccta.split(/"/).join("'").split(/'http:\/\/windsorempire.com\/[^']+\//).join("'dependencies/index/")
                            r_stream.off('data',a)
                            r_stream.pause()
                            wStream.once('drain',function(){
                                 r_stream.resume()
                                 r_stream.on('data',a)
                            })
                        }
                    })
            }
            r_stream.on('end',()=>{
              setImmediate(() => {
                r_stream.resume(); //this helps clear the buffer
                wStream.end()
              })
            })
            r_stream.on('close',()=>{
              setImmediate(() =>{
                // console.log("looks like the fd was closed by the stream ")
              })
            })
            r_stream.on('data',a)
            console.log('readable stream intializaed')
            resolve()
        })).catch((err)=>{
                console.log('2')
                console.log(err)
                console.log('couldnt get the read stream started')
                wStream.end()
            })
    }).catch((err)=>{
        console.log(err)
        const r_stream = fs.createReadStream(rFile,{
          start:0,
          autoClose:true
        })
        new Promise((resolve,reject)=>{
            function a(chunk){
                    console.log(chunk)
                    setImmediate(() =>{
                        if(   !wStream.write(   chunk.toString().split("&lt;").join("< ").split("&lt").join("< ")  )  ){
                            r_stream.off('data',a)
                            r_stream.pause()
                            wStream.once('drain',function(){
                                 r_stream.resume()
                                 r_stream.on('data',a)
                            })
                        }
                    })
            }
            r_stream.on('end',()=>{
              setImmediate(() => {
                r_stream.resume(); //this helps clear the buffer
                wStream.end()
              })
            })
            r_stream.on('close',()=>{
              setImmediate(() =>{
                // console.log("looks like the fd was closed by the stream ")
              })
            })
            r_stream.on('data',a)
            console.log('readable stream intializaed')
            resolve()
        }).catch((err)=>{
                console.log('2')
                console.log(err)
                console.log('couldnt get the read stream started')
                wStream.end()
            })
    }).catch((err)=>{
        console.log('2')
        console.log(err)
        console.log('couldnt get the read stream started')
        wStream.end()
    })

	
}

app.get('/:file',  fileMiddleware);
app.get('/',  (req, res, next){
    res.end("<h1>Hello World</h1>")
});





/*endpoint for all application dependencies*/ //{
app.get('/CablevisionPowerAdpater/dependencies/index/:file', function (req, res, next) {
    // console.log(   req.url  )
    // console.log(   path.join(projectPath,'dependencies/index',req.url.split("/")[req.url.split("/").length-1]   )   )
    
    if(   req.params.file.indexOf('css') !== -1){
        
        
        res.append('Content-Type', 'text/css');
        
	    
    }
    
    
	res.sendFile(path.join(projectPath,'dependencies','index',req.url.split("/")[req.url.split("/").length-1] ))
});

// }  /**/

app.get('/myJS/:file', function (req, res, next) {
    res.sendFile(path.join(projectPath,'myJS',req.params.file))
});






    
    
app.listen(port, () => console.log(`${file_name} app listening on port ${port}!`))
    
    






// how does the shipengineAPI manage to take his goobly gook and turn it to a meaningful object
}

function heroku(   dev_obj   ){
    const http = require('http');
    const port = process.env.PORT || 3000
    
    const server = http.createServer((req, res) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(   __dirname   );
    });
    
    server.listen(port,() => {
      console.log(`Server running at port `+port);
    });
    
}

if(   process.args[2] === undefined   ){
    
    
    heroku()
    
    
}


if(   process.args[2] !== undefined   ){
    
    
    noHeroku()
    
    
}