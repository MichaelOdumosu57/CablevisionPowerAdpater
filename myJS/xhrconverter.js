

/*miniservice variables*/ //{
var i = 0;
var z = document.all.length -1
// }  /**/



/**/ //{
// }  /**/


/**/ //{
    // dev_obj
        //.element a created DOM element
        // .source where you want to place the new element
        // .attr, array of objects you want to to add to your list
            //in those object, attrKey   - key attribute
            //                 attrValue - key value
function createDOMElement(   dev_obj   ){
    dev_obj.attr.forEach((   a,b   )=>{
        var attr =document.createAttribute(   a.attrKey   )
        attr.value = a.attrValue
        dev_obj.element.setAttributeNode(   attr   )
    })
    dev_obj.source.appendChild(   dev_obj.element   )
}
// }  /**/
var neededPath = `/dependencies/index/`
/*grabbing all the elements */ //{
// i havent payed attention to where all the elements are that should be ok
while(   i !== z  ){
    i+=1
    // console.log(   i   )
    
    
    if(   typeof document.all[i].href === 'string'   ){
    
            
        if(   document.all[i].href.indexOf("http://windsorempire.com") !== -1   ){
            
            
            document.all[i].href = neededPath + document.all[i].href.split("/")[document.all[i].href.split("/").length-1]
        
        
        }
        
        
    }
    
    
    if(   typeof document.all[i].src === 'string'   ){
        
        
        if(   document.all[i].tagName === "SCRIPT" && document.all[i].src.indexOf("http://windsorempire.com") !== -1  ){
            
            createDOMElement({
                element:document.createElement('script'),
                source:document.head,
                attr:[
                        {
                            attrKey:'type',
                            attrValue:'text/javascript'
                        },
                        {
                            attrKey:'src',
                            attrValue: document.location.origin + neededPath + document.all[i].src.split("/")[document.all[i].src.split("/").length-1]
                        }
                    ]
            })
            console.log(   document.location.origin + neededPath + document.all[i].src.split("/")[document.all[i].src.split("/").length-1]   )
       
        }
        
        
        else if(   document.all[i].src.indexOf("http://windsorempire.com") !== -1   ){
            
            
            document.all[i].src = neededPath + document.all[i].src.split("/")[document.all[i].src.split("/").length-1]
        
        
        }
        
        
    }
    
    
    if(   typeof document.all[i].srcset === 'string'   ){
        
        
        if(   document.all[i].srcset.indexOf("http://windsorempire.com") !== -1   ){
            
            
            var srcsetArray = document.all[i].srcset.split(",")
            var srcsetNew = "";
            srcsetArray.forEach((a,b)=>{
                srcsetNew += neededPath + a.split("/")[a.split("/").length-1]+ ", "
            })
            document.all[i].srcset = srcsetNew
            console.log(   document.all[i].srcset   )
        
        }
        
        
    }
    
    
}
// }  /**/


function xhrConvertFile(   dev_obj   ){
    
    
    // return dev_obj.ccta.split(/"/).join("'").split(/'http:\/\/windsorempire.com\/[^']+\//).join("'"+document.location.origin+"/dependencies/index/")
    return "<head>"+dev_obj.ccta.split(/"/).join("'").split(/'http:\/\/windsorempire.com\/[^']+\//).join("'/CablevisionPowerAdpater/dependencies/index/")+"</head>"
    
    
}
xhrConvertFile({ccta:document.documentElement.innerHTML})