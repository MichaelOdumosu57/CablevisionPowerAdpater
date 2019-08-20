var i = 0;




/**/ //{
// }  /**/

var neededPath = `/dependencies/`
/*grabbing all the elements */ //{
// i havent payed attention to where all the elements are that should be ok
while(   i !== document.all.length -1   ){
    i+=1
    // console.log(   i   )
    
    
    if(   typeof document.all[i].href === 'string'   ){
        
        
        if(   document.all[i].href.indexOf("maps") !== -1   ){
         
            
            console.log(document.all[i])
            
            
        }
        
        
        if(   document.all[i].href.indexOf("http://windsorempire.com") !== -1   ){
            
            
            document.all[i].href = neededPath + document.all[i].href.split("/")[document.all[i].href.split("/").length-1]
        
        
        }
        
        
    }
    
    
    if(   typeof document.all[i].src === 'string'   ){
        
        
        if(   document.all[i].src.indexOf("maps") !== -1   ){
         
            
            console.log(document.all[i])
            
            
        }
        
        
        if(   document.all[i].src.indexOf("http://windsorempire.com") !== -1   ){
            
            
            document.all[i].src = neededPath + document.all[i].src.split("/")[document.all[i].src.split("/").length-1]
        
        
        }
        
        
    }
    
    
}
// }  /**/