const fs = require('fs')
const path = require('path')

console.log(process.argv)
fs.readdir(process.argv[2], (a,b)=>{
    console.log(a,b)
    b.forEach((c,d)=>{
        
        
        if(   c.split('@').length !== 1){
        
            var newPath = c.split('@').join('?')
            fs.renameSync(   path.join(process.argv[2],c),  path.join(process.argv[2],newPath) )
         
            
        }
        
        
    })
})