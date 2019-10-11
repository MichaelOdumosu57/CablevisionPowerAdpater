

        /*
            TO DO ,
            mabye think about a validator API
            make a function that handles self, scope and abelast
            work on recreating the testing module for partialMatch and finding that bug
        */
        
                        function wait(   ms   ){
                           var start = new Date().getTime();
                           var end = start;
                           while(   end < start + ms   ) {
                             end = new Date().getTime();
                           }
                        }
                // if node use exports or figure how to get external modules in here
                
                //when using ultraObject rmbr all your modules are mesed up replace ultraObject with uO
                
                //always code that does not modify first, then code that modifies
                
                // an OOP way to do everything javascript, I meant to have this done in python with a superclass oh well
                // for meaningful use, every property purpose is easily availble to each other and you can have several of them
                
                //if your find problems search PROBLEMS to see whats going on
                
                // when you see /* node mode choice thread [theead name]*/ it means an important piece of code is not used
                
                // finshed products should be left in the ultraObject
                
                // customization paramters should be passed among microservices
                
                // if another API just needs a primitive, just provide it no need for an iterable Object
                
                //ultraObject is designed to recover from the unexecpted make sure all needed values have defaults the cover all possibilites the microservice may run into
                
                //so you ultraObject should be about performance not vaildation because when there is validations performance is compromised instead one module should be dedicated to validation
        
                
                //for every single function call its arogumetns must be held in ultraObject.args when the function dies or its args are not needed,
                //they are taken from their place in the args. they are each put into another itO with an index just in case of recusion
                    // when  an item from args is needed, it is put into a scope and added to a meanigunful property representation name in the ultraObject,
                    //there will be a function implemented if the developer needs a copy or changes can reflect in the args
                    
                //var const and let in function must only represent the index of and item coming from ultraObject.scope
                
                //to access items you must get it though the index in the scope
                // if a outer function needs a scope location from the inner function which started in the inner function use, .itO.abelast which is an itO in order to pull it out
                
                //use [   item   ], where item is a whole compact piece of code not an iteration or property
                    // the space used between the brakets indicats if it take that braket group  and place in the consle it returns something meaningful to the function environment and  a standalone value
                //use  (   item   ) always unless there is nothing there or its multiline
                //function temp items should not be in the target object but  in the object the function uses to manipulate the target object. unless the fn does not use a temp object
                /*
                    ex
                    obj
                    fn increase(   dev_obj   ){
                        ...
                            var a = ultraObject.(...)
                            a shoud go on dev_obj not in the actual object because oce the object is made the scaffolding should be thrown  away
                        ...
                    }
                */
                // all functions should perform comparision one at the time this allows for more
                // the inside fn adds meaning the outside decides whether to take them out
                    
                // if a function has flow like partialMatch all uO.itO should be added to the scope and taken out of the scope upon completion
                    //it should be made known to the developer how to access them in the abelast
                    
                // send in the target to a function rather than how to access the target when you are not sure you need to access it from somewhere else, because I may have to access it from anywhere. When you bring them in, place them as a property of antoher uO.itO, or an another associated object
                
                // if a function is to be used on the same uO.itO again such as numberSystem, the developer must tell the function where the specifi uO.itO is as it expect to work with only one type of itO
                
                // pass the item the function needs to a function, becuase what if the item path changes, this does not apply for specific functions looking for the specific itO respective such as numberSystem, code based on meaning not module
                
                // also  function should specify what they are receiving until you come up with a function that converts any type into the type you want which will look like a massive data table, but consider which times are approppriate
                
                //is {}[] allowed in ES5 ??
                //should items be accessed through the ultraObject because mabye sometimes we cannot call it as a method
                    //should we stick to property access, since its easier fro everyone to have access
                // templates
                // FL_0_i for loop object in the purpose action
                // BOOL for boolean object
                    // BOOL_0_i for more
                // SA for a selectAll object
                // O stands for Object for this functionality like thisfn has thisfnO
                // itO stands for iterableObject
                // MB_0_i stands for memory bank used when its hard to contain needed data inside a nested function. its also used as the brain of the API to access every related to its project purpose
                /* [function abbrevation][template] for a naming conveation of items in your API
                    for nested function
                    [function abbrevation]_[[function abbrevation]...][template]
                    when adding the args to ultraObject.args
                    [function full]_[[function full]...]_dev_obj
                */
                // for the remiidify API
                    // not sure if calls should be functions or methods which is easier for ultraObject to survivce
                /*
                var FL_0_i = {
                    forLoop_0_i:0,
                    forLoopLength:.length,
                    fn:function(   dev_obj   ){
                       
                    },
                    args:dev_obj //{}
                ultraObject.forLoop(   FL_0_i   )
                }
                */
                /*
                    var checkingAllValuesBOOL = {0:false}
                    checkingAllValuesBOOL = ultraObject.severalOr({
                        compTo: 'match',
                        compAgn: {0:'do I Match',1:'does they match',2:'does it match',3:'match', length:4},
                        boolean:checkingAllValuesBOOL,
                        which:0
                    })
                    console.log(   checkingAllValuesBOOL   )
                */
                 
                //
                
                // function (   dev_obj   ){
                
                //     /*adding the dev_obj to args*/ //{
                //     var _dev_obj = ultraObject.args.add(   {value:ultraObject.iterify(   {iterify:dev_obj}   )   }   )
                //     // }  /**/
                
                //     if(   dev_obj !== undefined   ){
                    
                //     }
                    
                    
                // }
                /*
                    ultraObject.numberSystem({
                        operation:'create',
                        digits:ultraObject.iterify({
                                iterify:[
                                    ultraObject.iterify({
                                        iterify:[0,[1,0,1]]
                                    }),
                                    ultraObject.iterify({
                                        iterify:[2,ultraObject.iterify({iterify:[3,0,1]})]
                                    })
                                ]
                            }),
                        nSM:ultraObject.iterify({
                                iterify:[
                                    ultraObject.iterify({
                                        iterify:[0,2]
                                    }),
                                    ultraObject.iterify({
                                        iterify:[1,0]
                                    })
                                ]
                            })
                    })
                */
                /*
                     /*[meaning block descritpion]*/ //{
                     // }  /**/
                //
                // __poss stands for possiblity
                /*
                items that should be placed in the ultraObject
                    finished products that are to be used by other API, they shold be stored in an iterableObject and used using iterableObject methods
                    all objects with a specific purpose should be stored in seperate indexes in an itO
                    functions
                    absolute primitive values like Infinity or XMLHTTPRequest
                        
                 */
                function ultraObjectReset(   dev_obj   ){
                    //I know about ES6 but this is an ultraObject right???
                    return {
                    eventName:"",           //wants a DOMString event name
                    event_obj:null,              //wants an Event
                    DOM_child:iterableObject(), // wants a DOM element
                    XHR:iterableObject(), //ajax or XHR choose now
                    endpoint:endpoint,
                    // addEventListener:addEventListener, //  dev_obj.fn is used for 1st party dev to add their custom function to the listener .. can do this my self see why other libraries get mad when i make thi
                    passing_args: function(   dev_obj   ){
                        console.log(arguments)
                    }, // use this to see parameters from functions that have something to offer
                    dispatchEvent: function(   dev_obj   ){ultraObject.DOM_child[0].dispatchEvent(   ultraObject.event_obj   )},    // sync fires
                    // xhttp:xhttp(),
                    // xhr:ultraObject.xhttp //might not be able to use class figure this out might use a function for this
                    // for foward compatability , you should tell this function what to return for default is the xmlhttprequest,
                    // open:open, // for starting xhr
                    // protocol :"GET", // FOR xhr protocol
                    // target:"https://raw.githubusercontent.com/MichaelOdumosu57/JAVASCRIPT/master/SNIPPETS_AND_TEMPLATES/ultraObject.js", // to make the xhr request from
                    // xhttpreadystatechange:xhttpreadystatechange, // see how you can apply ES6 but for compatability, this helps get the response text
                    // xhrResponse:'',// response from the ajax
                    
                    seperator : 3, // for pretty print represents spaces to seperate rename delimiter.length
                    s_key:"-", // how to seperate notes and values  rename delimiter could make itO
                    max : -Infinity || -9999999999999999999, // conisder if || is supported in the oldest browser
                    notes_object:{
                                     '.altKey': 'true if keydown during event',
                                     '.button': 'button number pressed during event'
                                }, // a sample for what pretty object can do
                    notes_collection: '', // for the final pretty print result
                    notes_entries : [], // to turn the notes_object to entries for pretty_print to do its job
                    notes_entries_fn:notes_entries_fn,// makes the note_entries
                    pretty_do:pretty_do,
                    
                    allTags:iterableObject(), // represents serach range for the ultraObject concerning elements
                    selectTags:iterableObject(), // represents a set of chosen items
                    eCSearch:eCSearch,
                    
                    isAbelast:isAbelast,
                    isArray:isArray,
                    isObject:isObject,
                    isDOMElement:isDOMElement,
                    isPrimitive:isPrimitive,
                    isInt:isInt,
                    isNodeList:isNodeList,
                    isitO:isitO,
                    isString:isString,
                    isFunction:isFunction,
                    
                    elementFound:iterableObject(), // holds found elements needed by the ultraObject
                    forLoop:forLoop,
                    objInvloved:objInvloved,// to keep track of all items responbile for a purpose at a specific point
                    objIO:iterableObject(), // OBKECT FOR  objInvloved propertyUndefined, whend dealing stricly with object specs
                    // objIFL_0_i:{},
                    severalOr:severalOr,
                    exp: iterableObject(), // for experminatal stuff you do  not want to finalize in the ultraObject
                    packIt:packIt,
                    selectAll:selectAll,
                    
                    propertyUndefined:propertyUndefined,
                    subGroups:subGroups,
                    subGroupsO:{},
                    objectLength:objectLength,
                    iterableObject:iterableObject,
                    iterify:iterify,
                    MB_0_i:iterableObject(), // memory bank for functionality thats needs misc. in several places
                    scope:iterableObject(),// makes it very easy for functions to access items made for a project purpose, once done it must be emptied
                    //if a scope starts in a function it must end in a function
                    // to access  ultraObject.allTags[ultraObject.scope[pFFATI_0_i]]
                    args:iterableObject(), // representing the dev_obj from the project purose
                    nE:iterableObject(), // means not exactly equal ,used for adcnaced comparison moduiles like partialMatch
                
                    sort:sort,
                    swap:swap,
                    partialMatch:partialMatch,
                    interrogation:interrogation,
                    qC:iterableObject(),
                    
                    misc:iterableObject(), //holds finished products with which we cannot assign a name
                    fG:iterableObject(),
                    numberSystem:numberSystem,
                    nS:iterableObject(),
                    reqBody:reqBody,
                    random:random
            
                    
                    }
                }
                try{
                    window.ultraObject = ultraObjectReset()
                }
                catch(e){
                    global.ultraObject = ultraObjectReset()
                }
                function random(   dev_obj   ){
                    /*abelast
                        1 for misc
                    */
                    /*
                        dev_obj
                            .type
                                simple give me a random number according to dev_obj.value
                                stream used when needed to call same fn several times
                            .value
                                when dev_obj.type === 'simple' this should be a number for the range you need randomess
                            .fn when  dev_obj.type === 'stream' this should be the function that allows for random
                    */
                    
                    /*adding the dev_obj to args*/ //{
                    var random_dev_obj = ultraObject.args.add(   {value:ultraObject.iterify(   {iterify:dev_obj}   )   }   )
                    // }  /**/
                    
                    if(   dev_obj.type === 'simple'   ){
                        
                        
                        /*MISC +scope +self +abelast */ //{
                        var rdmMisc_0_i = ultraObject.scope.add({value:ultraObject.misc.add(   {value:Math.floor(Math.random() * Math.floor(   dev_obj.value   ))  }   )})
                        ultraObject.misc.abelast.add(   {value:ultraObject.scope[rdmMisc_0_i]}   )
                        // }  /**/
                       
                        
                        /*MISC -scope */ //{
                        ultraObject.scope.minus(   {index:rdmMisc_0_i}   )
                        // }  /**/
                        
                    }
                    
                    
                    if(   dev_obj.type === 'stream'   ){
                        
                        
                        /*MISC +scope +self +abelast */ //{
                        var rdmMisc_0_i = ultraObject.scope.add({value:ultraObject.misc.add(   {value:dev_obj.value  }   )})
                        ultraObject.misc.abelast.add(   {value:ultraObject.scope[rdmMisc_0_i]}   )
                        // }  /**/
                       
                        
                        /*MISC -scope */ //{
                        ultraObject.scope.minus(   {index:rdmMisc_0_i}   )
                        // }  /**/
                        
                    }
                    
                    
                }// anything random is done here
                function endpoint(   dev_obj   ){
                    /*
                        key points
                        the developer places into XHR itO what function they will use to make the request
                        you provide functionality to help make goobly gook easier like inserting all values into a function then giving it a go
                    */
                    /* ablelasts
                        1 for XHR
                    */
                    /*
                        .xhttp:the xhr functionality the developer wants to use
                            what goes here is an itO for all the items the dev needs to get the job done
                        .instruct: telling the function how to use what in XHR[index] to get the job done
                        .eventName: in case of  XMLHttpRequest i need to a function as an event handler to make use of the responseText
                        .eventHandler:in case of  XMLHttpRequest  fn for eventName
                        .protocol :  in case of  XMLHttpRequest  HTTP methods for XHR
                        .target:  string location
                        .asyncBool: unkwown use best to leave on true
                        .body: in case of  XMLHttpRequest for certain http methods this is the important data the endpoint needs, should be a string or one object
                    */
                    
                    /*adding the dev_obj to args*/ //{
                    var endpoint_dev_obj = ultraObject.args.add(   {value:ultraObject.iterify(   {iterify:dev_obj}   )   }   )
                    // }  /**/
                    
                    /*XHR +scope +self +abelast */ //{
                    var ePXHR_0_i = ultraObject.scope.add(   {value:ultraObject.XHR.add(   {value:dev_obj.xhttp}   )}   )
                    ultraObject.XHR.abelast.add(   {value:ultraObject.scope[ePXHR_0_i ]}   )
                    // }  /**/
                    
                    /*var endpoint options */ //{
                    
                        /* XMLHttpRequest*/ //{
                        if(   dev_obj.instruct === 'XMLHttpRequest'   ){
                            
                            
                            ultraObject.XHR[   ultraObject.scope[ePXHR_0_i]   ].eventName = dev_obj.eventName
                            ultraObject.XHR[   ultraObject.scope[ePXHR_0_i]   ].eventHandler = dev_obj.eventHandler
                            ultraObject.XHR[   ultraObject.scope[ePXHR_0_i]   ].errorName = dev_obj.errorName
                            ultraObject.XHR[   ultraObject.scope[ePXHR_0_i]   ].errorHandler = dev_obj.errorHandler
                            ultraObject.XHR[   ultraObject.scope[ePXHR_0_i]   ][0].addEventListener(   ultraObject.XHR[   ultraObject.scope[ePXHR_0_i]   ].eventName,ultraObject.XHR[   ultraObject.scope[ePXHR_0_i]   ].eventHandler   )
                            ultraObject.XHR[   ultraObject.scope[ePXHR_0_i]   ][0].addEventListener(   ultraObject.XHR[   ultraObject.scope[ePXHR_0_i]   ].errorName,ultraObject.XHR[   ultraObject.scope[ePXHR_0_i]   ].errorHandler   )
                            ultraObject.XHR[   ultraObject.scope[ePXHR_0_i]   ].protocol = dev_obj.protocol
                            ultraObject.XHR[   ultraObject.scope[ePXHR_0_i]   ].target = dev_obj.target
                            ultraObject.XHR[   ultraObject.scope[ePXHR_0_i]   ].asyncBool = dev_obj.asyncBool
                            ultraObject.XHR[   ultraObject.scope[ePXHR_0_i]   ].body = dev_obj.body
                            ultraObject.XHR[   ultraObject.scope[ePXHR_0_i]   ][0].open(
                                ultraObject.XHR[   ultraObject.scope[ePXHR_0_i]   ].protocol,
                                ultraObject.XHR[   ultraObject.scope[ePXHR_0_i]   ].target,
                                ultraObject.XHR[   ultraObject.scope[ePXHR_0_i]   ].asyncBool
                            )
                            ultraObject.XHR[   ultraObject.scope[ePXHR_0_i]   ][0].send(   ultraObject.XHR[   ultraObject.scope[ePXHR_0_i]   ].body   )
                            
                            
                        }
                        // }  /**/
                        
                        /* chromeExtensionOneTime*/ //{
                        if(   dev_obj.instruct === "chromeExtensionOneTime"   ){
                            
                            
                            ultraObject.XHR[   ultraObject.scope[ePXHR_0_i]   ] = ultraObject.iterableObject()
                            ultraObject.XHR[   ultraObject.scope[ePXHR_0_i]   ].incoming =   {
                                fn:dev_obj.incomingFn,
                                origin:dev_obj.incomingOrigin,
                                body:dev_obj.incomingBody
                            }
                            ultraObject.XHR[   ultraObject.scope[ePXHR_0_i]   ].sending  = {
                                fn:dev_obj.sendingFn,
                                body:dev_obj.sendingBody,
                                origin:dev_obj.sendingOrigin
                            }
                            
                            
                        }
                        // }  /**/
                        
                        
                    // }  /**/
                    
                    /*XHR -scope */ //{
                    ultraObject.scope.minus(   {index:ePXHR_0_i}   )
                    // }  /**/
                    
                }// function handling all things endpoint
                function objInvloved(   dev_obj   ){
                    /* ablelasts
                        1 for objIO
                    */
        
                        /*adding the dev_obj to args*/ //{
                        var objInvloved_dev_obj = ultraObject.args.add(   {value:ultraObject.iterify(   {iterify:dev_obj}   )   }   )
                        // }  /**/
                        
                        /*objIO +scope +self +abelast */ //{
                        var oIobjI_0_i = ultraObject.scope.add(   {value:ultraObject.objIO.add(   {value:dev_obj}   )}   )
                        ultraObject.objIO.abelast.add(   {value:ultraObject.scope[   oIobjI_0_i   ]}   )
                        // }  /**/
                        
                        
                        if(   ultraObject.isInt({type:ultraObject.objIO[   ultraObject.scope[oIobjI_0_i]   ].length}) === 'false'  ){
                            // having to fix old implementation
                            
                            throw('fix me at my invocation')
                            
                            
                        }
                        
                        
                        var objIFL_0_i={
                            forLoop_0_i: 0,
                            forLoopLength:ultraObject.objIO[   ultraObject.scope[oIobjI_0_i]   ].length,
                            fn:function(   dev_obj   ){
                                console.log(   ultraObject.objIO[   ultraObject.scope[oIobjI_0_i]   ][   objIFL_0_i.forLoop_0_i   ]   )
                            },
                            args:undefined
                        }
                        ultraObject.forLoop(   objIFL_0_i   )
                        // debugger
                        /*objIO -scope   */ //{
                        ultraObject.scope.minus(   {index:oIobjI_0_i}   )
                        // }  /**/
                        
                }
                function notes_entries_fn(   dev_obj   ){
                    ultraObject.notes_entries = Object.entries(   ultraObject.notes_object  )
                }// produces the entries for the pretty_print functionality
                function pretty_do(   dev_obj   ){
                
                    if(   dev_obj != undefined   ){
                        
                        
                        if(   dev_obj.notes_object != undefined   ){
            
            
                            ultraObject.notes_object = dev_obj.notes_object
                            
                        }
                    
                    
                    }
                    
                    
                    this.notes_entries_fn()
            
            
                    for(   var i= 0; i != this.notes_entries.length; i++   ){
                    
                    
                        if(   this.notes_entries[i][0].length > this.max   ){
                            this.max = this.notes_entries[i][0].length
                        }
                        
                    }
                    
                    for(   var i= 0; i != this.notes_entries.length; i++   ){
                        this.notes_collection += "\n" + this.notes_entries[i][0] + Array(   this.max  - this.notes_entries[i][0].length + this.seperator ).join(" ") + this.s_key
                        
                        
                            if(   typeof(   this.notes_entries[i][1]   ) == 'object'   ){
                    
                    
                                this.notes_collection += JSON.stringify(   this.notes_entries[i][1],null,2   )
                    
                    
                            }
                            
                            
                            else{
                    
                    
                                this.notes_collection += this.notes_entries[i][1]
                    
                    
                            }
                            
                            
                    }
                    return this.notes_collection
                }
                function isArray(   dev_obj   ){ // should combine all type query or keep seperate??
                    //.type the item in question
                    
                                                  
                        if(   Array.isArray(dev_obj.type) && typeof(   dev_obj.type   ) === 'object'   ){
                             //an array
                             
                            return true
                            
                            
                        }
                        
                         
                    return false
                } // is item an object will be upgraded to test for more objects, you can use instance of but its not available everywher
                function isObject(   dev_obj   ){ // should combine all type query or keep seperate??
                    //.type the item in question
                    
                         
                        if(   !Array.isArray(dev_obj.type) && typeof(   dev_obj.type   ) === 'object' && dev_obj.type.isitO === undefined   ){
                             //an array
                             
                            return true
                            
                            
                        }
                        

                    return false
                }
                function isDOMElement(   dev_obj   ){ //checks if item is HTML or XML tag
                    //.type the item in question

                        if(   !ultraObject.isPrimitive({type:dev_obj.type})   ){
                        
                        
                            if(   dev_obj.type.ownerDocument !== undefined   ){
                                
                                
                                if(   ultraObject.isObject({type:dev_obj.type})    ){
                                    
                                    
                                    return true
                                    
                                    
                                }
                                
                                
                            }
                        
                        
                        }
                        
                        
                    return false
                }
                function isDOMCollection(   dev_obj   ){
                    //.type the item in question
                    // possible choices are HTMLCollection and more how would I go about this obviously I should make this sepearte but how
                }
                function isPrimitive(   dev_obj   ){
                

                        if(   dev_obj.type !== Object(   dev_obj.type   )   ){
                            
                            
                            return true
                            
                            
                        }
                        
                        
                    return false
                }
                function isInt(   dev_obj   ){

                        //hope IIFE are in ES5
                        
                    if(   Number.isInteger(dev_obj.type) || (function() {
                      return typeof dev_obj.type === 'number' &&
                        isFinite(dev_obj.type) &&
                        Math.floor(dev_obj.type) === dev_obj.type;
                    })()   ){
                        
                        
                        return 'true'
                        
                        
                    }
                    
                    
                    else{
                        
                        return 'false'
                        
                    }
                    

                }
                function isNodeList(   dev_obj   ){
                
                
                    if(   (   dev_obj.type.toString() || dev_obj.type.toLocaleString() || 'str'   ) === '[object NodeList]'   ){
                        // if a polyfill is needed use severalOr to get a string
                        
                        return true
                        
                        
                    }
                    
                    
                    else if(   (   dev_obj.type.toString() || dev_obj.type.toLocaleString() || 'str'   ) !== '[object NodeList]'   ){
                        
                        
                        return false
                        
                        
                    }
                        

                }
                function isitO(   dev_obj   ){
                    
                            
                        if(   dev_obj.type !== undefined   ){
                            
                            
                            if(   dev_obj.type.isitO !== undefined && dev_obj.type.isitO() === 'true'   ){
                                
                                
                                return true
                                
                                
                            }
                        
                        
                        }
                        
                        
                    return false
                }
                function isAbelast(   dev_obj   ){
                        
                        
                        if(   dev_obj.type !== undefined   ){
                            
                            
                            if(   dev_obj.type.isAbelast !== undefined && dev_obj.type.isAbelast() === 'true'   ){
                                
                                
                                return true
                                
                                
                            }
                        
                        
                        }
                        

                    return false
                }
                function isString(   dev_obj   ){
                    //should check for string object and string primitive
                    //. type item in questions
                        
                         
                    if(   typeof dev_obj.type === 'string'   ){
                        
                        
                        return true
                        
                        
                    }
                        
                        
                    return false
                        
                }
                function isFunction(   dev_obj   ){
                    //should check for string object and string primitive
                    //. type item in questions
                      
                    if(   typeof dev_obj.type === 'function'   ){
                        
                        
                        return true
                        
                        
                    }


                    return false
                }
                function eCSearch(   dev_obj   ){
                    /*
                        key points
                        we are gathering information from a nS about what element to look at
                        if it does not exist in its related itO according to list, we add it to the nS or the selectTags if its missing
                        if its there we properly update nS and selectTags at that index
                    */
                    /*
                        abelasts
                        1 for select tags
                        1 for nS
                    
                    */
                    
                    // .list, desired items
                    // .look spot where to look and assert for list, if an object the items should be keys
                    // .same  indicator to look at the same set of values
                    // .order iterableObject on how to create the numbersystem
                    // .sT if in use the index to access selectTags from the self
                    // .nS if in use the index to access numberSystem from the self
                    // make eCSST an iterableObject
                    // look through innerHTML, innerText, textContext
                    // holds the found elements that meet the query in ultraObject.elementFound
                    
                    
                    /*[addding the dev_obj  to ultraObject.args ]*/ //{
                    var eCSearch_dev_obj = ultraObject.args.add(   {value:ultraObject.iterify(   {iterify:dev_obj}   )   }   )
                    // }  /**/
                    
                    if(   dev_obj.sT === undefined   ){
                        
                        
                        /*[the object handling everything with the choosing tags in addition the numberSystem ]*/ //{
                        // make this selectTags +scope +abelast +self
                        var eCSSelectTags_0_i = ultraObject.scope.add(   {value:ultraObject.selectTags.add(   {value:ultraObject.iterableObject()}   )}   )
                        ultraObject.selectTags.abelast.add(   {value:ultraObject.scope[eCSSelectTags_0_i]}   )
                        // }  /**/
                        
                        
                    }
                    
                    /*[if the developer already had the function make the selectTags]*/ //{
                    //make this selectTags +scope
                    else if(    ultraObject.isInt(   {type:dev_obj.sT}   )   ){
                        
                        
                        var eCSSelectTags_0_i = ultraObject.scope.add(   {value:dev_obj.sT}   )
                        
                        
                    }
                    // }  /**/
                    
                    /* if we had the number system now we can turn this to a loop and start adding data to our database*/ //{
                    if(    ultraObject.isInt(   {type:dev_obj.nS}   ) === 'true'   ){
                        
                        
                        var eCSNS_0_i = ultraObject.scope.add(   {value:dev_obj.nS}   )
                        ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]].createdNS = 'true'
                        
                        
                        
                    }
                    // }  /**/
                    
                        
                    console.group(   'items needed to search for elements based on keywords'   )
                    ultraObject.objInvloved(ultraObject.iterify({
                            iterify:[
                                // ultraObject.allTags[ultraObject.scope[dev_obj.aT]],
                                ultraObject.misc[ultraObject.scope[dev_obj.list]],
                                ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]]
                            ]
                        })
                    )
                    
                    
                    /*objIO -self -ablelast   */ //{
                    ultraObject.objIO.minus(   {index:ultraObject.objIO.abelast.length-1}   )
                    ultraObject.objIO.abelast.minus(   {index:ultraObject.objIO.abelast.length-1}   )
                    // }  /**/
                    
                    console.groupEnd()
                    
                    /* look at each requirement preFillForm must fill in the document by the end user*/ //{
                    var eCSearchFL_0_i = {
                        forLoop_0_i:0,
                        forLoopLength: ultraObject.misc[ultraObject.scope[dev_obj.list]].length,
                        fn:function(   dev_obj   ){
                            
                            /*it should start with the first element if none is given*/ //{
                            if(   dev_obj.nS === undefined   ){
                                
                                
                                ultraObject.selectTags[   ultraObject.scope[eCSSelectTags_0_i]   ].indexSelect = 0
                                
                                
                            }
                            
                            
                            else if(   dev_obj.nS !== undefined   ){
                                
                                
                                ultraObject.selectTags[   ultraObject.scope[eCSSelectTags_0_i]   ].indexSelect = ultraObject.nS[   ultraObject.scope[eCSNS_0_i]   ][   eCSearchFL_0_i.forLoop_0_i   ][0]
                                
                                
                                
                            }
                            // }  /**/
                            
                            /*at this point you need to us the nS to modify indexSelect*/ //{
                            // use propertyUndefined to see if the nS is there then receive external output of an updated nS
                            //  to properly modify indexSelect so elements are not queired again
                            eCSearchFL_1_i.forLoop_0_i = ultraObject.selectTags[   ultraObject.scope[eCSSelectTags_0_i]   ].indexSelect
                            // }  /**/
                            
                            /* where every tag is looked at in relation to the respective list*/ //{
                            return ultraObject.forLoop(   eCSearchFL_1_i   )
                            // }  /**/
                        },
                        args:dev_obj,
                    }
                    // }  /**/
                    
                    /* where every tag is looked at in relation to the respective list*/ //{
                    var eCSearchFL_1_i = {
                        forLoop_0_i:ultraObject.selectTags[   ultraObject.scope[eCSSelectTags_0_i]   ].indexSelect,
                        forLoopLength:ultraObject.allTags[ultraObject.scope[dev_obj.aT]].length,
                        fn:function(   dev_obj   ){
                            
                            /* if were looking at the same element*/ //{
                            if(   eCSearchFL_0_i.forLoop_0_i > 0 && ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]][eCSearchFL_0_i.forLoop_0_i-1 ].eCSIndex === eCSearchFL_1_i.forLoop_0_i    ){
                                                                
                                
                                //if PROBLEM use propertyUndefined to validate the selectedTag for interragtion is there as well as its eCSIndex
                                
                                    ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]].sameElement = 'true'
                                
                                
                            }
                            
                            
                            else if(   eCSearchFL_0_i.forLoop_0_i > 0 && ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]][eCSearchFL_0_i.forLoop_0_i-1 ].eCSIndex !== eCSearchFL_1_i.forLoop_0_i    ){
                                                                
                                
                                //if PROBLEM use propertyUndefined to validate the selectedTag for interragtion is there as well as its eCSIndex
                                
                                    ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]].sameElement = 'false'
                                
                                
                            }
                            // }  /**/
                            
                            /* possible places to look to fill in the element to satisfy end users query*/ //{
                            // PROBLEM if you have scoping problems with this fn look here
                            return ultraObject.forLoop(   eCSearchFL_2_i   )
                            // }  /**/
                        },
                        args:dev_obj,
                    }
                    // }  /**/
                    /* possible places to look to fill in the element to satisfy end users query*/ //{
                    // PROBLEM if you have scoping problems with this fn look here
                    var eCSearchFL_2_i = {
                        forLoop_0_i:0,
                        forLoopLength:ultraObject.misc[ultraObject.scope[dev_obj.look]].length,
                        fn:function(   dev_obj   ){
                            
                            
                            if(   ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]].sameElement ==='true'   ){
                                
                                /* it better be in the scope */ //{
                                // im really counting on this to be in the proper spot in the scope if not i have to take it from the scope everytime and get it from the abelast
                                var eCSNS_0_i = ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]].nS
                                // }
                                
                                if(   ultraObject.nS[   ultraObject.scope[eCSNS_0_i]   ][   eCSearchFL_0_i.forLoop_0_i   ] === undefined   ){
                                        
                                    /*creating the digits and metadata for the numberSystem*/ //{
                                    ultraObject.numberSystem({
                                        operation:'create',
                                        nS:ultraObject.scope[   eCSNS_0_i   ],
                                        nSM:ultraObject.iterify({
                                                iterify:[
                                                    ultraObject.iterify({
                                                        iterify:[
                                                            eCSearchFL_0_i.forLoop_0_i,
                                                            eCSearchFL_0_i.forLoop_0_i
                                                        ]
                                                    })
                                                ]
                                            }),
                                        digits:ultraObject.iterify({
                                                iterify:[
                                                    ultraObject.iterify({
                                                        iterify:[
                                                            eCSearchFL_0_i.forLoop_0_i,[
                                                                eCSearchFL_1_i.forLoop_0_i,
                                                                eCSearchFL_1_i.forLoop_0_i,
                                                                eCSearchFL_1_i.forLoopLength+1]
                                                            ]
                                                    })
                                                ]
                                            })
                                        })
                                    // }  /**/
                                                                                        
                                }
                                

                                
                                if(   ultraObject.selectTags[   ultraObject.scope[eCSSelectTags_0_i]   ][   eCSearchFL_0_i.forLoop_0_i    ] === undefined   ){
                                    
                                    /*creating the ideal select tag for this function*/ //{
                                    ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]   ].add({
                                        value:ultraObject.iterableObject()
                                    })
                                    // }  /**/
                                    
                                }
                                
                                /*adjusting this digits itO to that of the numberSystem */ //{
                                ultraObject.nS[   ultraObject.scope[eCSNS_0_i]   ][   ultraObject.nS[   ultraObject.scope[eCSNS_0_i]   ].nSM[   eCSearchFL_0_i.forLoop_0_i   ][0]   ][0] = eCSearchFL_1_i.forLoop_0_i
                                //helps change the number when the match is found so the NS doesnt take over
                                //if problems look here idk if it supposed to follow the nSM or not
                                ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]][   eCSearchFL_0_i.forLoop_0_i   ].item = ultraObject.allTags[ultraObject.scope[dev_obj.aT]][   eCSearchFL_1_i.forLoop_0_i   ]
                                ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]][   eCSearchFL_0_i.forLoop_0_i   ].query = ultraObject.allTags[ultraObject.scope[dev_obj.aT]][   eCSearchFL_1_i.forLoop_0_i   ][ultraObject.misc[ultraObject.scope[dev_obj.look]][eCSearchFL_2_i.forLoop_0_i][0]]
                                ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]][eCSearchFL_0_i.forLoop_0_i].xMark = ultraObject.misc[ultraObject.scope[dev_obj.look]][eCSearchFL_2_i.forLoop_0_i][0]
                                ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]][eCSearchFL_0_i.forLoop_0_i].keyword = ultraObject.misc[ultraObject.scope[dev_obj.list]][eCSearchFL_0_i.forLoop_0_i][0]
                                ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]][eCSearchFL_0_i.forLoop_0_i].valuePhrase = ultraObject.misc[ultraObject.scope[dev_obj.list]][eCSearchFL_0_i.forLoop_0_i][1]
                                ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]][eCSearchFL_0_i.forLoop_0_i].eCSIndex = eCSearchFL_1_i.forLoop_0_i
                                // }  /**/
                                
                                
                                return 'premature'
                                    
                                    
                            }
                            
                            
                            else if(   ultraObject.allTags[   ultraObject.scope[dev_obj.aT]   ][eCSearchFL_1_i.forLoop_0_i][   ultraObject.misc[ultraObject.scope[dev_obj.look]   ][eCSearchFL_2_i.forLoop_0_i][0]   ] !== undefined  || dev_obj.all  === 'true'   ){
                            
                                    
                                if(   ultraObject.allTags[   ultraObject.scope[dev_obj.aT]   ][eCSearchFL_1_i.forLoop_0_i][   ultraObject.misc[ultraObject.scope[dev_obj.look]   ][eCSearchFL_2_i.forLoop_0_i][0]   ].indexOf(   ultraObject.misc[   ultraObject.scope[dev_obj.list]   ][eCSearchFL_0_i.forLoop_0_i][0]   ) !== -1 || dev_obj.all  === 'true'  ){
                                    
                                    /*numberSystem access or creation*/ //{
                                    if(   ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]].createdNS !== 'true'   ){
                                        

                                        ultraObject.numberSystem({
                                            operation:'create',
                                            digits:ultraObject.iterify({
                                                    iterify:[
                                                        ultraObject.iterify({
                                                            iterify:[
                                                                eCSearchFL_0_i.forLoop_0_i,[
                                                                eCSearchFL_1_i.forLoop_0_i,
                                                                eCSearchFL_1_i.forLoop_0_i,
                                                                eCSearchFL_1_i.forLoopLength+1]
                                                            ]
                                                        })
                                                    ]
                                            }),
                                            nSM:ultraObject.iterify({
                                                    iterify:[
                                                        ultraObject.iterify({
                                                            iterify:[
                                                                eCSearchFL_0_i.forLoop_0_i,
                                                                eCSearchFL_0_i.forLoop_0_i
                                                            ]
                                                        })
                                                    ]
                                            })
                                        })
                                        var eCSNS_0_i = ultraObject.scope.add(   {value:ultraObject.nS.abelast[ultraObject.nS.abelast.length-1]}   )
                                        ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]].nS =  eCSNS_0_i
                                        // i do this because i need a closure so that all algorithms in the loop can access it
                                        ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]].createdNS = 'true'
                                        
                                        
                                    }
                                    
                                    
                                    else if(   ultraObject.isInt({type:dev_obj.nS}) === 'true'   ){
                                        
                                        
                                        var eCSNS_0_i = ultraObject.scope.add(   {value:dev_obj.nS}   )
                                        ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]].nS = eCSNS_0_i
                                                                                            
                                        
                                    }
                                    
                                    
                                    else if(   ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]].createdNS === 'true'){
                                        
                                        
                                        var eCSNS_0_i = ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]].nS
                                        
                                        
                                    }
                                    // }  /**/
                                    
                                    if(   ultraObject.nS[   ultraObject.scope[eCSNS_0_i]   ][   eCSearchFL_0_i.forLoop_0_i   ] === undefined   ){
                                        
                                        /*creating the digits and metadata for the numberSystem*/ //{
                                        ultraObject.numberSystem({
                                        operation:'create',
                                        nS:ultraObject.scope[   eCSNS_0_i   ],
                                        nSM:ultraObject.iterify({
                                                iterify:[
                                                    ultraObject.iterify({
                                                        iterify:[
                                                            eCSearchFL_0_i.forLoop_0_i,
                                                            eCSearchFL_0_i.forLoop_0_i
                                                        ]
                                                    })
                                                ]
                                            }),
                                        digits:ultraObject.iterify({
                                                iterify:[
                                                    ultraObject.iterify({
                                                        iterify:[
                                                            eCSearchFL_0_i.forLoop_0_i,[
                                                                eCSearchFL_1_i.forLoop_0_i,
                                                                eCSearchFL_1_i.forLoop_0_i,
                                                                eCSearchFL_1_i.forLoopLength+1]
                                                            ]
                                                    })
                                                ]
                                            })
                                        })
                                        // }  /**/
                                                                                            
                                    }
                                
                                
                                    if(   ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]   ][   eCSearchFL_0_i.forLoop_0_i    ] === undefined   ){
                                    
                                        /*creating the ideal select tag for this function*/ //{
                                        ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]   ].add({
                                            value:ultraObject.iterableObject()
                                        })
                                        // }  /**/
                                        
                                    }
                                    
                                    /*adjusting this digits itO to that of the numberSystem */ //{
                                    ultraObject.nS[   ultraObject.scope[eCSNS_0_i]   ][   ultraObject.nS[   ultraObject.scope[eCSNS_0_i]   ].nSM[   eCSearchFL_0_i.forLoop_0_i   ][0]   ][0] = eCSearchFL_1_i.forLoop_0_i
                                    //helps change the number when the match is found so the NS doesnt take over
                                    //if problems look here idk if it supposed to follow the nSM or not
                                    ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]][   eCSearchFL_0_i.forLoop_0_i   ].item = ultraObject.allTags[ultraObject.scope[dev_obj.aT]][   eCSearchFL_1_i.forLoop_0_i   ]
                                    ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]][   eCSearchFL_0_i.forLoop_0_i   ].query = ultraObject.allTags[ultraObject.scope[dev_obj.aT]][   eCSearchFL_1_i.forLoop_0_i   ][ultraObject.misc[ultraObject.scope[dev_obj.look]][eCSearchFL_2_i.forLoop_0_i][0]]
                                    ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]][eCSearchFL_0_i.forLoop_0_i].xMark = ultraObject.misc[ultraObject.scope[dev_obj.look]][eCSearchFL_2_i.forLoop_0_i][0]
                                    ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]][eCSearchFL_0_i.forLoop_0_i].keyword = ultraObject.misc[ultraObject.scope[dev_obj.list]][eCSearchFL_0_i.forLoop_0_i][0]
                                    ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]][eCSearchFL_0_i.forLoop_0_i].valuePhrase = ultraObject.misc[ultraObject.scope[dev_obj.list]][eCSearchFL_0_i.forLoop_0_i][1]
                                    ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]][eCSearchFL_0_i.forLoop_0_i].eCSIndex = eCSearchFL_1_i.forLoop_0_i
                                    // }  /**/
                                    return 'premature'
                                                                                    
                                }
                             
                                
                            }
                            
                            
                        },
                        args:dev_obj,
                        bubble:'true'
                    }
                    // }  /**/
                    ultraObject.forLoop(   eCSearchFL_0_i   )
                    delete ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]].sameElement
                    // }  /**/

                    /*nS -scope   */ //{
                    ultraObject.scope.minus(   {index:ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]].nS}   )
                    // }  /**/
                    
                    /*selectTags -scope   */ //{
                    ultraObject.scope.minus(   {index:eCSSelectTags_0_i}   )
                    // }  /**/
                    
                    /*nS   */ //{
                    // this is a good example when an itO was never accessed by an outer function
                    // here you never need to take it out the scope it was never in the scope
                    // var eCSNS_0_i = ultraObject.selectTags[ultraObject.scope[eCSSelectTags_0_i]].nS
                    // ultraObject.scope.minus(   {index:eCSNS_0_i}   )
                    // }  /**/
                    
                    // find the first that matches the condition, and hold it when all four match exit, if the form doesn't like what I did each value must try everything in the allTapgs itO before telling the end user they cant figure out whats going on.grabs three and swaps one
                    
                    // so like
                    /*
                    +---+---+---+---+
                    | 0 | 1 | 2 | 3 |
                    +---+---+---+---+
                    | 0 | 1 | 2 | 3 |
                    +---+---+---+---+
                    | 0 | 1 | 2 | 3 |
                    +---+---+---+---+
                    | 0 | 1 | 2 | 3 |
                    +---+---+---+---+
                    
                    [0,0,0,0] -> [0,0,0,3] -> [0,0,1,0] -> [0,0,1,3] -> [0,0,3,3] -> [0,3,3,3]  [1,0,0,0] -> [1,0,0,3] -> [1,3,3,3] -> [3,3,3,3]
                    
                    to cover every posibility in the table
                    
                    for this we need to make a number system that allows to cover every item
                    */
                }// seaches for elements with the queried filters and does things to them
                function forLoop(   dev_obj   ){
                    /*
                        important
                        when your forLoop_0_i !== 0, at the end of this function, its made to be equal 0, keep this in mind ok
                    */
                    //.forLoop_0_i the iteration
                    //.forLoopLength the length to iterate to
                    //.fn what to do
                    // .args, since they are out scroped this is a way to access the args
                    // .bubble 'true' or 'false' indicating whether to send the break back up nested
                    // forLoopBreak
                        //true
                        // premature does the same thing true breaks it early
                        // continue, like a python continue statement, stops in the fn body and starts with the loop index changed
                    
                    var forLoopBreak = false
                    
                
                        if(   dev_obj.custom !== 'true'   ){
                            
                            
                            for(   dev_obj.forLoop_0_i; dev_obj.forLoop_0_i !== dev_obj.forLoopLength; dev_obj.forLoop_0_i++   ){
                                // console.log(   dev_obj.forLoop_0_i   )
                                forLoopBreak = dev_obj.fn(   dev_obj.args   )// find a better way to do this
                                
                                                
                                if(   forLoopBreak === 'true' || forLoopBreak === 'premature'  ){
                                    // premature  provided when you dont want to bubble up the value just break
                                    
                                    if(   dev_obj.bubble === 'true'   ){
                                        
                                        
                                        return forLoopBreak
                                        
                                        
                                    }
                                    break;
                                    
        
                                }
                                
                                
                                else if(   forLoopBreak === 'continue'  ){
                                    
                                }
                                
                                
                            }
                            dev_obj.forLoop_0_i = 0
                            
                            
                        }
                
                        
                        else if(   dev_obj.custom === 'true'   ){
                            
                            
                            for(   dev_obj.forLoop_0_i; dev_obj.forLoopLength_fn(); dev_obj.forLoop_0_i_fn()   ){ // change this to be a fuctiont that allow the dev to do anything here
                                // console.log(   dev_obj.forLoop_0_i   )
                                forLoopBreak = dev_obj.fn(   dev_obj.args   )// find a better way to do this
                                
                                                
                                if(   forLoopBreak === 'true' || forLoopBreak === 'premature'  ){
                                    // premature  provided when you dont want to bubble up the value just break
                                    
                                    if(   dev_obj.bubble === 'true'   ){
                                        
                                        
                                        return forLoopBreak
                                        
                                        
                                    }
                                    break;
                                    
                                    
                                }
                                
                                
                                else if(   forLoopBreak === 'continue'  ){
                                    
                                }
                                
                                
                            }
                            
                            
                        }
                        
                    
                }
                function severalOr(   dev_obj   ){
                    //.compAgn the several items to find a true value
                    //.spot I should have returned an object but hopefully you get your value back else make function that returns an object
                    // severalOrReturn value item
                        //.spot where the function returned true
                    //.how how tomake the comparison so the default is a  === its a function
                        // indexOf dev_obj.compAgn[index].indexOF(dev_obj.compTo)
                        // . reuslt if dev_obj.how is a function, result is optional for what ever makes it true
                    // .premature ,  bool if the loop should break early
                
                    
                        
                        
                    if(   dev_obj.compAgn.length === undefined   ){
                        
                        
                        dev_obj.compAgn.length = Object.keys(   dev_obj.compAgn   ).length
                        
                        
                    }
                    
                    
                    var severalOrFnAnswer // if dev_obj.how is a function this holds the return value
                    var severalOrReturn = dev_obj.boolean
                    var severalOrFL_O_i  = {
                        forLoop_0_i:0,
                        forLoopLength:dev_obj.compAgn.length,//compare Against
                        fn:function(   dev_obj   ){
                            
                                                
                                if(   dev_obj.how === undefined   ){
                                                                        
                                    
                                    if(   dev_obj.compTo === dev_obj.compAgn[severalOrFL_O_i.forLoop_0_i]   ){
                                        
                                        
                                        dev_obj.boolean[dev_obj.which] = true // if you have problems remember this wants a object
                                        severalOrReturn = dev_obj.boolean // just in case  ultraObject can't re-reference the object back
                                        severalOrReturn.spot = severalOrFL_O_i.forLoop_0_i
                                        return 'true'
                                        
                                        
                                    }
                                    
                                    
                                }
                                
                                
                                else if(   typeof(   dev_obj.how   ) === 'function'   ){
                                        
                                        
                                        severalOrFnAnswer = dev_obj.how({
                                            compAgnI:dev_obj.compAgn[severalOrFL_O_i.forLoop_0_i],
                                            compTo:dev_obj.compTo,
                                            index:severalOrFL_O_i.forLoop_0_i
                                        })
                                        
                                        
                                        if(   severalOrFnAnswer === dev_obj.result   ){
                                            
                                            
                                            dev_obj.boolean[dev_obj.which] = true // if you have problems remember this wants a object
                                            severalOrReturn = dev_obj.boolean // just in case  ultraObject can't re-reference the object back
                                            severalOrReturn.spot = severalOrFL_O_i.forLoop_0_i
                                            return 'true'
                                            
                                            
                                        }
                                        
                                        
                                        else if(   severalOrFnAnswer === 'premature'   ){
                                            
                                                                            
                                            return 'premature'
                                            
                                            
                                        }
                                
                                        
                                    }
                                    
                                
                            },
                        args:{
                                compTo: dev_obj.compTo,
                                compAgn:dev_obj.compAgn,
                                boolean:dev_obj.boolean,
                                which:dev_obj.which,
                                how:dev_obj.how,
                                result:dev_obj.result
                            }
                    }
                    ultraObject.forLoop(   severalOrFL_O_i   )
                    return severalOrReturn
                    
                    
                    
                }// if you have several OR comparisons for the same object use it here
                function objectLength(   dev_obj   ){ // finds object lenghts
                        //.val the object itself
                        // .getLen function descrbing how to get the length
                        // .result if function reutrns it equal increase the length by one
                        dev_obj.val.length = 0
                        var objectLengthFL_0_i = {
                            forLoop_0_i:0,
                            forLoopLength:Object.keys(   dev_obj.val   ).length,
                            fn:function(   dev_obj   ){
                                
                                 
                                if(   dev_obj.getLen(   {val:dev_obj.val,   index:objectLengthFL_0_i.forLoop_0_i}   ) === dev_obj.result    ){
                                                        
                                    
                                    dev_obj.val.length += 1
                                    
                                    
                                }
                                
                                
                            },
                            args:{
                                val:dev_obj.val,
                                getLen:dev_obj.getLen,
                                result:dev_obj.result
                                }
                        }
                        ultraObject.forLoop(   objectLengthFL_0_i   )
                    
                }
                function propertyUndefined(   dev_obj   ){
                    /* ablelasts
                        1 for objIo
                    */
                    /*
                        expected - an itO listing of the property path to the target property
                        target - the target object
                        stack - if  'true' prints out path stack to help with debugging
                    */
                    
                    /*adding the dev_obj to args*/ //{
                    var propertyUndefined_dev_obj = ultraObject.args.add(   {value:ultraObject.iterify(   {iterify:dev_obj}   )   }   )
                    // }  /**/
                    
                    /*objIO +scope +self +abelast */ //{
                    var pUobjI_0_i = ultraObject.scope.add(   {value:ultraObject.objIO.add(   {value:ultraObject.iterableObject()}   )}   )
                    ultraObject.objIO.abelast.add(   {value:ultraObject.scope[pUobjI_0_i]}   )
                    // }  /**/
                    
                    /*setting up the itO */ //{
                    ultraObject.objIO[   ultraObject.scope[pUobjI_0_i]   ].expected = dev_obj.expected
                    ultraObject.objIO[   ultraObject.scope[pUobjI_0_i]   ].target = dev_obj.target
                    // }  /**/
                    
                    /*getting to the target property */ //{
                    // the target property is inferred to be the last string in dev_obj.expected
                    // two ways of doing it
                        //use function and recurse to the last index and return the propertyies off the result as you index from the beginning
                        //hold the subproperties in indexes in the itO (memory heavy)
                    
                        /* node mode choice thread subpropertyHold not anymore if you want to see the path stack */ //{
                        if(   dev_obj.stack === 'true'   ){
                        
                        
                            var pUFL_0_i = {
                            forLoop_0_i:0,
                            forLoopLength:ultraObject.objIO[   ultraObject.scope[pUobjI_0_i]   ].expected.length,
                            fn:function(   dev_obj   ){
                                
                                if(   pUFL_0_i.forLoop_0_i === 0   ){
                                    
                                    
                                    ultraObject.objIO[   ultraObject.scope[pUobjI_0_i]   ].add(   {value:ultraObject.objIO[   ultraObject.scope[pUobjI_0_i]   ].target[   ultraObject.objIO[   ultraObject.scope[pUobjI_0_i]   ].expected[   pUFL_0_i.forLoop_0_i   ]   ]}   )
                                    
                                    
                                }
                                
                                
                                else if(   pUFL_0_i.forLoop_0_i !== 0   ){
                                    
                                    
                                    ultraObject.objIO[   ultraObject.scope[pUobjI_0_i]   ].add(   {value:ultraObject.objIO[   ultraObject.scope[pUobjI_0_i]   ][   pUFL_0_i.forLoop_0_i -1   ][   ultraObject.objIO[   ultraObject.scope[pUobjI_0_i]   ].expected[   pUFL_0_i.forLoop_0_i   ]   ]}   )
                                    
                                    
                                }
                                
                                
                            },
                            args:{} //{}
                        }
                            ultraObject.forLoop(   pUFL_0_i    )
                            
                            
                        }
                        // }  /**/
                        
                        /* node mode choice thread subpropertyRecursion */ //{
                        // at .result we can try to pull out the result but object comparison is a tough cookie what does es5 have to say about it
                        ultraObject.objIO.access = function(   dev_obj   ){
                                
                                
                            if(   dev_obj.result_0_i === 1 ){
                                
                                
                                return ultraObject.objIO[   ultraObject.scope[pUobjI_0_i]   ].target[   ultraObject.objIO[   ultraObject.scope[pUobjI_0_i]   ].expected[   dev_obj.result_0_i - 1   ]   ]  === undefined ? dev_obj.noVal : ultraObject.objIO[   ultraObject.scope[pUobjI_0_i]   ].target[   ultraObject.objIO[   ultraObject.scope[pUobjI_0_i]   ].expected[   dev_obj.result_0_i - 1   ]   ]
             
             
                            }
                            
                            
                            else if(   dev_obj.result_0_i !== 1  ){
                                
                                                              
                                dev_obj.result_0_i -= 1
                                return ultraObject.objIO.access({
                                    result_0_i:dev_obj.result_0_i,
                                    noVal:dev_obj.noVal
                                })[   ultraObject.objIO[   ultraObject.scope[pUobjI_0_i]   ].expected[   dev_obj.result_0_i   ]   ] === undefined ? dev_obj.noVal : ultraObject.objIO.access({
                                    result_0_i:dev_obj.result_0_i,
                                    noVal:dev_obj.noVal
                                })[   ultraObject.objIO[   ultraObject.scope[pUobjI_0_i]   ].expected[   dev_obj.result_0_i   ]   ]

            
                            }
                                
                                
                        }
                        ultraObject.objIO[   ultraObject.scope[pUobjI_0_i]   ].result = ultraObject.objIO.access({
                            result_0_i:ultraObject.objIO[   ultraObject.scope[pUobjI_0_i]   ].expected.length,
                            noVal:dev_obj.noVal
                        })
                        // }  /**/
                        
                    // }  /**/
                    
                    /*objIO -scope  */ //{
                    ultraObject.scope.minus(   {index:pUobjI_0_i}   )
                    // }  /**/
                    
                    
                }// in js when a function finds a property undefined when the developer expects something to be there along the bubble to the target inner property it can break the API, instead of write repeated if statements use this function to validate if the target property is availble in the data type

                function iterableObject(   dev_obj   ){
                    /*
                        key points
                        when you add with index & value NEVER minus with index, ALWAYS minus with index & dev_obj.messy = 'true'
                    */
                    // .stop for the abelast
                    
                     var iterableObjectO = {
                        length:0,
                        
                        add:function(   dev_obj   ){// returns the index that it was added to an object
                                
                                
                                if(   dev_obj.index !== undefined   ){
                                    
                                    
                                    if(   Object.keys(iterableObjectO).indexOf(dev_obj.index.toString()) === -1   ){
                                    //hopefully this is es5
                                    
                                        iterableObjectO.length += 1
                                    
                                    
                                    }
                                    
                                    
                                    iterableObjectO[dev_obj.index] = dev_obj.value
                                    return dev_obj.index
                                    
                                    
                                }
                                
                                
                                else if(   dev_obj.index === undefined   ){
                                    
                                    
                                    iterableObjectO[iterableObjectO.length] = dev_obj.value
                                    iterableObjectO.length += 1
                                    return iterableObjectO.length -1
                                    
                                    
                                }
                                
                            },// adds a value and retuns its place in the array
                        minus:function(   dev_obj   ){
                            //.value value to remove
                            //.index remove and index
                            if(   dev_obj.index !== undefined   ){
                                
                                
                                delete iterableObjectO[dev_obj.index]
                                iterableObjectO.resetLength()// resets the length
                                
                                
                                if(   dev_obj.messy !== 'true'   ){
                                    
                                    
                                    var iterableObjectFL_0_i = {
                                        forLoop_0_i:0,
                                        forLoopLength:iterableObjectO.length,
                                        fn:function(   dev_obj   ){
                                            
                                            /*fixing the array part of the itO*/ //{
                                            if(   dev_obj.index <= iterableObjectFL_0_i.forLoop_0_i && iterableObjectFL_0_i.forLoop_0_i !== iterableObjectO.length   ){ // at that point something must be missing
                                                
                                                
                                                iterableObjectO[iterableObjectFL_0_i.forLoop_0_i] =  iterableObjectO[iterableObjectFL_0_i.forLoop_0_i+1]
                                                delete iterableObjectO[iterableObjectFL_0_i.forLoop_0_i+1]//problems look here usually wants a variable or primitive to properly delete
                                                
                                                
                                            }
                                            // } /**/
                                            
                                        },
                                        args:{
                                            index:dev_obj.index
                                            }
                                    }
                                    ultraObject.forLoop(   iterableObjectFL_0_i   ) // realigns the iterable so the index are consecutive again
                                
                                
                                }
                                
                                
                            }
                            
                            
                            if(   dev_obj.value !== undefined   ){
                                
                                
                                var iterableObjectO_BOOL = {0:false}
                                iterableObjectO_BOOL = ultraObject.severalOr({
                                            compTo: dev_obj.value,
                                            compAgn: iterableObjectO,
                                            boolean:iterableObjectO_BOOL,
                                            which:0
                                })
                                
                                
                                if(   iterableObjectO_BOOL[0]   ){
                                    
                                    
                                    var iterableObjectTDI = iterableObjectO_BOOL.spot // index to remove
                                    delete iterableObjectO[iterableObjectTDI]
                                    iterableObjectO.resetLength()
                                    var iterableObjectFL_1_i = {
                                        forLoop_0_i:0,
                                        forLoopLength:iterableObjectO.length,
                                        fn:function(   dev_obj   ){
                                            
                                            
                                            if(   iterableObjectTDI <= iterableObjectFL_1_i.forLoop_0_i && iterableObjectFL_1_i.forLoop_0_i !== iterableObjectO.length  ){ // at that point something must be missing
                                                
                                                
                                                iterableObjectO[iterableObjectFL_1_i.forLoop_0_i] =  iterableObjectO[iterableObjectFL_1_i.forLoop_0_i+1]
                                                delete iterableObjectO[iterableObjectFL_1_i.forLoop_0_i+1 ]//problems look here usually wants a variable or primitive to properly delete
                                                
                                                
                                            }
                                            
                                            
                                        },
                                        args:{}
                                    }
                                    ultraObject.forLoop(   iterableObjectFL_1_i   ) // realigns the iterable so the index are consecutive again
                                    
                                    
                                    if(    dev_obj.correct === 'false'   ){
                                        
                                        
                                        //leave the index alone
                                        
                                        
                                    }
                
                                }
                                
                                
                            }
                            
                            
                        },// removes an item from an array if its there
                        resetLength:function(   dev_obj   ){
                            ultraObject.objectLength({
                                val:iterableObjectO,
                                getLen:function(   dev_obj   ){
                                    
                                    
                                    if(   !isNaN(   Object.keys(   dev_obj.val   )[dev_obj.index]   )   ){
                                        
                                        
                                        return 'true'
                                        
                                        
                                    }
                                    
                                    
                                },
                                result:'true'
                            })
                        }, //if corrputed resets the lengths
                        isitO:function(   dev_obj   ){
                            return 'true'
                        }//confirms if its an itO, make it refuse to bind
                     }
                     iterableObjectO.abelast = {
                        length:0,
                        
                        add:function(   dev_obj   ){// returns the index that it was added to an object
                        
                        
                                if(   dev_obj.index !== undefined   ){
                                    
                                    
                                    if(   Object.keys(iterableObjectO.abelast).indexOf(dev_obj.index.toString()) === -1   ){
                                    
                                    
                                        iterableObjectO.abelast.length += 1
                                    
                                    
                                    }
                                                                    
                                    iterableObjectO.abelast[dev_obj.index] = dev_obj.value
                                    return dev_obj.index
                                    
                                    
                                }
                                
                                
                                else if(   dev_obj.index === undefined   ){
                                    
                                    
                                    iterableObjectO.abelast[iterableObjectO.abelast.length] = dev_obj.value
                                    iterableObjectO.abelast.length += 1
                                    // iterableObjectO.abelast['q'+(iterableObjectO.abelast.length -1).toString()] = iterableObjectO.abelast.length -1
                                    return iterableObjectO.abelast.length -1
                                    
                                
                                }
                                
                                
                            },// adds a value and retuns its place in the array
                        minus:function(   dev_obj   ){
                            //.value value to remove
                            //.index remove and index
                            
                            if(   dev_obj.index !== undefined   ){
                                
                                
                                delete iterableObjectO.abelast[dev_obj.index]
                                iterableObjectO.abelast.resetLength()// resets the length
                                
                                
                                if(   dev_obj.messy !== 'true'   ){
                                    
                                    
                                    var iterableObjectFL_0_i = {
                                        forLoop_0_i:0,
                                        forLoopLength:iterableObjectO.abelast.length,
                                        fn:function(   dev_obj   ){
                                            
                                            
                                            if(   dev_obj.index <= iterableObjectFL_0_i.forLoop_0_i && iterableObjectFL_0_i.forLoop_0_i !== iterableObjectO.abelast.length  ){ // at that point something must be missing
                                                
                                                
                                                iterableObjectO.abelast[iterableObjectFL_0_i.forLoop_0_i] =  iterableObjectO.abelast[iterableObjectFL_0_i.forLoop_0_i+1]
                                                delete iterableObjectO.abelast[iterableObjectFL_0_i.forLoop_0_i+1]//problems look here usually wants a variable or primitive to properly delete
                                                
                                                
                                            }
                                            
                                            
                                        },
                                        args:{
                                            index:dev_obj.index
                                            }
                                    }
                                    ultraObject.forLoop(   iterableObjectFL_0_i   ) // realigns the iterable so the index are consecutive again
                                
                                
                                }
                                
                                
                            }
                            
                            
                            if(   dev_obj.value !== undefined   ){
                                
                                
                                var iterableObjectO_abelast_BOOL = {0:false}
                                iterableObjectO_abelast_BOOL = ultraObject.severalOr({
                                            compTo: dev_obj.value,
                                            compAgn: iterableObjectO.abelast,
                                            boolean:iterableObjectO_abelast_BOOL,
                                            which:0
                                })
                                
                                
                                if(   iterableObjectO_abelast_BOOL[0]   ){
                                    
                                    
                                    var iterableObjectTDI = iterableObjectO_abelast_BOOL.spot // index to remove
                                    delete iterableObjectO.abelast[iterableObjectTDI]
                                    iterableObjectO.abelast.resetLength()
                                    var iterableObjectFL_1_i = {
                                        forLoop_0_i:0,
                                        forLoopLength:iterableObjectO.abelast.length,
                                        fn:function(   dev_obj   ){
                                            
                                            
                                            if(   iterableObjectTDI <= iterableObjectFL_1_i.forLoop_0_i && iterableObjectFL_1_i.forLoop_0_i !== iterableObjectO.abelast.length  ){ // at that point something must be missing
                                                
                                                
                                                iterableObjectO.abelast[iterableObjectFL_1_i.forLoop_0_i] =  iterableObjectO.abelast[iterableObjectFL_1_i.forLoop_0_i+1]
                                                delete iterableObjectO.abelast[iterableObjectFL_1_i.forLoop_0_i+1 ]//problems look here usually wants a variable or primitive to properly delete
                                                
                                                
                                            }
                                            
                                            
                                        },
                                        args:{}
                                    }
                                    ultraObject.forLoop(   iterableObjectFL_1_i   ) // realigns the iterable so the index are consecutive again
                                    
                                    
                                    if(    dev_obj.correct === 'false'   ){
                                        
                                        
                                        //leave the index alone
                                        
                                        
                                    }
                
                                }
                                
                                
                            }
                            
                            
                        },// removes an item from an array if its there
                        resetLength:function(   dev_obj   ){
                            ultraObject.objectLength({
                                    val:iterableObjectO.abelast,
                                    getLen:function(   dev_obj   ){
                                        
                                        
                                        if(   !isNaN(   Object.keys(   dev_obj.val   )[dev_obj.index]   )   ){
                                            
                                            
                                            return 'true'
                                            
                                            
                                        }
                                        
                                        
                                    },
                                    result:'true'
                            })
                        }, //if corrputed resets the lengths
                        isAbelast:function(   dev_obj   ){
                            return 'true'
                        }//confirms if its an itO, make it refuse to bind
                     }  // make a deep copy if outer function do not have access to scope from the inner functions, the inner function places the required info heree
                     return iterableObjectO
                } //retuns or converts an object with which you can easily iterate but this is an array accroding to chrome 72
                function iterify(   dev_obj   ){
                    //. iterify the item to turn into an iterableObject
                        var iterableO = ultraObject.iterableObject()
                        
                        
                        if(   ultraObject.isArray(   {type:dev_obj.iterify}   ) || ultraObject.isNodeList(   {type:dev_obj.iterify}   )   ){
                            
                            
                            var iterableFL_0_i = {
                                forLoop_0_i:0,
                                forLoopLength:dev_obj.iterify.length,
                                fn:function(   dev_obj   ){
                                    iterableO.add(   {value:dev_obj.iterify[iterableFL_0_i.forLoop_0_i]}   )
                                },
                                args:{iterify:dev_obj.iterify}
                            }
                            ultraObject.forLoop(   iterableFL_0_i   )
                            
                            
                        }
                        
                        
                        else if(   ultraObject.isObject(   {type:dev_obj.iterify}   )   ){
                            //places the key and value inside every index , So 0,1 represents the key and 1 the value
                            
                            var iterableArr = Object.entries(   dev_obj.iterify   )
                            var iterableFL_0_i = {
                                forLoop_0_i:0,
                                forLoopLength:iterableArr.length,
                                fn:function(   dev_obj   ){
                                    iterableO.add({
                                        value:ultraObject.iterify({iterify:iterableArr[iterableFL_0_i.forLoop_0_i]})
                                    })
                                },
                                args:{iterify:dev_obj.iterify}
                            }
                            ultraObject.forLoop(   iterableFL_0_i   )
                            
                            
                        }
                        
                        
                        else if(   ultraObject.isPrimitive(   {type:dev_obj.iterify}   )   ){
                            //for strings it neatly splits it into an itO
                            
                            if(   ultraObject.isString(   {type:dev_obj.iterify}   )   ){
                                
                                
                                var iterableFL_0_i = {
                                    forLoop_0_i:0,
                                    forLoopLength:dev_obj.iterify.length,
                                    fn:function(   dev_obj   ){
                                        iterableO.add(   {value:dev_obj.iterify[iterableFL_0_i.forLoop_0_i]}   )
                                    },
                                    args:{iterify:dev_obj.iterify}
                                }
                                ultraObject.forLoop(   iterableFL_0_i   )
                                
                                
                            }
                            
                            
                            else if(   !ultraObject.isString(   {type:dev_obj.iterify}   )   ){
                                
                                
                                iterableO.add(   {value:dev_obj.iterify}   )
                                
                                
                            }
                            
                            
                        }
                        
                        
                        return iterableO
                }//turns anything into an iterableObject
                function packIt(   dev_obj   ){
                    /*
                        abelast
                        1 for args
                    */
                    //for the the .fill and .write it expects them to be prefined in an iterable for .fill this must be found as a property in of the items in packItSA for .write this must be fount as a property in on of the items for dev_obj.order
                    /*
                         .order what this fn is supposed to fill right now takes objects or itO is needs to find out what it is
                         .directions, what its filling it with
                            match use match map and match keys and fills values
                            gather use ultraObject.selectAll to gather needed values to pack
                                element, return only elements from the order
                         .matchMap if .directions === match map keys and fill values
                         .fill  where to place the items
                         .write what to place for each fill value
                         for match
                            .prevent some attributes of an element might not allowed certain value to pack into certain properti
                                of the element, the API will use these fn or vales I havent decided coming in an itO to try to avoid errors
                            
                    */
                    var packIt_dev_obj = ultraObject.args.add(   {value:ultraObject.iterify(   {iterify:dev_obj}   )   }   )
                    ultraObject.args.abelast.add(   {value:packIt_dev_obj}   )
                    var packItSA //for packIT selectall
                    var packItFL_0_i ={
                        forLoop_0_i:0,
                        forLoopLength:dev_obj.directions.length,
                        fn:function(   dev_obj   ){
                            
                            
                            if(   dev_obj.directions[packItFL_0_i.forLoop_0_i] === 'match'   ){
                                console.group(   'an attempt to fill items'   )
                                ultraObject.objInvloved(
                                    ultraObject.iterify({
                                        iterify:[
                                            packItSA,
                                            dev_obj.order,
                                            ultraObject.subGroupsO]
                                        })
                                )
                                
                                /*objIO -self -ablelast   */ //{
                                ultraObject.objIO.minus(   {index:ultraObject.objIO.abelast.length-1}   )
                                ultraObject.objIO.abelast.minus(   {index:ultraObject.objIO.abelast.length-1}   )
                                // }  /**/

                                console.groupEnd()
                                var packItFL_1_i = {
                                    forLoop_0_i:0,
                                    forLoopLength:packItSA.subGroupsMap.MB_0_i.length,
                                    fn:function(   dev_obj   ){
                                        var packItBOOL_0_i = {0:false}
                                        packItBOOL_0_i = ultraObject.severalOr({
                                            compTo: null,
                                            compAgn: dev_obj.prevent,
                                            boolean:packItBOOL_0_i,
                                            which:0,
                                            how:function(   dev_obj   ){
                                            //this removes bad list that do not lead to an element
                                            
                                                return dev_obj.compAgnI({element:packItSA[packItFL_1_i.forLoop_0_i]})
                                                
                                            },
                                            result:'cantFill'
                                        })
                                        console.log(   packItBOOL_0_i   )
                                        
                                        
                                        if(   !packItBOOL_0_i[0]   ){
                                            
                                            
                                            packItSA[packItFL_1_i.forLoop_0_i][dev_obj.fill] = dev_obj.order[packItFL_1_i.forLoop_0_i][dev_obj.write]
                                        
                                        
                                        }
                                        
                                        
                                        //properly writes to the item that should be filled
                                        // console.log(   dev_obj.order[packItFL_1_i.forLoop_0_i][dev_obj.write]   )
                                        // console.log(   packItSA[packItFL_1_i.forLoop_0_i].value   )
                                    },
                                    args:{
                                        fill:dev_obj.fill,
                                        order:dev_obj.order,
                                        write:dev_obj.write,
                                        prevent:dev_obj.prevent
                                    }
                                }
                                ultraObject.forLoop(   packItFL_1_i   )
                                
                                
                            }
                            
                            
                            if(   dev_obj.directions[packItFL_0_i.forLoop_0_i] === 'gather element'   ){
                                    
                                
                                if(    ultraObject.isObject(   {type:dev_obj.order}   )   ){
                                    
                                    
                                    packItSA = ultraObject.selectAll({
                                        target:dev_obj.order,
                                        typeOnly : ultraObject.iterify(   {iterify:['element']}   ),
                                        length:Object.keys(   dev_obj.order   ).length
                                    })
                                    ultraObject.misc.minus(   {index:ultraObject.misc.length -1}   )
                                    ultraObject.misc.abelast.minus(   {index:ultraObject.misc.abelast.length -1}  )
                                    ultraObject.fG.minus(   {index:ultraObject.fG.length -1}   )
                                    ultraObject.fG.abelast.minus(   {index:ultraObject.fG.abelast.length -1}  )
                                    
                                }
                                
                                
                                else if(   ultraObject.isitO(   {type:dev_obj.order}   )     ){
                                
                                    
                                    packItSA = ultraObject.selectAll({
                                        target:dev_obj.order,
                                        typeOnly : ultraObject.iterify(   {iterify:['element']}   ),
                                        length:dev_obj.order.length
                                    })
                                    ultraObject.misc.minus(   {index:ultraObject.misc.length -1}   )
                                    ultraObject.misc.abelast.minus(   {index:ultraObject.misc.abelast.length -1}  )
                                    ultraObject.fG.minus(   {index:ultraObject.fG.length -1}   )
                                    ultraObject.fG.abelast.minus(   {index:ultraObject.fG.abelast.length -1}  )
                                    
                                    
                                }
                                
                                
                            }
                        
                        },
                        args:{
                            directions:dev_obj.directions,
                            order:dev_obj.order,
                            fill:dev_obj.fill,
                            write:dev_obj.write,
                            prevent:dev_obj.prevent
                        }
                    }
                    ultraObject.forLoop(   packItFL_0_i   )
                        
                    
                    
                        
                } //fills anything as you tell it, use pack to avoid missspelling
                // an endpoint here means what the selectAll is lookng for in the object
                function selectAll(   dev_obj   ){
                    /*
                        abelast : 1 for misc
                                    1 for fG
                    */
                    // this function also returns the group ordering if looked for nested items
                    //.target item to get all values from must be an itO or an object
                    // .typeOnly, what specific values were looking for
                    var selectAll_dev_obj = ultraObject.args.add(   {value:ultraObject.iterify(   {iterify:dev_obj}   )   }   )
                    ultraObject.args.abelast.add(   {value:selectAll_dev_obj}   )
                    
                    /*adding the first misc holds the function that test for the data type endpoint*/ //{
                    var selectAllMisc_0_i = ultraObject.scope.add(   {value:ultraObject.misc.add(   {value:ultraObject.iterableObject()}   )}   )
                    ultraObject.misc.abelast.add(   {value:ultraObject.scope[selectAllMisc_0_i]}   )
                    // }  /**/
                
                    /*setting the booleans for the datatype*/ //{
                    
                    /*setting up functon group*/ //{
                    var selectAllFG_0_i = ultraObject.scope.add(   {value:ultraObject.fG.add(   {value:ultraObject.iterableObject()}   )}   )
                    ultraObject.fG.abelast.add(   {value:ultraObject.scope[selectAllFG_0_i]}   )
                    // }  /**/
                    
                    ultraObject.misc[   ultraObject.scope[selectAllMisc_0_i]   ].add({
                        value:function(   dev_obj   ){
                            var selectAllFL_1_i = {
                                forLoop_0_i:0,
                                forLoopLength:dev_obj.typeOnly.length,
                                fn:function(   dev_obj   ){
                                    
                                    /* how subGroups should complete a group */ //{
                                    ultraObject.fG[   ultraObject.scope[selectAllFG_0_i]   ].endpoint = dev_obj.typeOnly[   selectAllFL_1_i.forLoop_0_i   ]
                                    // }  /**/
                                    
                                    /* this checks for the desired data type from the developer */ //{
                                    if(   dev_obj.typeOnly[   selectAllFL_1_i.forLoop_0_i   ] === 'array'    ){
                                        
                                        /* this allows selectAll to test against data type endpoints same for each if statement*/ //{
                                        ultraObject.fG[   ultraObject.scope[selectAllFG_0_i]   ].add({
                                            value:function(   dev_obj   ){
                                                if(   ultraObject.isArray(   {type:dev_obj.type}   )   ){
                                                    return 'true'
                                                    }
                                            }
                                        })
                                        // }  /**/
                                        
                                    }
                                    // }  /**/
                                    
                                    
                                    if(   dev_obj.typeOnly[   selectAllFL_1_i.forLoop_0_i   ] === 'element'    ){
                                        
                                        
                                        ultraObject.fG[   ultraObject.scope[selectAllFG_0_i]   ].add({
                                            value:function(   dev_obj   ){
                                                if(   ultraObject.isDOMElement(   {type:dev_obj.type}   )   ){
                                                    
                                                    return 'true'
                                                    }
                                            }
                                        })
                                        
                                        
                                    }
                                    
                                    
                                    if(   dev_obj.typeOnly[   selectAllFL_1_i.forLoop_0_i   ] === 'function'    ){
    
    
                                        ultraObject.fG[   ultraObject.scope[selectAllFG_0_i]   ].add({
                                            value:function(   dev_obj   ){
                                                if(   ultraObject.isFunction(   {type:dev_obj.type}   )   ){
                                                    return 'true'
                                                    }
                                            }
                                        })
                                        
                                        
                                    }
                                    
                                    
                                    if(   dev_obj.typeOnly[   selectAllFL_1_i.forLoop_0_i   ] === 'int'   ){
    
    
                                        ultraObject.fG[   ultraObject.scope[selectAllFG_0_i]   ].add({
                                            value:function(   dev_obj   ){
                                                if(   ultraObject.isInt(   {type:dev_obj.type}   )   ){
                                                    return 'true'
                                                    }
                                            }
                                        })
                                        
                                        
                                    }
                                    
                                    
                                    if(   dev_obj.typeOnly[   selectAllFL_1_i.forLoop_0_i   ] === 'nodelist'    ){
    
    
                                        ultraObject.fG[   ultraObject.scope[selectAllFG_0_i]   ].add({
                                            value:function(   dev_obj   ){
                                                if(   ultraObject.isNodeList(   {type:dev_obj.type}   )   ){
                                                    return 'true'
                                                    }
                                            }
                                        })
                                        
                                        
                                    }
                                    
                                    
                                    if(   dev_obj.typeOnly[   selectAllFL_1_i.forLoop_0_i   ] === 'object'    ){
    
    
                                        ultraObject.fG[   ultraObject.scope[selectAllFG_0_i]   ].add({
                                            value:function(   dev_obj   ){
                                                if(   ultraObject.isObject(   {type:dev_obj.type}   )   ){
                                                    return 'true'
                                                    }
                                            }
                                        })
                                        
                                        
                                    }
                                    
                                    
                                    if(   dev_obj.typeOnly[   selectAllFL_1_i.forLoop_0_i   ] === 'primitive'    ){
    
    
                                        ultraObject.fG[   ultraObject.scope[selectAllFG_0_i]   ].add({
                                            value:function(   dev_obj   ){
                                                if(   ultraObject.isPrimitive(   {type:dev_obj.type}   )   ){
                                                    return 'true'
                                                    }
                                            }
                                        })
                                        
                                        
                                    }
                                    
                                    
                                    if(   dev_obj.typeOnly[   selectAllFL_1_i.forLoop_0_i   ] === 'string'    ){
    
    
                                        ultraObject.fG[   ultraObject.scope[selectAllFG_0_i]   ].add({
                                            value:function(   dev_obj   ){
                                                if(   ultraObject.isString(   {type:dev_obj.type}   )   ){
                                                    return 'true'
                                                    }
                                            }
                                        })
                                        
                                        
                                    }
                                    
                                    
                                    if(   dev_obj.typeOnly[   selectAllFL_1_i.forLoop_0_i   ] === 'itO'    ){
    
    
                                        ultraObject.fG[   ultraObject.scope[selectAllFG_0_i]   ].add({
                                            value:function(   dev_obj   ){
                                                if(   ultraObject.isitO(   {type:dev_obj.type}   )   ){
                                                    return 'true'
                                                    }
                                            }
                                        })
                                        
                                        
                                    }
                                    
                                },
                                args:dev_obj,
                                bubble:'true'
                            }
                            ultraObject.forLoop(   selectAllFL_1_i   )
                        }
                    })
                    ultraObject.misc[   ultraObject.scope[selectAllMisc_0_i]   ][0](   {typeOnly:dev_obj.typeOnly}   )
                
                    /*actual function used to determine data type endpoint*/ //{
                    ultraObject.fG[   ultraObject.scope[selectAllFG_0_i]   ].calls = function(   dev_obj   ){
                        var selectAllFL_2_i = {
                            forLoop_0_i:0,
                            forLoopLength: ultraObject.fG[   ultraObject.scope[selectAllFG_0_i]   ].length,
                            fn:function(   dev_obj   ){
                                
                                /*if it has found a data type endpoint bubble up */ //{
                                if(   ultraObject.fG[   ultraObject.scope[selectAllFG_0_i]   ][   selectAllFL_2_i.forLoop_0_i   ](   dev_obj   ) === 'true'   ){
                                    
                                    
                                    return 'true'
                                    
                                    
                                }
                                // }  /**/
                                
                                
                            },
                            args:dev_obj,
                            bubble:'true'
                        }
                        return ultraObject.forLoop(   selectAllFL_2_i   )
                    }
                    // }  /**/
                    
                    // }  /**/
    
    
                    
                    if(   ultraObject.isObject(   {type:dev_obj.target}   ) || ultraObject.isitO(   {type:dev_obj.target}   )   ){
                        
                        
                        var selectReturn = {}
                        var selectReturnMD = {
                            length:0,
                            str:'',
                            ending:dev_obj.typeOnly
                        }
                        //selectReturnMetaData contains grouping information about the .target
                        var selectAllFL_0_i = {
                            forLoop_0_i:0,
                            forLoopLength:dev_obj.length,
                            fn:function(   dev_obj   ){
                                // console.log(   selectAllFL_0_i.forLoop_0_i,'walk in'   )
                                // console.log(   Object.keys(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i]   )
                                var selectCheckpoint = {}  // when it leave recurison it restore the values
                                                            
                                try{
                                    
                                    /*if we have an itO an Object or the data type endpoint, record its key traversing the structure*/ //{
                                    if(   (   ultraObject.isObject(   {type:Object.values(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i]}   ) || ultraObject.isitO(   {type:Object.values(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i]}   ) || ultraObject.fG[   ultraObject.scope[selectAllFG_0_i]   ].calls(   {type:Object.values(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i]}   ) === 'true'    ) && !ultraObject.isAbelast(   {type:Object.values(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i]}   )   ){
                                        //I cannot add it if its a primitive not an object or an itO
                                        //done like this because what if im looking for a string, this would evaluate to false and the subGroupMap would be improper
                                        
                                        ultraObject.subGroups({
                                            map:selectReturnMD,
                                            val:Object.keys(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i],
                                        })
                                        
                                        
                                    }
                                    // }  /**/
                                    
                                }
                                
                                catch(e){}
                                
                                
                                if(   ultraObject.fG[   ultraObject.scope[selectAllFG_0_i]   ].calls(   {type:Object.values(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i]}   ) === 'true'   ){
                                    
                                    /* we have come to the desired target and the end of our search use subGroups to move on */ //{
                                    selectReturn[Object.keys(   selectReturn   ).length] = Object.values(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i]
                                    ultraObject.subGroups({
                                        map:selectReturnMD,
                                        val:ultraObject.fG[   ultraObject.scope[selectAllFG_0_i]   ].endpoint,
                                        nextItem:'true',
                                    })
                                    // return 'premature'
                                    //this might leave some impt things behind
                                    // }  /**/
                                        
                                    
                                }
                                
                                
                                else if(   (   ultraObject.isObject(   {type:Object.values(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i]}   ) || ultraObject.isitO(   {type:Object.values(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i]}   )   ) && !ultraObject.isAbelast(   {type:Object.values(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i]}   )   ){
                                    
                                    
                                    // console.group('recursion')
                                        selectCheckpoint.args = selectAllFL_0_i.args
                                        selectCheckpoint.forLoop_0_i =  selectAllFL_0_i.forLoop_0_i
                                        selectCheckpoint.forLoopLength = selectAllFL_0_i.forLoopLength
                                        selectAllFL_0_i.args ={
                                            target: Object.values(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i]
                                        }
                                        selectAllFL_0_i.forLoop_0_i = 0
                                        selectAllFL_0_i.forLoopLength = Object.values(   Object.values(   dev_obj.target   )[selectAllFL_0_i.forLoop_0_i]   ).length
                                        ultraObject.forLoop(   selectAllFL_0_i   )
                                    // console.groupEnd()
                                    selectAllFL_0_i.args = selectCheckpoint.args
                                    selectAllFL_0_i.forLoop_0_i = selectCheckpoint.forLoop_0_i
                                    selectAllFL_0_i.forLoopLength = selectCheckpoint.forLoopLength
                                    selectCheckpoint = null
                                    
                                    
                                }
                                
                            },
                            args:{target:dev_obj.target}
                        }
                        ultraObject.forLoop(   selectAllFL_0_i   )
                        ultraObject.subGroups({
                                map:selectReturnMD,
                                nextItem:'complete',
                            })
                        
                        /*helps reset subGroups   */ //{
                        ultraObject.subGroupsO.length = 0
                        ultraObject.MB_0_i.minus({index:ultraObject.MB_0_i.length -1 })
                        // }  /**/
                        console.group(   'grabbing the chosen elements from the object'   )
                        ultraObject.objInvloved(
                            ultraObject.iterify({
                                iterify:[
                                    selectReturn,
                                    selectReturnMD
                                ]
                            })
                        )
                        
                        /*objIO -self -ablelast   */ //{
                        ultraObject.objIO.minus(   {index:ultraObject.objIO.abelast.length-1}   )
                        ultraObject.objIO.abelast.minus(   {index:ultraObject.objIO.abelast.length-1}   )
                        // }  /**/
                        
                        console.groupEnd()
                        selectReturn.subGroupsMap = selectReturnMD
                        return selectReturn
                        
                    }
                    
                    
                    /*taking the misc that holds the function out the scope*/ //{
                    ultraObject.scope.minus(   {index:selectAllMisc_0_i}   )
                    // }  /**/
                }
                function subGroups(   dev_obj   ){
                    // it needs to be used when gathering path information for specifc items in a complex object, at every path open, a will be recorded here
                    //.nextItem, indicates to the function that needs to find the path of the next item
                        // true look for the next titem
                    //.val a factual represenation of how to use functionality to get to the item for another complex item
                    // .map a place to keep the mapping list
                        //.ending, the cutoff to determine the good from the bad
                        //.MB_0_i the object representing the mapping assumption
                            //.groupHead index of the last head group
                            // .groupHeadLength lenght to precat the children
                            // .seperator, seperator to make the paths and get their lengths
                    // ultraObject.subGroupsO , keeps a list of all subgroup maps
                        //consider using .start and complete to make new subgroup maps in the list
                    // it does this using strings
                    // to provide a proper subgroup list assumptions have to be made
                    // if on item map is longer than the other, the first contains the parent
                    // if the items after are as long as the first, then the next item contains the parent for the next set
                    //
                        /*
                        "0 item 0 item element " parent
                        "1 item element "       children
                        "2 item element "
                        "1 item 0 item element " parent
                        ....
                        */
                        //
                    
                    var subGroups_dev_obj = ultraObject.args.add(   {value:ultraObject.iterify(   {iterify:dev_obj}   )   }   )
                    var subGroupsBOOL = {0:false}
                    var subGroupsSeperator = ' ' // how to seperate the items
                    
                    if(   dev_obj.map.MB_0_i === undefined   ){
                        
                        //LEFT OFF figure out why abelast still has that itO test fn
                        dev_obj.map.MB_0_i = ultraObject.iterableObject()
                        dev_obj.map.MB_0_i.globalMB = ultraObject.MB_0_i.add(   {value:dev_obj.map.MB_0_i}   ) //if problem get the answer for a variable and assign it back
                        dev_obj.map.MB_0_i.seperator = ' ' // how fn makes a path to a child element
                        dev_obj.map.MB_0_i.groupHeadLength = ultraObject.max // for the length of the path representing the head group
                        subGroupsSeperator =  dev_obj.map.MB_0_i.seperator
                        
                    }
                    
                    
                    subGroupsBOOL = ultraObject.severalOr({
                            compTo: dev_obj.map,
                            compAgn: ultraObject.subGroupsO,
                            boolean:subGroupsBOOL,
                            which:0
                    })
                    
                    
                    if(   !subGroupsBOOL[0]   ){
                        ultraObject.subGroupsO[ultraObject.subGroupsO.length] = dev_obj.map
                        ultraObject.subGroupsO.length += 1
                        subGroupsBOOL = ultraObject.severalOr({
                                compTo: dev_obj.map,
                                compAgn: ultraObject.subGroupsO,
                                boolean:subGroupsBOOL,
                                which:0
                        })
                        //this is done so it can add the first item
                    }
                    
                    
                    if(   dev_obj.nextItem === 'complete'   ){
                        //here the map is recreated based on the assumption
                        //gets rid of bad results
                        
                        
                        console.group(   'complete'   )
                            ultraObject.subGroupsO[subGroupsBOOL.spot].length = 0
                            var subGroupsFL_0_i = {
                                forLoop_0_i:0,
                                forLoopLength:Object.keys(   ultraObject.subGroupsO[subGroupsBOOL.spot]   ).length,
                                fn:function(   dev_obj   ){
                                    
                                     
                                    if(   !isNaN(Object.keys(   ultraObject.subGroupsO[subGroupsBOOL.spot]   )[subGroupsFL_0_i.forLoop_0_i  ])   ){
                                        
                                        
                                        ultraObject.subGroupsO[subGroupsBOOL.spot].length += 1
                                        
                                        
                                    }
                                },
                                args:{}
                            }
                            ultraObject.forLoop(   subGroupsFL_0_i   )
                            dev_obj.val = ''
                            var subGroupsBOOL_1_i = {0:false}
                            var subGroupsFL_1_i ={
                                forLoop_0_i:0,
                                forLoopLength:Object.keys(   ultraObject.subGroupsO[subGroupsBOOL.spot].ending   ).length,
                                fn:function(   dev_obj   ){
                                    subGroupsBOOL_1_i = ultraObject.severalOr({
                                        compTo: ultraObject.subGroupsO[subGroupsBOOL.spot].ending[subGroupsFL_1_i.forLoop_0_i],
                                        compAgn: ultraObject.subGroupsO[subGroupsBOOL.spot],
                                        boolean:subGroupsBOOL_1_i,
                                        which:0,
                                        how:function(   dev_obj   ){
                                        //this removes bad list that do not lead to an element
                                            
                                            if(   dev_obj.compAgnI !== undefined   ){
                                                
                                                                                    
                                                if(   dev_obj.compAgnI.indexOf(   dev_obj.compTo   ) === -1   ){
                                                    
                                                    
                                                    delete ultraObject.subGroupsO[subGroupsBOOL.spot][dev_obj.index]
                                                    
                                                    
                                                }
                                                
                                            
                                            }
                                            
                                            
                                            else if(   dev_obj.compAgnI === undefined   ){
                                                
                                                
                                                return 'premature'
                                                
                                                
                                            }
                                            
                                        },
                                        result:'true'
                                    })
                                },
                                args:{}
                            }
                            ultraObject.forLoop(   subGroupsFL_1_i   )
                            console.group(   'proper length'   )
                                ultraObject.objectLength({
                                    val:ultraObject.subGroupsO[subGroupsBOOL.spot],
                                    getLen:function(   dev_obj   ){
                                        
                                        
                                        if(   !isNaN(   Object.keys(   dev_obj.val   )[dev_obj.index]   )   ){
                                            
                                            
                                            return 'true'
                                            
                                            
                                        }
                                        
                                        
                                    },
                                    result:'true'
                                    })
                            console.groupEnd()
                            ultraObject.objInvloved(
                                ultraObject.iterify({iterify:[
                                    dev_obj.map.ending,
                                    ultraObject.subGroupsO[subGroupsBOOL.spot],
                                    dev_obj.map.MB_0_i
                                ]})
                            )
                            
                            /*objIO -self -ablelast   */ //{
                            ultraObject.objIO.minus(   {index:ultraObject.objIO.abelast.length-1}   )
                            ultraObject.objIO.abelast.minus(   {index:ultraObject.objIO.abelast.length-1}   )
                            // }  /**/
                            
                        console.groupEnd()
                        
                                    
                    }
                    
                    
                    else if(   subGroupsBOOL[0]   ){
                        
                        
                        if(   ultraObject.subGroupsO[subGroupsBOOL.spot].length === 0 &&  ultraObject.subGroupsO[subGroupsBOOL.spot][ultraObject.subGroupsO[subGroupsBOOL.spot].length] === undefined   ){
                            
                            
                            ultraObject.subGroupsO[subGroupsBOOL.spot][ultraObject.subGroupsO[subGroupsBOOL.spot].length] = ''
                            
                            
                        }
                        
                        
                        ultraObject.subGroupsO[subGroupsBOOL.spot][ultraObject.subGroupsO[subGroupsBOOL.spot].length] += dev_obj.val + subGroupsSeperator
                        //hopefully ' ' is a gr8 sepereator
                        
                        if(   dev_obj.nextItem === 'true'   ){
            
                            
                            dev_obj.map.MB_0_i.lastAddedIndex = dev_obj.map.MB_0_i.add(   {value:ultraObject.subGroupsO[subGroupsBOOL.spot][ultraObject.subGroupsO[subGroupsBOOL.spot].length].split(   subGroupsSeperator   )}   )
                            
                            
                            /* we are still loooking at children  no parents yet*/ //{
                            if(   dev_obj.map.MB_0_i.groupHeadLength <=  dev_obj.map.MB_0_i[dev_obj.map.MB_0_i.lastAddedIndex].length   ){
                                
                                
                                dev_obj.map.MB_0_i.groupHead = dev_obj.map.MB_0_i.lastAddedIndex
                                dev_obj.map.MB_0_i.groupHeadLength = dev_obj.map.MB_0_i[dev_obj.map.MB_0_i.lastAddedIndex].length
                                
                                
                            }
                            // }  /**/
                            
                            /* we are looking at the next parent*/ //{
                            else if(   dev_obj.map.MB_0_i.groupHeadLength >  dev_obj.map.MB_0_i[dev_obj.map.MB_0_i.lastAddedIndex].length   ){
                                
                                
                                dev_obj.map.MB_0_i[dev_obj.map.MB_0_i.lastAddedIndex].unshift.apply(   dev_obj.map.MB_0_i[dev_obj.map.MB_0_i.lastAddedIndex],dev_obj.map.MB_0_i[dev_obj.map.MB_0_i.groupHead].slice(   0,dev_obj.map.MB_0_i.groupHeadLength -  dev_obj.map.MB_0_i[dev_obj.map.MB_0_i.lastAddedIndex].length   )   )
                               // takes the path of coming from sub children and makes it of parents
                                
                                ultraObject.subGroupsO[subGroupsBOOL.spot][ultraObject.subGroupsO[subGroupsBOOL.spot].length] =  dev_obj.map.MB_0_i[dev_obj.map.MB_0_i.lastAddedIndex].join(   subGroupsSeperator   )
                                
                            }
                            // }  /**/
                            
                            
                            ultraObject.subGroupsO[subGroupsBOOL.spot].length += 1
                            ultraObject.subGroupsO[subGroupsBOOL.spot][ultraObject.subGroupsO[subGroupsBOOL.spot].length] = ''
                            
                            
                        }
                        
                                
                    }
                        
                    
                    dev_obj.map +=  dev_obj.val.toString()
                }// returns ordering information about nested items
                function numberSystem(   dev_obj   ){
                    /*
                        key points
                        the only thing that is iterable here is the nSM do not EVER try to loop through the nS or digits, you must use the nSM to do it
                        for each index in nSM 0 represents the digit location in the nS
                                              1 represents digit location in digits
                    */
                    /* ablelasts
                        1 for nS
                        1 for misc
                    */
                    /*
                        .nS: if this is undefined the function sets aside a new numberSystem, if not it loads the one given according to the scope
                        the indexes represents the digits
                        .operation:
                            create - adds, modifes or removes digits from the numberSyste,
                                for every digit, we need the actual, the minx and the max
                                0 for actual, 1 for min 2 for max
                                requires a .digits or just leaves it alone
                            decimal - turns the numberSystem number to a decimal for mathematical conversion and external-API readable format
                                .conversion - whether to convert to decimal or the custom numberSystem
                                    to = convert to decimal
                                    from = convert from decimal to nsm
                                .currentNumber when convert from decimal to a NS
                                .prevent -
                                        'false' - do not update the nS's number
                            update-
                                updae the .currentNumber after opperations
                        .digits
                                an itO containing itO's that represent each digit of the nS
                                0 for the current digit
                                1 for the min amount the digit can be
                                2 for the max amount the digit can be
                                
                                this can be added all at once, or modified through out the application
                                
                        .nSM, which digit comes first
                        //
                            the key point i want you to remeber
                            the first index is where the digit goes in the nS
                            the second index is where  the digit goes in .digits
                            determines how the number receive digits min is as 1 then 10 then 1000
                        
                            so forr
                            0:1
                            1:0
                            2:2
                            3::3
                            
                            but this is the data object the fn wants from this dev_obj.property
                            ultraObject.iterify({
                                        iterify:[
                                            ultraObject.iterify({
                                                iterify:[0,2]
                                            }),
                                            ultraObject.iterify({
                                                iterify:[1,0]
                                            }),
                                            ultraObject.iterify({
                                                iterify:[2,1]
                                            })
                                        ]
                                    })
                            where the first index specifes where the nSM digit should go in the nSM and the sencond index specifies which digit from the .digits
                            the key point i want i
                        //
                    */
                    /*
                        looping through  nSM to recreate the string!
                        key:digits in ordered index: ultraObject.nS[   ultraObject.scope[nSNS_0_i]].digits[   ultraObject.nS[   ultraObject.scope[nSNS_0_i]   ].nSM[   nSFL_0_i.forLoop_0_i   ]   ]
                        key:the dev given nS:ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ]
                    */
                    
                    /*adding the dev_obj to args*/ //{
                    var numberSystem_dev_obj = ultraObject.args.add(   {value:ultraObject.iterify(   {iterify:dev_obj}   )   }   )
                    // }  /**/
                    
                    
                        
                        /*we have a numberSystem to work with*/ //{
                        if(   ultraObject.isInt(   {type:dev_obj.nS}   ) === 'true'  ){
                            
                            /*NS +scope */ //{
                            var nSNS_1_i = ultraObject.scope.add(   {value:dev_obj.nS}   )
                            // }  /**/
                            
                            /*this code blocks adds subtracts or modifies the existing digits*/ //{
                            if(   dev_obj.operation === 'create'   ){
                                
                                /*if the developer wants the nS to be reordered*/ //{
                                if(   ultraObject.isitO(   {type:dev_obj.nSM}   )   ){
                                                                  
                                    // /*node mode choice thread performanceReSort */ //{
                                    // // here after each digit operation i resort the nSM because it needs to be that way
                                    //     ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.newnSM = dev_obj.nSM
                                    //     ultraObject.sort({
                                    //         target: ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.newnSM,
                                    //         algorithm:'bubble',
                                    //         compare:function(   dev_obj   ){
                                                
                                                    
                                    //             if(   dev_obj.val[dev_obj.index][0] > dev_obj.val[dev_obj.index+ 1][0]   ){
                                                    
                                                    
                                    //                 return 'true'
                                                    
                                                    
                                    //             }
                                                    
                                                
                                    //         },
                                    //         result:'true'
                                    //     })
                                    //     var nSFL_1_i = {
                                    //         forLoop_0_i:0,
                                    //         forLoopLength:ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.newnSM.length,
                                    //         fn:function(   dev_obj   ){
                                                
                                    //             /*means that the end of the current nSM*/ //{
                                    //             // the developer wanted to increase the nS so we must increase it and modify the nS
                                    //             //hopefully you dont have to use property undefined
                                    //             // if the lengths are not the same you cant use .nSM to fix the nS you must use the newnSM because this loop is iterating according to that index PROBLEMS look at this
                                    //             if(   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM[   nSFL_1_i.forLoop_0_i   ]  === undefined   ){
                                                
    
                                    //                 ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.add(   {value:ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.newnSM[   nSFL_1_i.forLoop_0_i   ]}   )
                                    //                 ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].add({
                                    //                     value:ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].digits[   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM[   nSFL_1_i.forLoop_0_i   ][1]   ],
                                    //                     index:ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.newnSM[   nSFL_1_i.forLoop_0_i   ][0]
                                    //                 })
                                                    
                                                    
                                    //             }
                                                
                                                
                                    //             else if(   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM[   nSFL_1_i.forLoop_0_i   ][0]  !== ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.newnSM[   nSFL_1_i.forLoop_0_i   ][0]   ){
                                                
    
                                    //                 ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.add(   {value:ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.newnSM[   nSFL_1_i.forLoop_0_i   ]}   )
                                    //                 ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].add({
                                    //                     value:ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].digits[   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.newnSM[   nSFL_1_i.forLoop_0_i   ][1]   ],
                                    //                     index:ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.newnSM[   nSFL_1_i.forLoop_0_i   ][0]
                                    //                 })
                                                    
                                                    
                                    //             }
                                    //             // }  /**/
                                                
                                    //             /*means newnSM can replace an available value in the current nSM*/ //{
                                    //             // im dynmaically recreating the nS here
                                    //             else if(   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM[   nSFL_1_i.forLoop_0_i   ][0]  === ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.newnSM[   nSFL_1_i.forLoop_0_i   ][0]   ){
                                                    
                                                    
                                    //                 if(   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM[   nSFL_1_i.forLoop_0_i   ][1]  !== ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.newnSM[   nSFL_1_i.forLoop_0_i   ][1]   ){
                                                        
                                                        
                                    //                     ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM[   nSFL_1_i.forLoop_0_i   ] = ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.newnSM[   nSFL_1_i.forLoop_0_i   ]
                                    //                     ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ][   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM[   nSFL_1_i.forLoop_0_i   ][0]   ] =  ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].digits[   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM[   nSFL_1_i.forLoop_0_i   ][1]   ]
                                                    
                                                    
                                    //                 }
                                                    
                                                    
                                    //             }
                                    //             // }  /**/
                                                
                                    //             ultraObject.sort({
                                    //                 target: ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM,
                                    //                 algorithm:'bubble',
                                    //                 compare:function(   dev_obj   ){
                                                        
                                                            
                                    //                     if(   dev_obj.val[dev_obj.index][0] > dev_obj.val[dev_obj.index+ 1][0]   ){
                                                            
                                                            
                                    //                         return 'true'
                                                            
                                                            
                                    //                     }
                                                            
                                                        
                                    //                 },
                                    //                 result:'true'
                                    //             })
                                                
                                    //         },
                                    //         args:dev_obj
                                    //     }
                                    //     ultraObject.forLoop(   nSFL_1_i   )
                                    //     delete ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.newnSM
                                    // // }  /**/
                                    
                                    /*node mode choice thread performanceIterateAndAsk  */ //{
                                    // when look at every digit in the newnSM, i loop through the original nSM to see if we have nS digit match then i perform operation
                                    // top in performance because there is no use of sorting
                                    ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.newnSM = dev_obj.nSM
                                    var nSFL_15_i = {
                                        forLoop_0_i:0,
                                        forLoopLength:ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.length,
                                        fn:function(   dev_obj   ){
                                            
                                            
                                            if(   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM[   nSFL_15_i.forLoop_0_i   ][0]  === ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.newnSM[   nSFL_14_i.forLoop_0_i   ][0]   ){
                                                
                                                
                                                if(   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM[   nSFL_15_i.forLoop_0_i   ][1]  !== ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.newnSM[   nSFL_14_i.forLoop_0_i   ][1]   ){
                                                // i wanna save space but preventing memory leaks is more important
                                                    
                                                    ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ]         .nSM[   nSFL_15_i.forLoop_0_i   ][1]  =               ultraObject.nS[   ultraObject.scope[nSNS_1_i]         ].nSM.newnSM[   nSFL_14_i.forLoop_0_i   ][1]
                                                    ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ][        ultraObject.nS[   ultraObject.scope[nSNS_1_i]         ].nSM.newnSM[   nSFL_14_i.forLoop_0_i   ][0]  ] =  ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ]         .digits[   ultraObject.nS[   ultraObject              .scope[nSNS_1_i]   ].nSM.newnSM[   nSFL_14_i          .forLoop_0_i   ][1]   ]
                                                    
                                                    
                                                }
                                                
                                                
                                                ultraObject.nS[   ultraObject.scope[nSNS_1_i]         ].nSM.match = 'true'
                                                return 'premature'
                                                
                                                
                                            }
                                            
                                            
                                        },
                                        args:dev_obj //{} problem, make this part of 14
                                    }
                                    var nSFL_14_i = {
                                        forLoop_0_i:0,
                                        forLoopLength:ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.newnSM.length,
                                        fn:function(   dev_obj   ){
                                            ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.match = 'false'
                                            ultraObject.forLoop(    nSFL_15_i   )
                                            
                                            
                                            if(   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.match === 'false'   ){
                                                
                                                
                                                ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.add({
                                                    value:ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.newnSM[   nSFL_14_i.forLoop_0_i   ]
                                                })
                                                ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].add({
                                                    value:ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].digits[   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.newnSM[   nSFL_14_i.forLoop_0_i   ][1]   ],
                                                    index:ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.newnSM[   nSFL_14_i.forLoop_0_i   ][0]
                                                })
                                                
                                                
                                            }
                                            
                                            
                                        },
                                        args:dev_obj //{}
                                    }
                                    ultraObject.forLoop(    nSFL_14_i   )
                                    delete ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.newnSM
                                    // }  /**/
                                    
                                    /* node mode choice thread validation */ //{
                                    
                                        // ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.replacer = dev_obj.nSM
                                        
                                        // /* setting some presets to test when the nSM is remade */ //{
                                        
                                        //     /*asking first how many digits are there*/ //{
                                        //     console.log(   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].digits.length   )
                                        //     ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.limit = ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].digits.length
                                        //     // }  /**/
                                        
                                        // // }  /**/
                                        
                                        // /*remaking the nSM*/ //{
                                        // ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.newnSM = ultraObject.iterableObject()
                                        // var nSFL_1_i = {
                                        //     forLoop_0_i:0,
                                        //     forLoopLength:ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.limit,
                                        //     fn:function(   dev_obj   ){
                                        //         ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.newnSM.add(   {value:ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.replacer[   nSFL_1_i.forLoop_0_i   ]}   )
                                        //     },
                                        //     args:dev_obj
                                        // }
                                        // ultraObject.forLoop(   nSFL_1_i   )
                                        // console.log(   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.newnSM   )
                                        
                                        //     /*testing if the nSM is valid*/ //{
                                        //     ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.limitStart  = ultraObject.iterableObject()
                                            
                                        //         /*grabbing all expected indexes from the length of the NS*/ //{
                                        //         var nSFL_2_i  = {
                                        //             forLoop_0_i:0,
                                        //             forLoopLength:ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.limit,
                                        //             fn:function(   dev_obj   ){
                                        //                 ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.limitStart.add(   {value:ultraObject.iterify(   {iterify:[nSFL_2_i.forLoop_0_i,-1]}   )   }   )
                                        //             },
                                        //             args:dev_obj
                                        //         }
                                        //         ultraObject.forLoop(   nSFL_2_i    )
                                        //         // }  /**/
                                                
                                        //         /*testing to see if all indexes are represented in the newnSM*/ //{
                                        //         var nSFL_3_i   = {
                                        //             forLoop_0_i:0,
                                        //             forLoopLength:ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.limit,
                                        //             fn:function(   dev_obj   ){
                                        //                 console.log(   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.newnSM[   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.limitStart[   nSFL_3_i.forLoop_0_i][0]   ]   )
                                        //                 console.log(   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.limitStart[   nSFL_3_i.forLoop_0_i   ][0]   )
                                                        
                                        //                     /*we want to see if the newnSM at the index contains an item in limitStart*/ //{
                                        //                     if(   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.limitStart[   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.newnSM[   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.limitStart[   nSFL_3_i.forLoop_0_i][0]   ]   ] !== undefined   ){
                                                                
                                        //                         debugger
                                        //                         console.log(   'its there ill note it in limitStart'   )
                                        //                         ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.limitStart[   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.newnSM[   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.limitStart[   nSFL_3_i.forLoop_0_i][0]   ]   ][1] = -2
                                        //                         console.log(   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.limitStart   )
                                                                
                                                                
                                        //                     }
                                        //                     // }  /**/
                                                            
                                        //                 console.log('----')
                                        //             },
                                        //             args:dev_obj
                                        //         }
                                        //         ultraObject.forLoop(   nSFL_3_i     )
                                        //         // }  /**/
                                                
                                        //         /*checking limit start to see if nSM is valid*/ //{
                                        //         var nSFL_4_i   = {
                                        //             forLoop_0_i:0,
                                        //             forLoopLength:ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.limitStart,
                                        //             fn:function(   dev_obj   ){
                                        //                 console.log(   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.newnSM[   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.limitStart[   nSFL_4_i.forLoop_0_i][0]   ]   )
                                        //                 console.log(   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.limitStart[   nSFL_4_i.forLoop_0_i   ][0]   )
                                                        
                                        //                     /*we want to see if the newnSM at the index contains an item in limitStart*/ //{
                                        //                     if(   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.limitStart[   [   nSFL_4_i.forLoop_0_i]   ][1] === -1    ){
                                                                
                                                                
                                        //                         console.log(   'this  is invalid'   )
                                        //                         ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.newnSM.valid = 'false'
                                        //                         return 'premature'
                                                                
                                        //                     }
                                        //                     // }  /**/
                                                            
                                        //                 console.log('----')
                                        //             },
                                        //             args:dev_obj
                                        //         }
                                        //         ultraObject.forLoop(   nSFL_4_i     )
                                                
                                                
                                        //         if(   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.newnSM.valid === 'false'   ){
                                                    
                                                    
                                        //             console.log(   'bad nSM reset please'   )
                                        //             delete ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.limitStart
                                        //             delete ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.limit
                                        //             delete ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.newnSM
                                        //             delete ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.replacer
                                                    
                                        //         }
                                        //         // }  /**/
                                                                                    
                                        //     // }  /**/
                                            
                                        
                                        // // }  /**/
                                    // }  /**/
                                    
                                }
                                // }  /**/
                                
                                /*if the developer wants the digits to be changed*/ //{
                                if(   dev_obj.digits !== undefined   ){
    
                                    /* recreating the digits object from dev_obj*/ //{
                                    var nSFL_13_i = {
                                        forLoop_0_i:0,
                                        forLoopLength:dev_obj.digits.length,
                                        fn:function(   dev_obj   ){
                                            
                                            
                                            /* remove this if we come up with shorter syntax for the ultraObject*/ //{
                                            if(   ultraObject.isArray({type:dev_obj.digits[   nSFL_13_i.forLoop_0_i   ][1]})   ){
                                                
                                                
                                                dev_obj.digits[   nSFL_13_i.forLoop_0_i   ][1] = ultraObject.iterify({
                                                    iterify:dev_obj.digits[   nSFL_13_i.forLoop_0_i   ][1]
                                                })
                                                
                                                
                                            }
                                            // }  /**/
                                            
                                            
                                            ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].add({
                                                value:dev_obj.digits[   nSFL_13_i.forLoop_0_i   ][1],
                                                index:dev_obj.digits[   nSFL_13_i.forLoop_0_i   ][0]
                                            })
                                        },
                                        args:dev_obj //{}
                                    }
                                    delete ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].digits.newDigits
                                    ultraObject.forLoop(   nSFL_13_i   )
                                    var nSFL_6_i  = {
                                        forLoop_0_i:0,
                                        forLoopLength:ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.length,
                                        fn:function(   dev_obj   ){
                                            ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].digits.add({
                                                value:ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ][   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM[   nSFL_6_i.forLoop_0_i   ][0]   ],
                                                index:ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM[   nSFL_6_i.forLoop_0_i   ][1]
                                            })
                                        },
                                        args:dev_obj
                                    }
                                    ultraObject.forLoop(   nSFL_6_i    )
                                    // }  /**/
                                    
                                }
                                // }  /**/
                                                            
                            }
                            // }  /**/
                            
                            /*adding of current number to nS object*/ //{
                            ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].currentNumber = []
                            var nSFL_6_i = {
                                forLoop_0_i:0,
                                forLoopLength:ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM.length,
                                fn:function(   dev_obj   ){
                                    ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].currentNumber.push(   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ][   ultraObject.nS[   ultraObject.scope[nSNS_1_i]   ].nSM[   nSFL_6_i.forLoop_0_i   ][0]   ][0])
                                },
                                args:dev_obj //{}
                            }
                            ultraObject.forLoop(   nSFL_6_i   )
                            // }  /**/
                                
                            /*NS -scope */ //{
                            ultraObject.scope.minus(   {index:nSNS_1_i}   )
                            // }  /**/
                                
                        }
                        // }  /**/
                        
                        /*make a new numberSystem if the calling function doesnt have it*/ //{
                        else if(   dev_obj.nS === undefined   ){
    
                            /*this code blocks adds subtracts or modifies the numberSystem digits*/ //{
                            if(   dev_obj.operation === 'create'   ){
                                
                                /*nS +scope +self +abelast*/ //{
                                var nSNS_0_i = ultraObject.scope.add(   {value:ultraObject.nS.add(   {value:ultraObject.iterableObject()}   )}   )
                                ultraObject.nS.abelast.add(   {value:ultraObject.scope[nSNS_0_i]}   )
                                // }  /**/
                                
                                /*lets go create this nS!*/ //{
                                    
                                    /* restructing the dev obj in the target nS*/ //{
                                    ultraObject.nS[   ultraObject.scope[nSNS_0_i]   ].nSM = dev_obj.nSM
                                    
                                        /* I need to sort the nSM by nS access index first to make it easier for it to use for the rest of the API*/ //{
                                        ultraObject.sort({
                                            target: ultraObject.nS[   ultraObject.scope[nSNS_0_i]   ].nSM,
                                            algorithm:'bubble',
                                            compare:function(   dev_obj   ){
                                                
                                                    
                                                if(   dev_obj.val[dev_obj.index][0] > dev_obj.val[dev_obj.index+ 1][0]   ){
                                                    
                                                    
                                                    return 'true'
                                                    
                                                    
                                                }
                                                    
                                                
                                            },
                                            result:'true'
                                        })
                                        // }  /**/
                                        
                                    ultraObject.nS[   ultraObject.scope[nSNS_0_i]].digits = ultraObject.iterableObject()
                                    var nSFL_12_i = {
                                        forLoop_0_i:0,
                                        forLoopLength:dev_obj.digits.length,
                                        fn:function(   dev_obj   ){
                                            
                                            
                                            if(   ultraObject.isArray(   {type:dev_obj.digits[   nSFL_12_i.forLoop_0_i   ][1]}   )   ){
                                                
                                                
                                                dev_obj.digits[   nSFL_12_i.forLoop_0_i   ][1] = ultraObject.iterify(   {iterify:dev_obj.digits[   nSFL_12_i.forLoop_0_i   ][1]}   )
                                                
                                                                                            
                                            }
                                            
                                            
                                            ultraObject.nS[   ultraObject.scope[nSNS_0_i]   ].digits.add({
                                                value:dev_obj.digits[   nSFL_12_i.forLoop_0_i   ][1],
                                                index:dev_obj.digits[   nSFL_12_i.forLoop_0_i   ][0]
                                            })
                                        },
                                        args:dev_obj //{}
                                    }
                                    ultraObject.forLoop(   nSFL_12_i  )
                                    // }  /**/
                                    
                                    /*looping through  nSM to recreate the string!*/ //{
                                        
                                        // /*node mode choice thread nSMValidator */ //{
                                            /*an important check to make sure the nSM is availble!*/ //{
                                            // ultraObject.propertyUndefined({
                                            //         target:ultraObject.nS[   ultraObject.scope[nSNS_0_i]],
                                            //         expected:ultraObject.iterify({iterify:["nSM","length"]}),
                                            //         noVal:{'a':'b'}
                                            // })
                                            
                                        // var nSobjI_0_i = ultraObject.scope.add(   {value:ultraObject.objIO.abelast[   ultraObject.objIO.abelast.length-1   ]}   )
                                            // }  /**/
                                        // }  /**/
                                        
                                        var nSFL_0_i = {
                                            forLoop_0_i:0,
                                            forLoopLength:ultraObject.nS[   ultraObject.scope[nSNS_0_i]].nSM.length,
                                            fn:function(   dev_obj   ){
                                            
                                            /* adding the digits according to the nSM*/ //{
                                            ultraObject.nS[   ultraObject.scope[nSNS_0_i]].add({
                                                value:ultraObject.nS[   ultraObject.scope[nSNS_0_i]].digits[   ultraObject.nS[   ultraObject.scope[nSNS_0_i]   ].nSM[   nSFL_0_i.forLoop_0_i   ][1]   ],
                                                index:ultraObject.nS[   ultraObject.scope[nSNS_0_i]   ].nSM[   nSFL_0_i.forLoop_0_i   ][0]
                                            })
                                            // }  /**/
                                                                                            
                                            },
                                            args:dev_obj //{}
                                        }
                                        // /*node mode choice thread nSMPerformance */ //{
                                        ultraObject.forLoop(   nSFL_0_i   )
                                        // }  /**/
                                        
                                        // /*node mode choice thread nSMValidator */ //{
                                        // if(   !ultraObject.isPrimitive(   {type:ultraObject.objIO[   ultraObject.scope[nSobjI_0_i]   ].result}   )   ){
                                            
                                            
                                        //     if(   ultraObject.objIO[   ultraObject.scope[nSobjI_0_i]   ].result['a'] !== 'b'   ){
                                                
                                                                                            
                                        //         ultraObject.forLoop(   nSFL_0_i   )
                                                
                                                
                                        //     }
                                        
                                        
                                        // }
                                        
                                        
                                        // else if(   ultraObject.isPrimitive(   {type:ultraObject.objIO[   ultraObject.scope[nSobjI_0_i]   ].result}   )   ){
                                            
                                            
                                        //     // ultraObject.forLoop(   nSFL_11_i   )
                                        //     // hopefully we will never need that
                                        //     ultraObject.forLoop(   nSFL_0_i   )
                                            
                                        // }
                                        // }  /**/
                                        
                                        //*node mode choice thread nSMValidator */ //{
                                            /*objIO -scope -self -abelast */ //{
                                                // ultraObject.objIO.minus(   {index:ultraObject.scope[nSobjI_0_i]}   )
                                                // ultraObject.objIO.abelast.minus(   {index:ultraObject.objIO.abelast.length -1}   )
                                                // ultraObject.scope.minus(   {index:nSobjI_0_i}   )
                                            // }  /**/
                                        // }  /**/
                                        
                                    // }  /**/
                                     
                                // }  /**/
    
                                
                                /*adding of current number to nS object*/ //{
                                // to access a digit in the actaal nS ultraObject.nS[   ultraObject.scope[nSNS_0_i]   ].nSM[   nSFL_6_i.forLoop_0_i   ][0] by iteration
                                ultraObject.nS[   ultraObject.scope[nSNS_0_i]   ].currentNumber = []
                                var nSFL_6_i = {
                                    forLoop_0_i:0,
                                    forLoopLength:ultraObject.nS[   ultraObject.scope[nSNS_0_i]   ].nSM.length,
                                    fn:function(   dev_obj   ){
                                        ultraObject.nS[   ultraObject.scope[nSNS_0_i]   ].currentNumber.push(   ultraObject.nS[   ultraObject.scope[nSNS_0_i]   ][   ultraObject.nS[   ultraObject.scope[nSNS_0_i]   ].nSM[   nSFL_6_i.forLoop_0_i   ][0]   ][0])
                                    },
                                    args:dev_obj //{}
                                }
                                ultraObject.forLoop(   nSFL_6_i   )
                                // }  /**/
                                    
                                /*NS -scope */ //{
                                ultraObject.scope.minus(   {index:nSNS_0_i}   )
                                // }  /**/
                                
                            }
                            // }  /**/
                            
                        }
                        // }  /**/
                        
                        /* convert the number to a decimal */ //{
                        // this will also be used for math operations
                        // the smallest digit is at 0 the largest is at length - 1, sometimes we need to know what the largest digit is i hope i made the right choice future
                        if(   dev_obj.operation === 'decimal'   ){
                            
                            /*NS +scope */ //{
                            var nSNS_2_i = ultraObject.scope.add(   {value:dev_obj.nS}   )
                            // }  /**/
                            
                            /*converting the number to decimal */ //{
                            if(   dev_obj.conversion === 'to'   ){
                                
                                
                                if(   !ultraObject.isitO(   {value:ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ].decimal}   )   ){
                                    
                                    
                                    ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ].decimal = ultraObject.iterableObject()
                                    
                                    
                                }
                                
                                
                                ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ].decimal.currentNumber = 0
                                ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ].decimal.range = 1
                                var nSFL_7_i = {
                                    forLoop_0_i:-ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ].nSM.length,
                                    forLoopLength:0,
                                    fn:function(   dev_obj   ){
                                        //1
                                        // ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ].decimal.add(   {value:ultraObject.nS[   [   ultraObject.scope[nSNS_2_i]   ]   ][   (-nSFL_7_i.forLoop_0_i)-1   ]}   )
                                        //2 actual update
                                        ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ].decimal.currentNumber += (   ultraObject.nS[   [   ultraObject.scope[nSNS_2_i]   ]   ][   ultraObject.nS[   [   ultraObject.scope[nSNS_2_i]   ]   ].nSM[   (-nSFL_7_i.forLoop_0_i) -1   ][0]   ][0] - ultraObject.nS[   [   ultraObject.scope[nSNS_2_i]   ]   ][   ultraObject.nS[   [   ultraObject.scope[nSNS_2_i]   ]   ].nSM[   (-nSFL_7_i.forLoop_0_i) -1   ][0]   ][1]   ) * (    ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ].decimal.range   )
                                        //3 modifying the range for the next digit
                                        ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ].decimal.range *=( ultraObject.nS[   [   ultraObject.scope[nSNS_2_i]   ]   ][   ultraObject.nS[   [   ultraObject.scope[nSNS_2_i]   ]   ].nSM[   (-nSFL_7_i.forLoop_0_i) -1   ][0]   ][2]  - ultraObject.nS[   [   ultraObject.scope[nSNS_2_i]   ]   ][   ultraObject.nS[   [   ultraObject.scope[nSNS_2_i]   ]   ].nSM[   (-nSFL_7_i.forLoop_0_i) -1   ][0]   ][1]   )
                                    },
                                    args:dev_obj //{}
                                }
                                ultraObject.forLoop(   nSFL_7_i   )
                                ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ].decimal.range = 1
                                
                                
                            }
                            // }  /**/
                            
                            /*converting the decimal number to the numberSystem */ //{
                            //we get the decimal number now we should go to the biggest to smallest the biggest digit is at digit 0 representing all digits, but you must have that max range and you dont know how big the number is so you must start from the back
                            else if(   dev_obj.conversion === 'from'   ){
                                
                                
                                if(   !ultraObject.isitO(   {value:ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ].decimal}   )   ){
                                    
                                    
                                    ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ].decimal = ultraObject.iterableObject()
                                    
                                    
                                }
                                
                                                        
                                ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ].decimal.currentNumber = dev_obj.currentNumber
                                ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ].decimal.range = 1
                                
                                /*we going to preserve the actual number numberSystem*/ //{
                                if(   dev_obj.prevent === 'true'   ){
                                    
                                    
                                    
                                }
                                // }  /**/
                                
                                /*we going to replace the actual number numberSystem*/ //{
                                else if(   dev_obj.prevent !== 'true'   ){
                                    
                                    
                                    
                                    var nSFL_9_i = {
                                        fn:function(   dev_obj   ){
                                            ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ].decimal.range *= ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ][   ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ].nSM[   -nSFL_9_i.forLoop_0_i   ][0]   ][2] - ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ][   ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ].nSM[   -nSFL_9_i.forLoop_0_i   ][0]   ][1]
                                        }
                                    }
                                    var nSFL_8_i = {
                                        forLoop_0_i: 0,
                                        forLoopLength:ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ].nSM.length,
                                        fn:function(   dev_obj   ){
                                            ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ][   ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ].nSM[   nSFL_8_i.forLoop_0_i   ][0]   ][0] = ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ][   ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ].nSM[   nSFL_8_i.forLoop_0_i   ][0]   ][1]
                                            
                                            nSFL_9_i.forLoop_0_i =  -(ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ].nSM.length - 1 )
                                            nSFL_9_i.forLoopLength = 0-nSFL_8_i.forLoop_0_i
                                            nSFL_9_i.dev_obj = dev_obj
                                            ultraObject.forLoop(   nSFL_9_i   )
                                            
                                            /*at this point we have the range to work with now computing the actual digit*/ //{
                                            // console.log(   ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ].decimal.range,'what it takes to get to the next digit'   )
                                            if(   ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ].decimal.currentNumber >= ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ].decimal.range   ){
                                                
                                                
                                                ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ][   ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ].nSM[   nSFL_8_i.forLoop_0_i   ][0]   ][0] += Math.floor(   ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ].decimal.currentNumber/ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ].decimal.range   )
                                                ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ].decimal.currentNumber -= ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ].decimal.range  * ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ][   ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ].nSM[   nSFL_8_i.forLoop_0_i   ][0]   ][0]
                                                //PROBLEM replace current digit with the operation with Math.floor
                                                
                                                
                                            }
                                            ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ].decimal.range = 1
                                            // }  /**/
                                            
                                        },
                                        args:dev_obj //{}
                                    }
                                    ultraObject.forLoop(   nSFL_8_i   )
                                    ultraObject.nS[   [ultraObject.scope[nSNS_2_i ]]   ].decimal.range = 1
                                    
                                }
                                // }  /**/
                                    
                            }
                            // }  /**/
                            
                            
                        }
                        // } /**/
                        
                        /* update the currentNumber*/ //{
                        if(   dev_obj.operation === 'update'   ){
                            
                            
                            var nSNS_3_i = dev_obj.nS
                            ultraObject.nS[   ultraObject.scope[nSNS_3_i]   ].currentNumber = []
                            var nSFL_10_i = {
                                forLoop_0_i:0,
                                forLoopLength:ultraObject.nS[   ultraObject.scope[nSNS_3_i]   ].nSM.length,
                                fn:function(   dev_obj   ){
                                    ultraObject.nS[   ultraObject.scope[nSNS_3_i]   ].currentNumber.push(   ultraObject.nS[   ultraObject.scope[nSNS_3_i]   ][   ultraObject.nS[   ultraObject.scope[nSNS_3_i]   ].nSM[    nSFL_10_i.forLoop_0_i   ][0]   ][0])
                                },
                                args:dev_obj //{}
                            }
                            ultraObject.forLoop(   nSFL_10_i   )
                            
                            
                        }
                        // }  /**/
                        
                    
                    
                    
                }//makes a customized number system for the needs of the eCSearch multiple testing required by prefill form
                function interrogation(   dev_obj   ){
                    //throw the result in here later
                    /* ablelasts
                        1 for qC
                    */
                    /*
                        .proof - an array giving meaningful pieces of what to look at
                            to determine if the element is the right element that represents first name I might want proof which is
                                the element itself
                                the parent
                                the children
                                the siblngs
                            these are the object I will look at
                            each index is held in an itO
                                0. the name of the object
                                1, the actual object
                        .facts an array
                            this is how I interrogate the objects
                                valuePhrase
                                className (partialMatch)
                                id
                                tagName
                                hidden (true or false)
                            and you will specify this is an index in an itO corresponding to the the items in proof
                            the first index represents the proof object , the second index is an array containing the modules and specialized test, if module has a function, then its specialized otherwise, use deault function
                                each function should return values that help other modules on what to do next
                                
                        .pointValue if interrogation at facts passes this is incremented by one
                            v1, just use a simple counting mechanism
                            v2, use an itO for more complex counting system almost working like PAM in linux
                            if not a string or undefined it sets to use v1
                        ultraObject.qC question Chart
                            this object helps to visualize the dev_obj, its mainly the dev_obj with some additional
                                .pointValue
                                    if dev_obj.pointValue = v1, make 0, if dev_obj.pointValue =v2 use an itO
                                .passOn
                                    an itO helps the modules of the developer communicate with one another
                                    .proofObject
                                        an itO representing the proof object the API is looking at
                                    .factModule
                                        a sring representing the module used to evalute the proof object
                                .proof an itO from dev_obj.proof
                                    0 the proof object name
                                    1. the proof object reference
                                .facts
                                    the proof object name from facts is turned into a proerty name from the qC
                                    the proof object fact modules are places in ito
                                        0 module name
                                        1 module function or interrogation default
                        dev_obj
                            .keyword  ins string based comparision this is the keyword in quesiton
                            .pM_0_i: the partialMatch dev_obj with out compTo or compAgn
                            .care: an itO if multiple objects are available if no is at the index, the pointValue is left alone, if its undeinfed all are considered
                    */
                    
                    /*adding the first qC along with an abelast*/ //{
                    var iQC_0_i = ultraObject.scope.add(   {value:ultraObject.qC.add(   {value:ultraObject.iterableObject()}   )}   )
                    ultraObject.qC.abelast.add(   {value:ultraObject.scope[iQC_0_i]}   )
                    // }  /**/
                    

                    /*setting the point value in the qC*/ //{
                    if(   dev_obj.pointValue === 'v1'   ){
                        
                        
                        ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].pointValue = 0
                        
                        
                    }
                    
                    
                    else if(   dev_obj.pointValue === 'v2'   ){
                        
                        
                        ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].pointValue = ultraObject.iterableObject()
                        
                        
                    }
                    // } /**/
                    
                    /*setting up proof in the qC*/ //{
                    ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof = ultraObject.iterableObject()
                    var iFL_0_i = {
                        forLoop_0_i:0,
                        forLoopLength:dev_obj.proof.length,
                        fn:function(   dev_obj   ){
                            ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof.add(   {value:ultraObject.iterify(   {iterify:dev_obj.proof[iFL_0_i.forLoop_0_i]}   )}   )
                        },
                        args:{
                            proof:dev_obj.proof
                        }
                    }
                    ultraObject.forLoop(   iFL_0_i   )
                    // } /**/
                    
                    /*setting up facts in the qC*/ //{
                    var iFL_1_i = {
                        forLoop_0_i:0,
                        forLoopLength:dev_obj.facts.length,
                        fn:function(   dev_obj   ){
                            ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   dev_obj.facts[iFL_1_i.forLoop_0_i][0]   ] = ultraObject.iterify(   {iterify:dev_obj.facts[iFL_1_i.forLoop_0_i][1]}   )
                        },
                        args:{
                            facts:dev_obj.facts
                        }
                    }
                    ultraObject.forLoop(   iFL_1_i   )
                    // } /**/
                    
                    /*providing important qC metadata for the developer*/ //{
                        ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn = ultraObject.iterableObject()
                    // } /**/
                    
                    /*setting up the debugging object for the developer*/ //{
                        if(   dev_obj.debug === 'true'   ){
                            
                            
                            ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].debuggerDB = ultraObject.iterableObject()
                            ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].debuggerDB.add({value:dev_obj.debug})
                            
                            
                        }
                     // } /**/
                    
                    // debugger
                    /*beginning interrogation*/ //{
                    var iFL_2_i = {
                        forLoop_0_i:0,
                        forLoopLength:dev_obj.proof.length,
                        fn:function(   dev_obj   ){
                            /*looking at the interrogation facts for each proof object*/
                            
                                /* grabbing the proofObject*/ // {
                                ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject = ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i]
                                // } /**/
                        
                            /* debugging*/ // {
                            if(   dev_obj.debug === 'true'   ){
                                
                                
                                ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].debuggerDB.add({
                                    value:ultraObject.iterify({
                                        iterify:[
                                            ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[0],
                                            ultraObject.iterableObject(),
                                            0
                                        ]
                                    })
                                    
                                })
                              
                                
                                
                            }
                            
                            // } /**/
                            
                            console.group(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[0] +' proofObject'   )
                                iFL_3_i.forLoopLength = ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[0]   ].length
                                ultraObject.forLoop(   iFL_3_i   )
                            console.groupEnd()
                            /**/
                        },
                        args:{debug:dev_obj.debug}
                    }
                    var iFL_3_i = {
                        forLoop_0_i:0,
                        fn:function(   dev_obj   ){
                            
                            /*actual use of each interrogaton function ot interrogate*/
                            ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.factModule = ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][0]
                            
                            
                            
                            if(   dev_obj.debug === 'true'   ){
                                
                                
                                ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].debuggerDB[   iFL_2_i.forLoop_0_i + 1][1].add({
                                    value:ultraObject.iterify({
                                        iterify:[
                                            ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][0],
                                            0
                                        ]
                                    })
                                    
                                })
                                
                                
                                
                            }
                            
                            /*use developer given*/ //{
                            if(   ultraObject.isFunction(   {type:ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][1]}   )   ){
                                
                                
                                ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][1](   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn   )
                               
                                                        
                            }
                            // } /**/
                            
                            /*use defaults instead */ //{
                            else if(   !ultraObject.isFunction(   {type:ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][1]}   )   ){
                                
                                /* tagName module */ // {
                                if(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][0] === 'tagName'   ){
                                    console.group(   'tagName'   )
                                
                                    /* accessing desired tagNames given by developer */ // {
                                    ultraObject.qC[   0   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[0]   ].tagCompAgn =  ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][1].ultraObject.tagOptions
                                    
                                    /* the element and the desired tags needed by the tagName module */ // {
                                    ultraObject.objInvloved(
                                        ultraObject.iterify({
                                            iterify:[
                                                ultraObject.qC[0][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[0]   ].tagCompAgn,
                                                ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[1],
                                            ]
                                        })
                                    )
                                    
                                        /*objIO -self -ablelast   */ //{
                                        ultraObject.objIO.minus(   {index:ultraObject.objIO.length-1}   )
                                        ultraObject.objIO.abelast.minus(   {index:ultraObject.objIO.abelast.length-1}   )
                                        // }  /**/
                                    // } /**/
                                                                        
                                    // } /**/
                                    
                                    /* default tagName module evalution */ // {
                                    if(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[1].length === undefined   ){
                                    
                                    
                                        var iBOOL_0_i = {0:false}
                                        iBOOL_0_i = ultraObject.severalOr({
                                            compTo: ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[1][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][0]   ].toLowerCase(),
                                            compAgn:ultraObject.qC[   0   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[0]   ].tagCompAgn,
                                            boolean:iBOOL_0_i,
                                            which:0
                                        })
                                        
                                        
                                        if(   iBOOL_0_i[0]   ){
                                            
                                            
                                            ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].pointValue += 1
                                            
                                            
                                            if(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].debuggerDB[0] === 'true'   ){
                                                
                                                
                                                 ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].debuggerDB[   iFL_2_i.forLoop_0_i + 1][1][   iFL_3_i.forLoop_0_i   ][1] += 1
                                                 ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].debuggerDB[   iFL_2_i.forLoop_0_i + 1][2] += 1
                                                
                                                
                                            }
                                         
                                                
                                        }
                                        
                                        
                                        console.log(   iBOOL_0_i   )
                                            
                                    }
                                    
                                    
                                    else if(   ultraObject.isitO(   {type:ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[1]}   )   ){
                                        
                                                                                
                                        var iFL_6_i = {
                                            forLoop_0_i:0,
                                            forLoopLength:ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[1].length,
                                            fn:function(   dev_obj   ){
                                                

                                                if(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][1].ultraObject.care === undefined   ){


                                                    ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][1].ultraObject.care  = ultraObject.iterableObject()
                                                    
                                                    
                                                }
                                                
                                                
                                                if(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][1].ultraObject.care[   iFL_6_i.forLoop_0_i   ] !== 'no'   ){
                                                    
                                                    
                                                    var iBOOL_1_i = {0:false}
                                                    iBOOL_1_i = ultraObject.severalOr({
                                                        compTo: ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[1][   iFL_6_i.forLoop_0_i   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][0]   ].toLowerCase(),
                                                        compAgn:ultraObject.qC[   0   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[0]   ].tagCompAgn,
                                                        boolean:iBOOL_1_i,
                                                        which:0
                                                    })
                                                    
                                                    
                                                    if(   iBOOL_1_i[0]   ){
                                                        
                                                        
                                                        ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].pointValue += 1
                                                        
                                                                    
                                                        if(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].debuggerDB[0] === 'true'   ){
                                                            
                                                            
                                                            ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].debuggerDB[   iFL_2_i.forLoop_0_i + 1][1][   iFL_3_i.forLoop_0_i   ][1] += 1
                                                            ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].debuggerDB[   iFL_2_i.forLoop_0_i + 1][2] += 1
                                                            
                                                            
                                                        }
                                                     
                                                            
                                                    }
                                                    
                                                    
                                                    console.log(   iBOOL_1_i   )
                                                
                                                
                                                }
                                                
                                                
                                            },
                                            args:dev_obj
                                        }
                                        ultraObject.forLoop(   iFL_6_i   )
                                        
                                        
                                    }
                                    // } /**/
                                    console.groupEnd()
                                }
                                // } /**/
                                
                                /* hidden module */ // {
                                else if(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][0] === 'hidden'   ){
                                    console.group(   'hidden'   )
                                    
                                    /* if the element is not hidden add one to the pointValue */ // {
                                    if(   !ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[1][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][0]   ]   ){
                                        
                                        
                                        ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].pointValue += 1
                                        
                                        
                                        if(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].debuggerDB[0] === 'true'   ){
                                            
                                            
                                             ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].debuggerDB[   iFL_2_i.forLoop_0_i + 1][1][   iFL_3_i.forLoop_0_i   ][1] += 1
                                             ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].debuggerDB[   iFL_2_i.forLoop_0_i + 1][2] += 1
                                            
                                            
                                        }
                                        
                                        
                                    }
                                    // } /**/
                                    
                                    console.groupEnd()
                                }
                                // } /**/
                                
                                /* className module */ // {
                                else if(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][0] === 'className'   ){
                                    console.group(   'className'   )
                                    
                                    /* keyword to compare against className */ // {
                                    console.log(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][1].ultraObject.keyword   )
                                    // } /**/
                                    
                                    /* pulling classes from the DOM element */ // {
                                    if(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[1].length === undefined   ){
                                        
                                        /* if there is only one element */ // {
                                        ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[ultraObject.scope[iQC_0_i]].passOn.proofObject[0]   ].classes =  ultraObject.iterify({
                                                iterify:ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[1][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][0]   ].split(' ')
                                            })
                                        var  iBOOL_2_i = {0:false}
                                        iBOOL_2_i = ultraObject.severalOr({
                                            compTo:ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][1].ultraObject.keyword,
                                            compAgn :ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[0]   ].classes,
                                            boolean:iBOOL_2_i,
                                            which:0,
                                            how:function(   dev_obj   ){
                                                
                                                /* needed for partialMatch className module */ // {
                                                ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[0]   ].iPM_0_i = {
                                                        compTo:dev_obj.compTo,
                                                        compAgn: dev_obj.compAgnI
                                                }
                                                
                                                /* grabbing developer args for partialMatch */ // {
                                                iFL_4_i.forLoopLength = ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][1].ultraObject.pM_0_i.length
                                                ultraObject.forLoop(   iFL_4_i   )
                                                // } /**/
                                                
                                                ultraObject.partialMatch(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[0]   ].iPM_0_i   )
                                                // } /**/
                                                ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].satisfy = ultraObject.nE[ultraObject.nE          .length-1].satisfy
                                                ultraObject.nE.minus(   {index:ultraObject.nE.length-1}   )
                                                ultraObject.nE.abelast.minus(   {index:ultraObject.nE.abelast.length-1}   )
                                                
                                                
                                                if(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].satisfy === 'true'   ){
                                                    

                                                    ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].pointValue  += 1
                                                    
                                                            
                                                    if(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].debuggerDB[0] === 'true'   ){
                                                        
                                                        
                                                         ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].debuggerDB[   iFL_2_i.forLoop_0_i + 1][1][   iFL_3_i.forLoop_0_i   ][1] += 1
                                                         ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].debuggerDB[   iFL_2_i.forLoop_0_i + 1][2] += 1
                                                        
                                                        
                                                    }
                                                            
                                                                                                        
                                                }
                                                // debugger
                                                
                                                
                                                // ultraObject.misc.minus(   {index:ultraObject.misc.length-1}   )
                                                // ultraObject.misc.abelast.minus(   {index:ultraObject.misc.abelast.length-1}   )
                                            },
                                            result:'a'
                                        })
                                        console.log(   iBOOL_2_i   )
                                        // } /**/
                                        
                                    }
                                    
                                    
                                    else if(   ultraObject.isitO(   {type:ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[1]}   )   ){
                                        
                                        /* looking at specific different parents */ // {
                                        
                                            /* specs whether partial match should be checked for  */ // {
                                            console.log(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][1].ultraObject.care   )
                                            // } /**/
                                            
                                            iFL_7_i.forLoopLength = ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[1].length
                                            ultraObject.forLoop(   iFL_7_i   )
                                        // } /**/
                                                                            
                                    }
                                    // } /**/
                                    console.groupEnd()
                                }
                                // } /**/
                                
                                /* id module */ // {
                                else if(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][0] === 'id'   ){
                                    
                                    
                                    console.group(   'id'   )

                                                                        
                                    if(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[1].length === undefined   ){
                                        
                                        /* pulling  id from the DOM element */ // {
                                        ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[0]   ].ids =  ultraObject.iterify({
                                                iterify:ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[1][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][0]   ].split(' ')
                                            })
                                        // } /**/
                                        
                                        /* keyword to compare against  id*/ // {
                                        console.log(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][1].ultraObject.keyword   )
                                        // } /**/
                                        
                                        var iBOOL_4_i = {0:false}
                                        iBOOL_4_i = ultraObject.severalOr({
                                            compTo: ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][1].ultraObject.keyword,
                                            compAgn: ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[0]   ].ids,
                                            boolean:iBOOL_4_i,
                                            which:0,
                                            how:function(   dev_obj   ){
                                                
                                                /* needed for partialMatch className module */ // {
                                                ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[0]   ].iPM_0_i = {
                                                        compTo:dev_obj.compTo,
                                                        compAgn: dev_obj.compAgnI
                                                }
                                                
                                                /* grabbing developer args for partialMatch */ // {
                                                iFL_5_i.forLoopLength = ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][1].ultraObject.pM_0_i.length,
                                                ultraObject.forLoop(   iFL_5_i   )
                                                // } /**/
                                                
                                                ultraObject.partialMatch(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[0]   ].iPM_0_i   )
                                                // } /**/

                                                ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].satisfy = ultraObject.nE[ultraObject.nE          .length-1].satisfy
                                                ultraObject.nE.minus(   {index:ultraObject.nE.length-1}   )
                                                ultraObject.nE.abelast.minus(   {index:ultraObject.nE.abelast.length-1}   )
                                                
                                                
                                                if(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].satisfy === 'true'   ){
                                                    
                                                    
                                                    ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].pointValue  += 1
                                                    
                                                    
                                                    if(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].debuggerDB[0] === 'true'   ){
                                                        
                                                        
                                                         ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].debuggerDB[   iFL_2_i.forLoop_0_i + 1][1][   iFL_3_i.forLoop_0_i   ][1] += 1
                                                         ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].debuggerDB[   iFL_2_i.forLoop_0_i + 1][2] += 1
                                                        
                                                        
                                                    }
                                                    
                                                    
                                                }
                                                // debugger
                                                
                                                // ultraObject.misc.minus(   {index:ultraObject.misc.length-1}   )
                                                // ultraObject.misc.abelast.minus(   {index:ultraObject.misc.abelast.length-1}   )
                                            },
                                            result:'a'
                                        })
                                        console.log(   iBOOL_4_i   )
                                    
                                    
                                    }
                                    
                                    
                                    else if(   ultraObject.isitO(   {type:ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[1]}   )   ){
                                        
                                        
                                        iFL_8_i.forLoopLength = ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[1].length
                                        ultraObject.forLoop(   iFL_8_i   )

                                        
                                    }
                                    
                                    
                                    console.groupEnd()
                                }
                                // } /**/
                                
                                /* exist module */ // {
                                else if(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][0] === 'exist'   ){
                                    console.group(   'exist'   )
                                    
                                    /* if the element exists add one to the point value */ // {
                                    if(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[1].length === undefined   ){
                                    
                                    
                                        if(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[1] !== undefined   ){
                                            
                                        
                                            ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].pointValue += 1
                                            
                                            
                                            if(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].debuggerDB[0] === 'true'   ){
                                                
                                                
                                                 ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].debuggerDB[   iFL_2_i.forLoop_0_i + 1][1][   iFL_3_i.forLoop_0_i   ][1] += 1
                                                 ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].debuggerDB[   iFL_2_i.forLoop_0_i + 1][2] += 1
                                                
                                                
                                            }
                                            
                                            
                                        }
                                        
                                        
                                    }
                                    
                                    
                                    else if(    ultraObject.isitO(   {type:ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[1]}   )   ){
                                        
                                        
                                        iFL_10_i.forLoopLength = ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[1].length,
                                        ultraObject.forLoop(   iFL_10_i   )
                                    
                                    
                                    }
                                    // } /**/
                                    console.groupEnd()
                                }
                                // } /**/
                                
                            }
                            // } /**/
                        },
                        args:{debug:dev_obj.debug}
                    }
                    
                    /* grabbing developer args for partialMatch */ // {
                    var iFL_4_i = {
                        forLoop_0_i:0,
                        fn:function(   dev_obj   ){
                            ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[0]   ].iPM_0_i[   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][1].ultraObject.pM_0_i[iFL_4_i.forLoop_0_i][0]   ] = ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][1].ultraObject.pM_0_i[iFL_4_i.forLoop_0_i][1]
                        },
                        args:{}
                    }
                    // } /**/
                    var iFL_7_i = {
                        forLoop_0_i:0,
                        fn:function(   dev_obj   ){
                            
                            
                            if(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][1].ultraObject.care === undefined   ){


                                ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][1].ultraObject.care  = ultraObject.iterableObject()
                                
                                
                            }
                            
                            
                            if(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][1].ultraObject.care[   iFL_7_i.forLoop_0_i   ] !== 'no'   ){
                                    
                                    
                                    ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[ultraObject.scope[iQC_0_i]].passOn.proofObject[0]   ].classes =  ultraObject.iterify({
                                            iterify:ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[1][   iFL_7_i.forLoop_0_i   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][0]   ].split(' ')
                                        })
                                    var iBOOL_3_i = {0:false}
                                    iBOOL_3_i = ultraObject.severalOr({
                                        compTo: ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][1].ultraObject.keyword,
                                        compAgn: ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[0]   ].classes,
                                        boolean:iBOOL_3_i,
                                        which:0,
                                        how:function(   dev_obj   ){
                                            
                                            /* needed for partialMatch className module */ // {
                                            ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[0]   ].iPM_0_i = {
                                                    compTo:dev_obj.compTo,
                                                    compAgn: dev_obj.compAgnI
                                            }
                                            
                                            /* grabbing developer args for partialMatch */ // {
                                            iFL_6_i.forLoopLength = ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][1].ultraObject.pM_0_i.length
                                            ultraObject.forLoop(   iFL_6_i   )
                                            // } /**/
                                            
                                            ultraObject.partialMatch(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[0]   ].iPM_0_i   )
                                            // } /**/
                                                     
                                            ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].satisfy = ultraObject.nE[ultraObject.nE      .length-1].satisfy
                                            ultraObject.nE.minus(   {index:ultraObject.nE.length-1}   )
                                            ultraObject.nE.abelast.minus(   {index:ultraObject.nE.abelast.length-1}   )
                                            
                                            
                                            if(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].satisfy === 'true'   ){
                                                
                                                
                                                ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].pointValue  += 1
                                                

                                                if(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].debuggerDB[0] === 'true'   ){
                                                    
                                                    
                                                     ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].debuggerDB[   iFL_2_i.forLoop_0_i + 1][1][   iFL_3_i.forLoop_0_i   ][1] += 1
                                                     ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].debuggerDB[   iFL_2_i.forLoop_0_i + 1][2] += 1
                                                    
                                                    
                                                }
                                                
                                                
                                            }
                                            // debugger
                                            
                                            
                                            // ultraObject.misc.minus(   {index:ultraObject.misc.length-1}   )
                                            // ultraObject.misc.abelast.minus(   {index:ultraObject.misc.abelast.length-1}   )
                                        },
                                        result:'a'
                                    })
                                    console.log(   iBOOL_3_i   )
                                    
                                    
                                }
                            
                            
                            
                            
                        },
                        args:dev_obj //{}
                    }
                    var iFL_6_i = {
                        forLoop_0_i:0,
                        fn:function(   dev_obj   ){
                            ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[0]   ].iPM_0_i[   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][1].ultraObject.pM_0_i[iFL_6_i.forLoop_0_i][0]   ] = ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][1].ultraObject.pM_0_i[iFL_6_i.forLoop_0_i][1]
                        },
                        args:{}
                    }
                    var iFL_5_i = {
                        forLoop_0_i:0,
                        fn:function(   dev_obj   ){
                            ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[0]   ].iPM_0_i[   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][1].ultraObject.pM_0_i[iFL_5_i.forLoop_0_i][0]   ] = ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][1].ultraObject.pM_0_i[iFL_5_i.forLoop_0_i][1]
                        },
                        args:{}
                    }
                    var iFL_8_i = {
                        forLoop_0_i:0,
                        fn:function(   dev_obj   ){
                            
                            
                            if(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][1].ultraObject.care === undefined   ){


                                ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][1].ultraObject.care = ultraObject.iterableObject()
                                
                                
                            }
                            
                            
                            if(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][1].ultraObject.care[   iFL_8_i.forLoop_0_i   ] !== 'no'   ){
                                
                                
                                /* pulling  id from the DOM element */ // {
                                ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[0]   ].ids =  ultraObject.iterify({
                                        iterify:ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[1][   iFL_8_i.forLoop_0_i   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][0]   ].split(' ')
                                    })
                                // } /**/
                                
                                
                                var iBOOL_5_i = {0:false}
                                iBOOL_5_i = ultraObject.severalOr({
                                    compTo: ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][1].ultraObject.keyword,
                                    compAgn: ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[0]   ].ids,
                                    boolean:iBOOL_5_i,
                                    which:0,
                                    how:function(   dev_obj   ){
                                        
                                        /* needed for partialMatch className module */ // {
                                        ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[0]   ].iPM_0_i = {
                                                compTo:dev_obj.compTo,
                                                compAgn: dev_obj.compAgnI
                                        }
                                        
                                        /* grabbing developer args for partialMatch */ // {
                                        iFL_9_i.forLoopLength = ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][1].ultraObject.pM_0_i.length
                                        ultraObject.forLoop(   iFL_9_i   )
                                        // } /**/
                                        
                                        ultraObject.partialMatch(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[0]   ].iPM_0_i   )
                                        // } /**/
                                        
                                        
                                        ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].satisfy = ultraObject.nE[ultraObject.nE.length-1].satisfy
                                        ultraObject.nE.minus(   {index:ultraObject.nE.length-1}   )
                                        ultraObject.nE.abelast.minus(   {index:ultraObject.nE.abelast.length-1}   )
                                        
                                        
                                        if(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].satisfy === 'true'   ){
                                            
                                        
                                            ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].pointValue  += 1
                                            
                                            
                                            if(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].debuggerDB[0] === 'true'   ){
                                                
                                                
                                                 ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].debuggerDB[   iFL_2_i.forLoop_0_i + 1][1][   iFL_3_i.forLoop_0_i   ][1] += 1
                                                 ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].debuggerDB[   iFL_2_i.forLoop_0_i + 1][2] += 1
                                                
                                                
                                            }
                                            
                                            
                                        }
                                        
                                        

                                        // ultraObject.misc.minus(   {index:ultraObject.misc.length-1}   )
                                        // ultraObject.misc.abelast.minus(   {index:ultraObject.misc.abelast.length-1}   )
                                    },
                                    result:'a'
                                })
                                console.log(   iBOOL_5_i   )
                                
                                
                            }
                            
                            
                        },
                        args:dev_obj //{}
                    }
                    var iFL_9_i = {
                        forLoop_0_i:0,
                        fn:function(   dev_obj   ){
                            ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[0]   ].iPM_0_i[   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][1].ultraObject.pM_0_i[iFL_9_i.forLoop_0_i][0]   ] = ultraObject.qC[   ultraObject.scope[iQC_0_i]   ][   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].proof[iFL_2_i.forLoop_0_i][0]   ][   iFL_3_i.forLoop_0_i   ][1].ultraObject.pM_0_i[iFL_9_i.forLoop_0_i][1]
                        },
                        args:{}
                    }
                    var iFL_10_i = {
                        forLoop_0_i:0,
                        fn:function(   dev_obj   ){
                            
                            
                            if(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].passOn.proofObject[1][   iFL_10_i.forLoop_0_i] !== undefined    ){
                                
                                
                                ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].pointValue += 1
                                
                                
                                if(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].debuggerDB[0] === 'true'   ){
                                    
                                    
                                     ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].debuggerDB[   iFL_2_i.forLoop_0_i + 1][1][   iFL_3_i.forLoop_0_i   ][1] += 1
                                     ultraObject.qC[   ultraObject.scope[iQC_0_i]   ].debuggerDB[   iFL_2_i.forLoop_0_i + 1][2] += 1
                                    
                                    
                                }
                    
                                
                            }
                            
                            
                        },
                        args:dev_obj //{}
                    }
                    ultraObject.forLoop(   iFL_2_i   )
                    // } /**/
                                
                    /*debugging*/ // {
                    // console.log(   ultraObject.qC[   ultraObject.scope[iQC_0_i]   ]   )
                    // } /**/
                    
                    /*taking the qC out of the scope*/ //{
                    ultraObject.scope.minus(   {index:iQC_0_i}   )
                    // }  /**/
                    
                }// used to perform advanced questions on results that can not be simply verified
                      
      
                function sort(   dev_obj   ){
                    //.target, the target we are sorting
                    //. algorithm the sorting alogrithm to use
                        //. bubble use the bubble sort algorithm
                    //.compare logic a function used to sort
                        //.valu represnets target from aboue
                        // .index index in the for loop
                    //. result if the reutrn value from .compare  === result perform the sort operation
                        
                    var sortO  // soritng object that helps fn sort
                    var sortFlagO = ultraObject.iterableObject()  //indicates if the sort is finished
                    
                    var sortFL_0_i = {
                        forLoop_0_i:0,
                        forLoopLength:dev_obj.target.length-1,
                        fn:function(   dev_obj   ){
                            
                            
                            if(   dev_obj.algorithm  === 'bubble'   ){
                                    
                                                        
                                    if(   dev_obj.compare(   {val:dev_obj.target,   index:sortFL_0_i.forLoop_0_i}   ) === dev_obj.result    ){
                                        
                                        
                                            sortFlagO[sortFlagO.bubble]  = 'false'
                                            sortFL_0_i.itO.swapO = sortFL_0_i.itO.add(   {value:ultraObject.iterableObject()}   )
                                            sortFL_0_i.itO[sortFL_0_i.itO.swapO].add(   {value:dev_obj.target[sortFL_0_i.forLoop_0_i]}   )
                                            sortFL_0_i.itO[sortFL_0_i.itO.swapO].add(   {value:dev_obj.target[sortFL_0_i.forLoop_0_i+1]}   )
                                            sortO = ultraObject.swap({
                                                    swapO:sortFL_0_i.itO[sortFL_0_i.itO.swapO],
                                                    instruct:sortFL_0_i.itO[sortFL_0_i.itO.instruct],
                                                    action:'default'
                                                })
                                            sortFL_0_i.itO[sortFL_0_i.itO.swapO].minus(   {value:dev_obj.target[sortFL_0_i.forLoop_0_i]}   )
                                            sortFL_0_i.itO[sortFL_0_i.itO.swapO].minus(   {value:dev_obj.target[sortFL_0_i.forLoop_0_i+1]}   )
                                            dev_obj.target[sortFL_0_i.forLoop_0_i] = sortO[0]
                                            dev_obj.target[sortFL_0_i.forLoop_0_i+1] = sortO[1]
                                            
                                            
                                        }
                                    
                                    
                                }
                                
                                
                        },
                        args:{
                                target:dev_obj.target,
                                algorithm:dev_obj.algorithm,
                                compare:dev_obj.compare,
                                result:dev_obj.result
                            },
                        itO:ultraObject.iterableObject()
                    }
                    
                    
                    if(   dev_obj.algorithm  === 'bubble'   ){
                        
                            sortFlagO.bubble = sortFlagO.add(   {value:'false'}   )
                            sortFL_0_i.itO.instruct = sortFL_0_i.itO.add(   {value:ultraObject.iterableObject()}   )
                            sortFL_0_i.itO[sortFL_0_i.itO.instruct].add(   {value:1}   )
                            sortFL_0_i.itO[sortFL_0_i.itO.instruct].add(   {value:0}   )
                            while(   sortFlagO[sortFlagO.bubble] !== 'true'){
                            
                                sortFlagO[sortFlagO.bubble]  = 'true'
                                ultraObject.forLoop(   sortFL_0_i   )
                            
                            
                            }
                    }
                    
                    
                    return dev_obj.target
                }//you kneew ultraObject would need this one
                function swap(   dev_obj   ){
                    // .swapO the items that are desired to be swapped must be an iterableObject
                    // .instruct expects two iterableObject why does it need the second it will provide one
                    /*
                        {
                            0:1,
                            1:0,
                            2:4,
                            3:2,
                            4:3,
                            ...
                        }
                    */
                    //retunrs an object with the proper function
                        
                            
                        if(   dev_obj.action === 'default'   ){
                                
                                
                                var swapO_0_i = ultraObject.iterableObject()
                                var swapFL_0_i =  {
                                    forLoop_0_i:0,
                                    forLoopLength:dev_obj.instruct.length,
                                    fn:function(   dev_obj   ){
                                        
                                        swapO_0_i.add(  {value:dev_obj.swapO[dev_obj.instruct[swapFL_0_i.forLoop_0_i]]}   )
                                    },
                                    args:{
                                            swapO:dev_obj.swapO,
                                            instruct:dev_obj.instruct
                                    }
                                }
                                ultraObject.forLoop(   swapFL_0_i   )
                                return swapO_0_i
                                
                                
                            }
                            

                    }// when you need values swpped
                //templates, can swap in infinite places
                function partialMatch(   dev_obj   ){
                    /*
                        key points
                        everything is in relation to compAgn
                        remember to comment out all .satisfies for debugging only
                        never use trailer with full!!!
                    */
                    /* ablelasts
                        1 for nE
                    */
                    
                    /*adding the dev_obj to args*/ //{
                    var partialMatch_dev_obj = ultraObject.args.add(   {value:ultraObject.iterify(   {iterify:dev_obj}   )   }   )
                    // }  /**/
                    
                    /*nE  +scope +self +abelast  */ //{
                    pMNE_0_i = ultraObject.scope.add(   {value:ultraObject.nE.add({value:ultraObject.iterableObject()}   )}   )
                    ultraObject.nE.abelast.add({value:ultraObject.scope[pMNE_0_i]})
                    // }  /**/
                                    
                    /*handles strings only allow it to do more with the same algorithm*/ //{
                    if(   (   dev_obj.version === 1 || dev_obj.version === undefined   )  && dev_obj.type === 'string'  ){
    
                        /*turns to case comparision of users desire*/ //{
                        if(   dev_obj.cCase !== undefined  ){
                            
                            
                            dev_obj.compTo = dev_obj.compTo[dev_obj.cCase]()
                            dev_obj.compAgn = dev_obj.compAgn[dev_obj.cCase]()
                            
                                            
                        }
                        // }  /**/
                    
                        dev_obj.compTo = ultraObject.iterify(    {iterify:dev_obj.compTo}   )
                        dev_obj.compAgn = ultraObject.iterify(   {iterify:dev_obj.compAgn}   )
                        
                        /* setting up the nE*/ //{
                        // when you make this function make all the conditionals go in the index so we can loop through them
                        ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].controls = dev_obj
                        ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster = ultraObject.iterableObject()
                        ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.copy = {} // PROBLEM make this an itO
                        ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.v1 = 'true'
                        ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.v2 = 'false'
                        ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].v1Start = 0
                        ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].v2Start = 5
                        ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].range = ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].add({value:ultraObject.iterify({iterify:0})})
                        ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].spaces = ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].add({value:ultraObject.iterify({iterify:0})})
                        ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].gap = ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].add({value:ultraObject.iterableObject()})
                        ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].pause  = ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].add({
                            value:ultraObject.iterify({iterify:0}),
                            index:4
                        })
                        // }  /**/
                        
                        var pMFL_1_i = {
                            fn:function(   dev_obj   ){
                                
                                
                                if(   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].controls.compTo[pMFL_1_i.forLoop_0_i] === ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].controls.compAgn[pMFL_0_i.forLoop_0_i]  ){
                                    //&& ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.rangePause   !== 'true'
                                    // if placed here remember to take it out the top
                                
                                    
                                    ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.trailer = 'true'
                                    ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.trailerLocation = pMFL_1_i.forLoop_0_i
                                    ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.copy.trailer = 'true'
                                    return 'premature'
                                    
                                    
                                }
                                
                                
                                // else if(   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.rangePause   === 'true'   ){
                                    
                                    
                                //     return 'premature'
                                    
                                    
                                // }
                                
                                
                            }
                        }
                        var pMFL_0_i = {
                            forLoop_0_i:0,
                            forLoopLength: ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].controls.compTo.length > ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].controls.compAgn.length ? ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].controls.compTo.length :  ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].controls.compAgn.length ,// PROBLEM add one to the length and deal with the undefined problem at the end of this loop
                            fn:function(   dev_obj   ){
                                ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.copy = {}
                                
                                /* full module  */ //{
                                if(   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].controls.full === 'true'   ){
                                    
                                    
                                    if(   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].controls.compTo[   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ][ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].pause   ][0]   ] !== ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].controls.compAgn[   pMFL_0_i.forLoop_0_i   ] && ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ][   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].range   ][0] > 0  ){
                                    
                                    
                                        ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.full = 'fix'
                                        ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.copy.full = 'fix'
                                        
                                    }
                                    
                                    
                                }
                                // }  /**/
                                
                                /*range module  */ //{
                                if(   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].controls.compTo[   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ][ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].pause   ][0]   ] === ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].controls.compAgn[   pMFL_0_i.forLoop_0_i   ]   ){
                                    
                                    
                                    ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.rangePause = 'true'
                                    ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.copy.rangePause = 'true'
                                    
                                    
                                }
                                // }  /**/

                                /*spaces module  */ //{
                                if(   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].controls.compTo[   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ][ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].pause   ][0]   ] !== ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].controls.compAgn[   pMFL_0_i.forLoop_0_i   ] &&  ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.spaces !== 'standby'  ){
                                    
                                    
                                    ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.spaces = 'true'
                                    ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.copy.spaces = 'true'
                                    
                                    
                                }
                                // }  /**/
                                
                                /*gap module  */ //{
                                if(   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].controls.compTo[   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ][ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].pause   ][0]   ] !== ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].controls.compAgn[   pMFL_0_i.forLoop_0_i   ]   ){
                                
                                
                                    ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.gap = 'true'
                                    ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.copy.gap = 'true'
                                    
                                    
                                }
                                // }  /**/
                                
                                /*trailer module  */ //{
                                if(   ultraObject.isInt({type:ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].controls.trailer})   ==='true' && ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.trailer !== 'complete' &&  ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.rangePause   !== 'true'   ){
                                    
                                    

                                    pMFL_1_i.forLoop_0_i = ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ][   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].pause   ][0]
                                    pMFL_1_i.forLoopLength =ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ][   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].pause   ][0] +ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].controls.trailer
                                    ultraObject.forLoop(   pMFL_1_i   )
                                
                                
                                }
                                // }  /**/
                                
                                /*pause module  */ //{
                                
                                // }  /**/
                                
                                /*scrumMaster module  */ //{
                                
                                    /*carrying out instuctions from the full module  */ //{
                                    if(   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.copy.full === 'fix'   ){
                                        
                                        
                                        if(   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ][   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].spaces   ][0] === 0   ){
                                        
                                        
                                            ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ][   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].spaces   ][0] = 1
                                            ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ][   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].gap   ].add({value:0})
                                            
                                            
                                        }
                                        
                                        
                                        ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ][   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].gap   ][0] += ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ][   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].range   ][0] +1
                                        ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ][   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].range   ][0] = 0
                                        ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ][   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].pause   ][0] = 0
                                        ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.spaces = 'standby'


                                    }
                                    // }  /**/
                                
                                else if(   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.copy.full !== 'fix'   ){
                                    
                                    
                                    if(   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.copy.trailer !== 'true'  && ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.copy.gap === 'true' && ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.copy.spaces !== 'true' && ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.copy.rangePause !== 'true'   ){
                                        
                                        
                                        ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ][   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].gap   ][   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ][   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].gap   ].length-1   ] += 1
                                        
                                        
                                                                            
                                    }
                                    
                                    
                                    else if(   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.copy.trailer !== 'true' && ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.copy.gap === 'true' && ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.copy.spaces === 'true' && ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.copy.rangePause !== 'true'  ){
                                        
                                        
                                        ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ][   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].gap   ].add({value:1})
                                        
                                                                            
                                    }
                                    
                                    
                                    if(   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.copy.trailer !== 'true'  &&  ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.copy.rangePause === 'true'    ){
                                        
                                        
                                        ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ][   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].range   ][0] += 1
                                        ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ][   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].pause   ][0] += 1
                                        ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.rangePause = 'false'
                                        ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.spaces = 'false'
                                        ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.gap = 'false'
                                        ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.trailer = 'complete' // LINK1
                                     
                                        
                                    }
                                    
                                                                    
                                    if(   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.copy.trailer !== 'true'  && ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.copy.spaces === 'true'   ){
                                        
                                        
                                        ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ][   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].spaces   ][0] += 1
                                        ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.spaces = 'standby'
                                        
                                        
                                    }
                                    
                                    
                                    if(   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.copy.trailer === 'true'   ){
                                        
                                        
                                        ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ][   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].pause   ][0] = ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.trailerLocation + 1
                                        ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ][   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].range   ][0] += 1
                                        ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.trailer = 'complete'
                                        ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].scrumMaster.spaces = 'false'
                                        
                                        
                                        
                                    }
                                    
                                    
                                }
                                                        
                                                                
                                    /*reacting to the final range  */ //{
                                    if(   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ][   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].range   ][0] >= ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].controls.range   ){
                                        
                                       
                                        ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].satisfy = 'true'
                                        // ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].satisfies = ultraObject.iterify({iterify:['true','range']})
                                        return 'premature'
                                        
                                        
                                    }
                                                                        
                                    
                                    else if(   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ][   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].range   ][0] < ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].controls.range  && pMFL_0_i.forLoopLength -1 ===  pMFL_0_i.forLoop_0_i    ){
                                        
                                        
                                        ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].satisfy = 'false';
                                        // ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].satisfies = ultraObject.iterify({iterify:['false','range']})
                                        return 'premature'
                                        
                                        
                                    }
                                    // }  /**/
                                    
                                    
                                    /*reacting to the final of spaces  */ //{
                                    if(   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ][   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].spaces   ][0] > ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].controls.spaces   ){
                                        
                                        
                                        ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].satisfy = 'false';
                                        // ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].satisfies = ultraObject.iterify({iterify:['false','spaces']})
                                        return 'premature'
                                        
                                        
                                    }
                                    // }  /**/
                                    
                                    
                                    /*reacting to the final of gap */ //
                                    if(   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ][   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].gap   ][   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ][   ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].gap   ].length-1   ] > ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].controls.gap   ){
                                        
                                        
                                        ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].satisfy = 'false';
                                        // ultraObject.nE[   ultraObject.scope[pMNE_0_i]   ].satisfies = ultraObject.iterify({iterify:['false','gap']})
                                        return 'premature'
                                        
                                        
                                    }
                                    // }  /**/
                                    
                                // }  /**/
                               
                            },
                            args:dev_obj //{}
                        }
                        ultraObject.forLoop(   pMFL_0_i   )
                        
                        /*nE  -scope   */ //{
                        ultraObject.scope.minus(   {index:pMNE_0_i }   )
                        // }  /**/
                        
                    }
                    // }  /**/
                    
                    
                }
                function reqBody(   dev_obj   ){
                    /*
                        .stream readeable stream for data
                        .fn function once done with the steram the req body will be in dev_obj.stream.body
                        .keep whether to keep the created item
                            false deletes created item
                        .finish, since this is a stream last steps must go here
                    */
                    var reqBody_dev_obj = ultraObject.args.add(   {value:ultraObject.iterify(   {iterify:dev_obj}   )   }   )
                    dev_obj.stream.on('data',(chunk)=> {
                        
                        
                        if(   dev_obj.stream.body === undefined  ){
                            
                            
                            dev_obj.stream.body = '';
                            
                            
                        }
                        
                        
                        dev_obj.stream.body += chunk
                    })
                    dev_obj.stream.on('end',function(){
                        rBMisc_0_i =  ultraObject.scope.add(   {value:ultraObject.misc.add(   {value:ultraObject.iterableObject()}   )}   )
                        ultraObject.misc.abelast.add(   {value:ultraObject.scope[rBMisc_0_i]}   )
                        dev_obj.fn(dev_obj)
                        
                        
                        if(   dev_obj.keep === 'false'){
                            
                            
                            ultraObject.misc.minus({
                                index:ultraObject.scope[   rBMisc_0_i   ]
                            })
                            ultraObject.misc.abelast.minus({
                                index:ultraObject.misc.abelast.length-1
                            })
                            
                            
                        }
                        
                        
                        dev_obj.finish(dev_obj)
                        //why use dev_obj when you know where it is LOL
                        ultraObject.scope.minus(   {index:rBMisc_0_i}   )
                    })
                }// make body data collection easy
                    
                function preFillForm(   dev_obj   ){
                    /*abelast
                        3 for selectTags
                        1 for nS
                    */
                    //findings
                        //i find that form items are not dependent on the number of children, the form can have children than containing the input
                        
                    var preFillForm_dev_obj = ultraObject.args.add(   {value:ultraObject.iterify(   {iterify:dev_obj}   )   }   ) // decided to replace or make room on addition
                    var pFFATI_0_i = ultraObject.scope.add(   {value:ultraObject.allTags.add(   {value:ultraObject.iterify(   {iterify:dev_obj.allTags}   )}   )}   )
                    ultraObject.sort({
                        target: ultraObject.allTags[ultraObject.scope[pFFATI_0_i]],
                        algorithm:'bubble',
                        compare:function(   dev_obj   ){
                            
                            
                            if(   dev_obj.val[dev_obj.index].childElementCount < dev_obj.val[dev_obj.index+ 1].childElementCount    ){
                                
                                
                                return 'true'
                                
                                
                            }
                            
                            
                        },
                        result:'true'
                    })
                    console.group(   'making items accessible'   )
                    ultraObject.objInvloved(
                        ultraObject.iterify({iterify:[
                            ultraObject.allTags,
                            ultraObject.scope,
                            pFFATI_0_i,
                            ultraObject.args
                        ]})
                    )

                    /*objIO -self -ablelast   */ //{
                    ultraObject.objIO.minus(   {index:ultraObject.objIO.abelast.length-1}   )
                    ultraObject.objIO.abelast.minus(   {index:ultraObject.objIO.abelast.length-1}   )
                    // }  /**/
                    
                    console.groupEnd()
                    var pFFList_0_i = ultraObject.scope.add(   {value:ultraObject.misc.add(   {value:ultraObject.iterify(   {iterify:dev_obj.list}   )}   )}   )
                    var pFFLook_0_i = ultraObject.scope.add(   {value:ultraObject.misc.add(   {value:ultraObject.iterify(   {iterify:dev_obj.look}   )}   )}   )
                    ultraObject.eCSearch({
                        list:pFFList_0_i,
                        look:pFFLook_0_i,
                        aT: pFFATI_0_i,
                        all:'true'
                    })
                    console.group(   'at this point the ultraObject has meaningful values for all arguments from the init fn'   )
                    console.groupEnd()
                    
                    /*selectTags +scope  */ //{
                    var pFFST_0_i =  ultraObject.scope.add(   {value:ultraObject.selectTags.abelast[0]}   )
                    // }  /**/
                    
                    /*nS +scope  +abelast  */ //{
                    // dont delete the code in there, we might have abelast mem leak so  check here to help
                    var pFFNS_0_i =  ultraObject.scope.add(   {value:ultraObject.nS.abelast[   ultraObject.nS.abelast.length-1   ]}   )
                    // ultraObject.nS.abelast.add(   {value:ultraObject.scope[   pFFNS_0_i   ]}   )
                    // }  /**/
                    
                    ultraObject.selectTags.abelast.minus(   {index:0}   )
                    
                    ultraObject.packIt({
                        order:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]],
                        directions: ultraObject.iterify(   {iterify:['gather element','match']}   ),
                        fill:'value',
                        write:'valuePhrase',
                        prevent:ultraObject.iterify({
                                    iterify:[
                                        function(   dev_obj   ){
                                            
                                            
                                            if(   dev_obj.element.type === 'file'   ){
                                                
                                                
                                                return 'cantFill'
                                                
                                                
                                            }
                                            
                                            
                                        }
                                    ]
                                })
                    })
                    // debugger
                    // should also make sure value is not empty
                    ///////////////////////////////////////////////////////////////////////////
                    console.group(   'answers'   )
                    var pFFMisc_0_i = ultraObject.scope.add(   {value:ultraObject.misc.add(   {value:ultraObject.iterify(   {iterify:['tagName','className','hidden','id']}   )}   )}   );
                    var pFFMisc_1_i = ultraObject.scope.add(   {value:ultraObject.misc.add(   {value:ultraObject.iterify(   {iterify:['input','select','textarea','option']}   )}   )}   );
                   
                    /*  node mode choice thread production  */ //{
                        /*  the forLoop object responsible for going throught the rest of the webpage */ //{
                        // var pFFFL_1_i = {
                        //     forLoop_0_i:0,
                        //     forLoopLength:ultraObject.allTags[   ultraObject.scope[pFFATI_0_i]   ].length - 1,
                        //     fn:function(   dev_obj   ){
                        //         ultraObject.eCSearch({
                        //             list:pFFList_0_i,
                        //             look:pFFLook_0_i,
                        //             aT: pFFATI_0_i,
                        //             all:'true',
                        //             nS:ultraObject.scope[   pFFNS_0_i   ]
                        //         })
                        //         try{
                        //             throw('see')
                        //             }
                        //         catch(e){}
                                
                        //         /* filling the value for each element  */ //{
                        //         ultraObject.packIt({
                        //             order:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]],
                        //             directions: ultraObject.iterify(   {iterify:['gather element','match']}   ),
                        //             fill:'value',
                        //             write:'valuePhrase',
                        //             prevent:ultraObject.iterify({
                        //                                     iterify:[
                        //                                         function(   dev_obj   ){
                                                                    
                                                                    
                        //                                             if(   dev_obj.element.type === 'file'   ){
                                                                        
                                                                        
                        //                                                 return 'cantFill'
                                                                        
                                                                        
                        //                                             }
                                                                    
                                                                    
                        //                                         }
                        //                                     ]
                        //                                 })
                        //                             })
                        //         // } /**/
                        //         pFFFL_0_i.args.changeSending = 'true'
                        //         ultraObject.forLoop(   pFFFL_0_i   )
                                
                        //         /* node mode choice thread production */ // {
                        //         // ultraObject.selectTags.minus(   {index:ultraObject.scope[pFFST_0_i]}   )
                        //         /**/ //}
                                
                        //         ultraObject.numberSystem({
                        //             operation:'decimal',
                        //             conversion:'to',
                        //             nS:ultraObject.scope[   pFFNS_0_i   ],
                        //         })
                        //         ultraObject.numberSystem({
                        //             operation:'decimal',
                        //             conversion:'from',
                        //             nS:ultraObject.scope[   pFFNS_0_i   ],
                        //             currentNumber:ultraObject.nS[   ultraObject.scope[pFFNS_0_i]   ].decimal.currentNumber + 1
                        //         })
                        //         ultraObject.numberSystem({
                        //             operation:'update',
                        //             nS:ultraObject.scope[   pFFNS_0_i   ]
                        //         })
                        //         ultraObject.args = ultraObject.iterableObject()
                        //     },
                        //     args:dev_obj //{}
                        // }
                        // } /**/
                    // } /**/
                    
                    /*  node mode choice thread data visualization by chromelistener  */ //{
                        /*  the forLoop object responsible for going throught the rest of the webpage */ //{
                        var pFFFL_1_i = {
                            forLoop_0_i:0,
                            forLoopLength:1,
                            fn:function(   dev_obj   ){
                                if(   dev_obj.counter === 126   ){
                                    debugger
                                }
                                ultraObject.eCSearch({
                                    list:pFFList_0_i,
                                    look:pFFLook_0_i,
                                    aT: pFFATI_0_i,
                                    all:'true',
                                    nS:ultraObject.scope[   pFFNS_0_i   ]
                                })
                                // try{
                                //     throw('see')
                                //     }
                                // catch(e){}
                                
                                /* filling the value for each element  */ //{
                                ultraObject.packIt({
                                    order:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]],
                                    directions: ultraObject.iterify(   {iterify:['gather element','match']}   ),
                                    fill:'value',
                                    write:'valuePhrase',
                                    prevent:ultraObject.iterify({
                                                            iterify:[
                                                                function(   dev_obj   ){
                                                                    
                                                                    
                                                                    if(   dev_obj.element.type === 'file'   ){
                                                                        
                                                                        
                                                                        return 'cantFill'
                                                                        
                                                                        
                                                                    }
                                                                    
                                                                    
                                                                }
                                                            ]
                                                        })
                                                    })
                                // } /**/
                                pFFFL_0_i.args.changeSending = 'true'
                                ultraObject.forLoop(   pFFFL_0_i   )
                                
                                /* node mode choice thread production */ // {
                                // ultraObject.selectTags.minus(   {index:ultraObject.scope[pFFST_0_i]}   )
                                /**/ //}
                                
                                ultraObject.numberSystem({
                                    operation:'decimal',
                                    conversion:'to',
                                    nS:ultraObject.scope[   pFFNS_0_i   ],
                                })
                                ultraObject.numberSystem({
                                    operation:'decimal',
                                    conversion:'from',
                                    nS:ultraObject.scope[   pFFNS_0_i   ],
                                    currentNumber:pFFFL_1_i.args.counter
                                })
                                ultraObject.numberSystem({
                                    operation:'update',
                                    nS:ultraObject.scope[   pFFNS_0_i   ]
                                })
                                ultraObject.args = ultraObject.iterableObject()
                            },
                            args:dev_obj //{}
                        }
                        pFFFL_1_i.args.realLength = ultraObject.allTags[   ultraObject.scope[pFFATI_0_i]   ].length - 1
                        pFFFL_1_i.args.counter = 0
                        // } /**/
                    // } /**/
                    
                    /*  node mode choice thread data visualization by chromelistener  */ //{
                    ultraObject.selectTags.nextSet = function(   dev_obj   ){
                        ultraObject.numberSystem({
                            operation:'decimal',
                            conversion:'to',
                            nS:ultraObject.scope[   pFFNS_0_i   ],
                        })
                        ultraObject.numberSystem({
                            operation:'decimal',
                            conversion:'from',
                            nS:ultraObject.scope[   pFFNS_0_i   ],
                            currentNumber:ultraObject.nS[   ultraObject.scope[pFFNS_0_i]   ].decimal.currentNumber + 1
                        })
                        ultraObject.numberSystem({
                            operation:'update',
                            nS:ultraObject.scope[   pFFNS_0_i   ]
                        })
                        if(   pFFFL_1_i.args.realLength !== pFFFL_1_i.args.counter   ){
                            
                            
                            pFFFL_1_i.args.counter +=1
                            ultraObject.forLoop(   pFFFL_1_i   )
                            
                            
                        }
                    }
                    // } /**/
                    
                    
                    /*  node mode choice thread data visualization by chromelistener*/ //{
                    var pFFXHR_0_i = ScriptXHR_0_i
                    function debug_0_i(response,sender,sendResponse){
                        chrome.runtime.onMessage.removeListener(   debug_0_i   )
                        console.log(   response   )
                        ultraObject.XHR[   ultraObject.scope[pFFXHR_0_i]   ].sending.response = response
                        ultraObject.XHR[   ultraObject.scope[pFFXHR_0_i]   ].sending.fn = sendResponse
                        console.log('table is ready for interrogation')
                        ultraObject.interrogation({
                            proof:[
                                    ['element',ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item],
                                    ['parents',ultraObject.selectTags[ultraObject.scope[pFFST_1_i]]],
                                    ['siblings',ultraObject.selectTags[ultraObject.scope[pFFST_2_i]]],
                                    ['children',ultraObject.selectTags[ultraObject.scope[pFFST_3_i]]]
                                ],
                            facts:[
                                    ['element',
                                        {
                                        'valuePhrase':function(   dev_obj   ){
                                            /*interrogates to see if packIt actually put the right phrase in the right spot*/ //{
                                            if(   ultraObject.isFunction({type:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.value.toLowerCase}   )   ){
                                                
                                                
                                                if(   ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.value.toLowerCase() === ultraObject.misc[ultraObject.scope[pFFList_0_i]][pFFFL_0_i.forLoop_0_i][1].toLowerCase()   ){
                                                    
                                                    
                                                    ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].noRun = 'true'
                                                    
                 
                                                }
                                                
                                                
                                            }
                                            
                                            
                                            else if(   !ultraObject.isFunction({type:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.value.toLowerCase})   ){
                                                
                                                
                                                if(   ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.value === ultraObject.misc[ultraObject.scope[pFFList_0_i]][pFFFL_0_i.forLoop_0_i][1]   ){
                                                    
                                                    
                                                    ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].noRun = 'true'
                                                    
                 
                                                }
                                                
                                                
                                            }
                                            
                                            
                                            ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].noRun = 'false'
                                            // } /**/
                                        },
                                        'suspect':function(   dev_obj   ){
                                            
                                            /*suspects to see if different values were put in the same spot*/ //{
                                            if(   ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].noRun !== 'true'   ){
                                                
                                                
                                                console.log(   'index',pFFFL_0_i.forLoop_0_i   )
                                                var pFFBOOL_0_i = {0:false}
                                                pFFBOOL_0_i = ultraObject.severalOr({
                                                    compTo: ultraObject.nS[ultraObject.scope[pFFNS_0_i]].currentNumber[pFFFL_0_i.forLoop_0_i],
                                                    compAgn: ultraObject.nS[ultraObject.scope[pFFNS_0_i]].currentNumber,
                                                    boolean:pFFBOOL_0_i,
                                                    which:0,
                                                    how:function(   dev_obj   ){
                                                        
                                                        
                                                        if(   dev_obj.compTo === dev_obj.compAgnI   ){
                                                            
                                                            
                                                            if(   ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]][   ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].passOn.proofObject[0]   ].suspects === undefined   ){
                                                            //if we have suspects to determine who belongs in the elements value. this might need to be reset
                                                            
                                                                ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]][   ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].passOn.proofObject[0]   ].suspects = ultraObject.iterableObject()
                                                                ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]][   ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].passOn.proofObject[0]   ].suspects.add(   {value:dev_obj.index}   )
                                                                //see i wrote for the future here
                                                                
                                                            }
                                                            
                                                            
                                                            else if(   ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]][   ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].passOn.proofObject[0]   ].suspects !== undefined   ){
                                                                
                                                            
                                                                ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]][   ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].passOn.proofObject[0]   ].suspects.add(   {value:dev_obj.index}   )
                                                                
                                                                
                                                            }
                            
                            
                                                        }
                                                        
                                                        
                                                        console.log(   dev_obj,pFFFL_0_i.forLoop_0_i   )
                                                    },
                                                    result:'a'
                                                })
                                                //this represents the digits of the NS,which are apparently the same that represents different items in the list however only one in this case should receive the element value here
                                                console.log(   'our suspects',ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]][   ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].passOn.proofObject[0]   ].suspects   )
                                                
                                                
                                            }
                                            // } /**/
                                            
                                        },
                                        'tagName':  {
                                                        ultraObject:{
                                                            tagOptions:ultraObject.misc[   ultraObject.scope[pFFMisc_1_i]]
                                                        }
                                                    },
                                        'hidden':{},
                                        'className':{
                                                        ultraObject:{
                                                            keyword:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].keyword,
                                                            //FIX ME a better way to make meaninguful
                                                            pM_0_i:ultraObject.iterify({
                                                                iterify:{
                                                                    range:20,
                                                                    spaces:2,
                                                                    gap:2,
                                                                    trailer:20,
                                                                    type:'string',
                                                                    cCase:'toLowerCase'
                                                                }
                                                            })
                                                        }
                                                    },
                                        'id':{
                                                        ultraObject:{
                                                            keyword:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].keyword,
                                                            //FIX ME a better way to make meaninguful
                                                            pM_0_i:ultraObject.iterify({
                                                                iterify:{
                                                                    range:30,
                                                                    spaces:3,
                                                                    gap:3,
                                                                    trailer:30,
                                                                    type:'string',
                                                                    cCase:'toLowerCase'
                                                                }
                                                            }),
                                                            care:ultraObject.iterify(   {iterify:['yes','no','no']})
                                                        }
                                                    },
                                        }
                                    ],
                                    ['parents',
                                        {
                                        'exist':{},
                                        'tagName':{
                                                        ultraObject:{
                                                               tagOptions:ultraObject.iterify(   {iterify:['label','div']}   ),
                                                            //   care:ultraObject.iterify(   {iterify:['yes','yes','no']})
                                                        }
                                                    },
                                        'className':{
                                                        ultraObject:{
                                                            keyword:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].keyword,
                                                            //FIX ME a better way to make meaninguful
                                                            pM_0_i:ultraObject.iterify({
                                                                iterify:{
                                                                    range:20,
                                                                    spaces:2,
                                                                    gap:2,
                                                                    trailer:20,
                                                                    type:'string',
                                                                    cCase:'toLowerCase'
                                                                }
                                                            }),
                                                            // care:ultraObject.iterify(   {iterify:['yes','yes','no']}   )
                                                        }
                                                    },
                                        'id':{
                                                        ultraObject:{
                                                            keyword:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].keyword,
                                                            //FIX ME a better way to make meaninguful
                                                            pM_0_i:ultraObject.iterify({
                                                                iterify:{
                                                                    range:30,
                                                                    spaces:3,
                                                                    gap:3,
                                                                    trailer:30,
                                                                    type:'string',
                                                                    cCase:'toLowerCase'
                                                                }
                                                            }),
                                                            // care:ultraObject.iterify(   {iterify:['yes','yes','no']}   )
                                                        }
                                            },
                                        }
                                    ],
                                    ['siblings',
                                        {
                                        'tagName':{
                                            ultraObject:{
                                                   tagOptions:ultraObject.iterify({iterify:['label','div']}),
                                                //   care:ultraObject.iterify(   {iterify:['yes','yes','no']})
                                                    }
                                                }
                                        }
                                    ],
                                    ['children',
                                        {
                                        'className':{
                                                        ultraObject:{
                                                            keyword:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].keyword,
                                                            //FIX ME a better way to make meaninguful
                                                            pM_0_i:ultraObject.iterify({
                                                                iterify:{
                                                                    range:20,
                                                                    spaces:2,
                                                                    gap:2,
                                                                    trailer:20,
                                                                    type:'string',
                                                                    cCase:'toLowerCase'
                                                                }
                                                            }),
                                                            // care:ultraObject.iterify(   {iterify:['yes','yes','no']}   )
                                                        }
                                                    },
                                        'id':{
                                                        ultraObject:{
                                                            keyword:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].keyword,
                                                            //FIX ME a better way to make meaninguful
                                                            pM_0_i:ultraObject.iterify({
                                                                iterify:{
                                                                    range:30,
                                                                    spaces:3,
                                                                    gap:3,
                                                                    trailer:30,
                                                                    type:'string',
                                                                    cCase:'toLowerCase'
                                                                }
                                                            }),
                                                            // care:ultraObject.iterify(   {iterify:['yes','yes','no']}   )
                                                        }
                                            },
                                        }
                                    ]
                                ],
                            pointValue:'v1',
                            debug:'true'
                        })
                        ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].debuggerDB.add({
                            value:ultraObject.iterify({
                                iterify:[
                                    'total',
                                    [],
                                    ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].pointValue
                                ]
                            })
                        })
                        
                        if(   pFFFL_0_i.args.changeSending !== 'true'   ){
                            
                            
                            ultraObject.XHR[   ultraObject.scope[pFFXHR_0_i]   ].sending.fn({
                                item:'debuggerDB',
                                data:ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].debuggerDB
                            })
                            
                            
                        }
                        
                        
                        else if(   pFFFL_0_i.args.changeSending === 'true'   ){
                            
                            
                            ultraObject.XHR[     ultraObject.scope[pFFXHR_0_i]   ].sending.body = {
                                item:'debuggerDB',
                                data:ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].debuggerDB
                            }
                            
                            
                        }
                        ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].pointValue = ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].pointValue // used to deterime if valuePhrasre belongs in the elements value
                        console.log(   ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].pointValue   )
                        ultraObject.selectTags.minus({
                            index:ultraObject.scope[pFFST_3_i],

                        })
                        ultraObject.scope.minus({
                            index:pFFST_3_i,
                            
                        })
                        ultraObject.selectTags.minus({
                            index:ultraObject.scope[pFFST_2_i],
                            
                        })
                        ultraObject.scope.minus({
                            index:pFFST_2_i,
                            
                        })
                        ultraObject.selectTags.minus({
                            index:ultraObject.scope[pFFST_1_i],
                            
                        })
                        ultraObject.scope.minus({
                            index:pFFST_1_i,
                            
                        })
                        // debugger
                        delete ultraObject.XHR[   ultraObject.scope[pFFXHR_0_i]   ].sending.response
                        // try{
                        //     throw('see')
                        //     }
                        // catch(e){}
                        console.log(  'what is the result', ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].keyword  )
                        // ultraObject.objInvolved(
                        //     ultraObject.iterify({iterify:
                        //         [
                        //             ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item    .value,
                        //             ultraObject.misc[ultraObject.scope[pFFList_0_i]][pFFFL_0_i.forLoop_0_i][1]
                        //         ]// i probably put it somewhere else
                        //     })
                        // )
                    
                        
                        console.groupEnd()
                    console.groupEnd()
                    // debugger
                    ultraObject.selectTags.minus(   {index:ultraObject.scope[pFFST_0_i]}   )
                    ultraObject.selectTags.nextSet({changeSending:'true'})
                    return true
                }
                    var pFFFL_6_i = {
                        forLoop_0_i:0,
                        fn:function(   dev_obj   ){
                            console.log('blocking')
                            debugger
                            if(   ultraObject.XHR[   ultraObject.scope[pFFXHR_0_i]   ].sending.response !== undefined   ){
                                return 'premature'
                            }
                        },
                        
                    }
                    // } /**/
                    
                    var pFFST_1_i
                    var pFFST_2_i
                    var pFFFL_4_i
                    var pFFST_3_i
                    var pFFFL_5_i
                    var pFFFL_0_i = {
                        //these for spots, the amount that claims the element, the objects related properties the family and the string matching all help determine where this object belongs
                        //POINT VALUE the spot where we add points
                        forLoop_0_i:0,
                        forLoopLength:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]].length,
                        fn:function(   dev_obj   ){
                            console.group(   'asking questions about the object'  )
                                /*
                                    what is the framework?
                                    turn all string into lowercase
                                */
                                
                                /* setting up needed objects for proof*/ //{
                                    //element
                                    
                                    
                                    ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.sameChild = 'true'
                                    //parents
                                    pFFST_1_i = ultraObject.scope.add(   {value:ultraObject.selectTags.add(   {value:ultraObject.iterableObject()}   )}   )
                                    
                                    // ask if they are dom elements before doing anything
                                    if(   ultraObject.isDOMElement({type:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.offsetParent})   ){
                                        
                                        
                                        ultraObject.selectTags[ultraObject.scope[pFFST_1_i]].add(   {value:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.offsetParent}   )
                                    
                                    
                                    }
                                    
                                    
                                    if(   ultraObject.isDOMElement({type:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.parentElement})   ){
                                        
                                        
                                        ultraObject.selectTags[ultraObject.scope[pFFST_1_i]].add(   {value:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.parentElement}   )
                                    
                                    
                                    }
                                    
                                    
                                    if(   ultraObject.isDOMElement({type:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.parentNode})   ){
                                        
                                        ultraObject.selectTags[ultraObject.scope[pFFST_1_i]].add(   {value:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.parentNode}   )
                                    
                                    
                                    }
                                    //siblings retuns HTMLCollection
                                    
                                    /*selectTags +scope + self +abelast  */ //{
                                    pFFST_2_i = ultraObject.scope.add(   {value:ultraObject.selectTags.add(   {value:ultraObject.iterableObject()}   )}   )
                                    ultraObject.selectTags.abelast.add(   {value:ultraObject.scope[   pFFST_2_i   ]}   )
                                    // }  /**/
                                    
                                    pFFFL_4_i = {
                                        forLoop_0_i:0,
                                        forLoopLength: ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.parentElement.children.length,
                                        fn:function(   dev_obj   ){
                                            
                                            
                                            if(   ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.parentElement.children[   pFFFL_4_i.forLoop_0_i   ].sameChild !== 'true'   ){
                                                
                                                
                                                ultraObject.selectTags[ultraObject.scope[pFFST_2_i]].add(   {value:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.parentElement.children[   pFFFL_4_i.forLoop_0_i   ]}   )
                                            
                                            
                                            }
                                            
                                            
                                        },
                                        args:dev_obj //{}
                                    }
                                    ultraObject.forLoop(   pFFFL_4_i   )
                                    delete ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.sameChild
                                    //children retuns HTMLCollection
                                    
                                    /*selectTags +scope + self +abelast  */ //{
                                    pFFST_3_i = ultraObject.scope.add(   {value:ultraObject.selectTags.add(   {value:ultraObject.iterableObject()}   )}   )
                                    ultraObject.selectTags.abelast.add(   {value:pFFST_3_i}   )
                                    // }  /**/
                                    

                                    pFFFL_5_i = {
                                        forLoop_0_i:0,
                                        forLoopLength:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.children.length,
                                        fn:function(   dev_obj   ){
                                            ultraObject.selectTags[ultraObject.scope[pFFST_3_i]].add(   {value:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.children[   pFFFL_5_i.forLoop_0_i   ]}   )
                                        },
                                        args:dev_obj //{}
                                    }
                                    ultraObject.forLoop(   pFFFL_5_i   )
                                    // accessing the qC object ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]]
                                // } /**/
                                
                                // /*  node mode choice thread production */ //{
                                
                                //         ultraObject.interrogation({
                                //             proof:[
                                //                     ['element',ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item],
                                //                     ['parents',ultraObject.selectTags[ultraObject.scope[pFFST_1_i]]],
                                //                     ['siblings',ultraObject.selectTags[ultraObject.scope[pFFST_2_i]]],
                                //                     ['children',ultraObject.selectTags[ultraObject.scope[pFFST_3_i]]]
                                //                 ],
                                //             facts:[
                                //                     ['element',
                                //                         {
                                //                         'valuePhrase':function(   dev_obj   ){
                                //                             /*interrogates to see if packIt actually put the right phrase in the right spot*/ //{
                                //                             if(   ultraObject.isFunction({type:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.value.toLowerCase}   )   ){
                                                                
                                                                
                                //                                 if(   ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.value.toLowerCase() === ultraObject.misc[ultraObject.scope[pFFList_0_i]][pFFFL_0_i.forLoop_0_i][1].toLowerCase()   ){
                                                                    
                                                                    
                                //                                     ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].noRun = 'true'
                                                                    
                                 
                                //                                 }
                                                                
                                                                
                                //                             }
                                                            
                                                            
                                //                             else if(   !ultraObject.isFunction({type:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.value.toLowerCase})   ){
                                                                
                                                                
                                //                                 if(   ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.value === ultraObject.misc[ultraObject.scope[pFFList_0_i]][pFFFL_0_i.forLoop_0_i][1]   ){
                                                                    
                                                                    
                                //                                     ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].noRun = 'true'
                                                                    
                                 
                                //                                 }
                                                                
                                                                
                                //                             }
                                                            
                                                            
                                //                             ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].noRun = 'false'
                                //                             // } /**/
                                //                         },
                                //                         'suspect':function(   dev_obj   ){
                                                            
                                //                             /*suspects to see if different values were put in the same spot*/ //{
                                //                             if(   ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].noRun !== 'true'   ){
                                                                
                                                                
                                //                                 console.log(   'index',pFFFL_0_i.forLoop_0_i   )
                                //                                 var pFFBOOL_0_i = {0:false}
                                //                                 pFFBOOL_0_i = ultraObject.severalOr({
                                //                                     compTo: ultraObject.nS[ultraObject.scope[pFFNS_0_i]].currentNumber[pFFFL_0_i.forLoop_0_i],
                                //                                     compAgn: ultraObject.nS[ultraObject.scope[pFFNS_0_i]].currentNumber,
                                //                                     boolean:pFFBOOL_0_i,
                                //                                     which:0,
                                //                                     how:function(   dev_obj   ){
                                                                        
                                                                        
                                //                                         if(   dev_obj.compTo === dev_obj.compAgnI   ){
                                                                            
                                                                            
                                //                                             if(   ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]][   ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].passOn.proofObject[0]   ].suspects === undefined   ){
                                //                                             //if we have suspects to determine who belongs in the elements value. this might need to be reset
                                                                            
                                //                                                 ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]][   ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].passOn.proofObject[0]   ].suspects = ultraObject.iterableObject()
                                //                                                 ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]][   ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].passOn.proofObject[0]   ].suspects.add(   {value:dev_obj.index}   )
                                //                                                 //see i wrote for the future here
                                                                                
                                //                                             }
                                                                            
                                                                            
                                //                                             else if(   ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]][   ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].passOn.proofObject[0]   ].suspects !== undefined   ){
                                                                                
                                                                            
                                //                                                 ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]][   ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].passOn.proofObject[0]   ].suspects.add(   {value:dev_obj.index}   )
                                                                                
                                                                                
                                //                                             }
                                            
                                            
                                //                                         }
                                                                        
                                                                        
                                //                                         console.log(   dev_obj,pFFFL_0_i.forLoop_0_i   )
                                //                                     },
                                //                                     result:'a'
                                //                                 })
                                //                                 //this represents the digits of the NS,which are apparently the same that represents different items in the list however only one in this case should receive the element value here
                                //                                 console.log(   'our suspects',ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]][   ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].passOn.proofObject[0]   ].suspects   )
                                                                
                                                                
                                //                             }
                                //                             // } /**/
                                                            
                                //                         },
                                //                         'tagName':  {
                                //                                         ultraObject:{
                                //                                             tagOptions:ultraObject.misc[   ultraObject.scope[pFFMisc_1_i]]
                                //                                         }
                                //                                     },
                                //                         'hidden':{},
                                //                         'className':{
                                //                                         ultraObject:{
                                //                                             keyword:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].keyword,
                                //                                             //FIX ME a better way to make meaninguful
                                //                                             pM_0_i:ultraObject.iterify({
                                //                                                 iterify:{
                                //                                                     range:20,
                                //                                                     spaces:2,
                                //                                                     gap:2,
                                //                                                     trailer:20,
                                //                                                     type:'string',
                                //                                                     cCase:'toLowerCase'
                                //                                                 }
                                //                                             })
                                //                                         }
                                //                                     },
                                //                         'id':{
                                //                                         ultraObject:{
                                //                                             keyword:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].keyword,
                                //                                             //FIX ME a better way to make meaninguful
                                //                                             pM_0_i:ultraObject.iterify({
                                //                                                 iterify:{
                                //                                                     range:30,
                                //                                                     spaces:3,
                                //                                                     gap:3,
                                //                                                     trailer:30,
                                //                                                     type:'string',
                                //                                                     cCase:'toLowerCase'
                                //                                                 }
                                //                                             }),
                                //                                             care:ultraObject.iterify(   {iterify:['yes','no','no']})
                                //                                         }
                                //                                     },
                                //                         }
                                //                     ],
                                //                     ['parents',
                                //                         {
                                //                         'exist':{},
                                //                         'tagName':{
                                //                                         ultraObject:{
                                //                                               tagOptions:ultraObject.iterify(   {iterify:['label','div']}   ),
                                //                                             //   care:ultraObject.iterify(   {iterify:['yes','yes','no']})
                                //                                         }
                                //                                     },
                                //                         'className':{
                                //                                         ultraObject:{
                                //                                             keyword:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].keyword,
                                //                                             //FIX ME a better way to make meaninguful
                                //                                             pM_0_i:ultraObject.iterify({
                                //                                                 iterify:{
                                //                                                     range:20,
                                //                                                     spaces:2,
                                //                                                     gap:2,
                                //                                                     trailer:20,
                                //                                                     type:'string',
                                //                                                     cCase:'toLowerCase'
                                //                                                 }
                                //                                             }),
                                //                                             // care:ultraObject.iterify(   {iterify:['yes','yes','no']}   )
                                //                                         }
                                //                                     },
                                //                         'id':{
                                //                                         ultraObject:{
                                //                                             keyword:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].keyword,
                                //                                             //FIX ME a better way to make meaninguful
                                //                                             pM_0_i:ultraObject.iterify({
                                //                                                 iterify:{
                                //                                                     range:30,
                                //                                                     spaces:3,
                                //                                                     gap:3,
                                //                                                     trailer:30,
                                //                                                     type:'string',
                                //                                                     cCase:'toLowerCase'
                                //                                                 }
                                //                                             }),
                                //                                             // care:ultraObject.iterify(   {iterify:['yes','yes','no']}   )
                                //                                         }
                                //                             },
                                //                         }
                                //                     ],
                                //                     ['siblings',
                                //                         {
                                //                         'tagName':{
                                //                             ultraObject:{
                                //                                   tagOptions:ultraObject.iterify({iterify:['label','div']}),
                                //                                 //   care:ultraObject.iterify(   {iterify:['yes','yes','no']})
                                //                                     }
                                //                                 }
                                //                         }
                                //                     ],
                                //                     ['children',
                                //                         {
                                //                         'className':{
                                //                                         ultraObject:{
                                //                                             keyword:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].keyword,
                                //                                             //FIX ME a better way to make meaninguful
                                //                                             pM_0_i:ultraObject.iterify({
                                //                                                 iterify:{
                                //                                                     range:20,
                                //                                                     spaces:2,
                                //                                                     gap:2,
                                //                                                     trailer:20,
                                //                                                     type:'string',
                                //                                                     cCase:'toLowerCase'
                                //                                                 }
                                //                                             }),
                                //                                             // care:ultraObject.iterify(   {iterify:['yes','yes','no']}   )
                                //                                         }
                                //                                     },
                                //                         'id':{
                                //                                         ultraObject:{
                                //                                             keyword:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].keyword,
                                //                                             //FIX ME a better way to make meaninguful
                                //                                             pM_0_i:ultraObject.iterify({
                                //                                                 iterify:{
                                //                                                     range:30,
                                //                                                     spaces:3,
                                //                                                     gap:3,
                                //                                                     trailer:30,
                                //                                                     type:'string',
                                //                                                     cCase:'toLowerCase'
                                //                                                 }
                                //                                             }),
                                //                                             // care:ultraObject.iterify(   {iterify:['yes','yes','no']}   )
                                //                                         }
                                //                             },
                                //                         }
                                //                     ]
                                //                 ],
                                //             pointValue:'v1',
                                //             debug:'true'
                                //         })
                                //         ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].debuggerDB.add({
                                //             value:ultraObject.iterify({
                                //                 iterify:[
                                //                     'total',
                                //                     [],
                                //                     ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].pointValue
                                //                 ]
                                //             })
                                //         })
                                //         ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].pointValue = ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].pointValue // used to deterime if valuePhrasre belongs in the elements value
                                //         console.log(   ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].pointValue   )
                                //         debugger
                                //         ultraObject.selectTags.minus({
                                //             index:ultraObject.scope[pFFST_3_i],
                                //
                                //         })
                                //         ultraObject.scope.minus({
                                //             index:pFFST_3_i,
                                //
                                //         })
                                //       ultraObject.selectTags.minus({
                                //             index:ultraObject.scope[pFFST_2_i],
                                //
                                //         })
                                //         ultraObject.scope.minus({
                                //             index:pFFST_2_i,
                                //
                                //         })
                                //         ultraObject.selectTags.minus({
                                //             index:ultraObject.scope[pFFST_1_i],
                                //
                                //         })
                                //         ultraObject.scope.minus({
                                //             index:pFFST_1_i,
                                //
                                //         })
                                //         // throw('e')
                                //         console.log(  'what is the result', ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].keyword  )
                                //         // ultraObject.objInvolved(
                                //         //     ultraObject.iterify({iterify:
                                //         //         [
                                //         //             ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.value,
                                //         //             ultraObject.misc[ultraObject.scope[pFFList_0_i]][pFFFL_0_i.forLoop_0_i][1]
                                //         //         ]// i probably put it somewhere else
                                //         //     })
                                //         // )
                                        
                                //         console.groupEnd()
                                //     console.groupEnd()
                                                                        
                                // // } /**/
                                
                                // /*  node mode choice thread data visualization by setInterval*/ //{
                                    
                                    
                                //     var pFFXHR_0_i = ultraObject.scope.add(   {value:ultraObject.XHR.abelast[ultraObject.XHR.abelast.length -1]}   )
                                //     ultraObject.XHR[   ultraObject.scope[pFFXHR_0_i]   ].incoming.fn()
                                //     ultraObject.XHR[   ultraObject.scope[pFFXHR_0_i]   ].sending.fn(   ultraObject.XHR[   ultraObject.scope[pFFXHR_0_i]   ].sending.body   )
                                //     ultraObject.XHR[   ultraObject.scope[pFFXHR_0_i]   ].setIntervalStop = 0
                                    
                                    
                                //     var setInterval_0_i = setInterval(function(){
                                        
                                //         console.log('this is the response',ultraObject.XHR[   ultraObject.scope[pFFXHR_0_i]   ].sending.response   )
                                //         if(   ultraObject.XHR[   ultraObject.scope[pFFXHR_0_i]   ].sending.response !== undefined && ultraObject.XHR[   ultraObject.scope[pFFXHR_0_i]   ].setIntervalStop === 0  ){

                                    
                                //             ultraObject.XHR[   ultraObject.scope[pFFXHR_0_i]   ].setIntervalStop = 1
                                //             console.log('table is ready for interrogation')
                                //             ultraObject.interrogation({
                                //                 proof:[
                                //                         ['element',ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item],
                                //                         ['parents',ultraObject.selectTags[ultraObject.scope[pFFST_1_i]]],
                                //                         ['siblings',ultraObject.selectTags[ultraObject.scope[pFFST_2_i]]],
                                //                         ['children',ultraObject.selectTags[ultraObject.scope[pFFST_3_i]]]
                                //                     ],
                                //                 facts:[
                                //                         ['element',
                                //                             {
                                //                             'valuePhrase':function(   dev_obj   ){
                                //                                 /*interrogates to see if packIt actually put the right phrase in the right spot*/ //{
                                //                                 if(   ultraObject.isFunction({type:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.value.toLowerCase}   )   ){
                                                                    
                                                                    
                                //                                     if(   ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.value.toLowerCase() === ultraObject.misc[ultraObject.scope[pFFList_0_i]][pFFFL_0_i.forLoop_0_i][1].toLowerCase()   ){
                                                                        
                                                                        
                                //                                         ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].noRun = 'true'
                                                                        
                                     
                                //                                     }
                                                                    
                                                                    
                                //                                 }
                                                                
                                                                
                                //                                 else if(   !ultraObject.isFunction({type:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.value.toLowerCase})   ){
                                                                    
                                                                    
                                //                                     if(   ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item.value === ultraObject.misc[ultraObject.scope[pFFList_0_i]][pFFFL_0_i.forLoop_0_i][1]   ){
                                                                        
                                                                        
                                //                                         ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].noRun = 'true'
                                                                        
                                     
                                //                                     }
                                                                    
                                                                    
                                //                                 }
                                                                
                                                                
                                //                                 ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].noRun = 'false'
                                //                                 // } /**/
                                //                             },
                                //                             'suspect':function(   dev_obj   ){
                                                                
                                //                                 /*suspects to see if different values were put in the same spot*/ //{
                                //                                 if(   ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].noRun !== 'true'   ){
                                                                    
                                                                    
                                //                                     console.log(   'index',pFFFL_0_i.forLoop_0_i   )
                                //                                     var pFFBOOL_0_i = {0:false}
                                //                                     pFFBOOL_0_i = ultraObject.severalOr({
                                //                                         compTo: ultraObject.nS[ultraObject.scope[pFFNS_0_i]].currentNumber[pFFFL_0_i.forLoop_0_i],
                                //                                         compAgn: ultraObject.nS[ultraObject.scope[pFFNS_0_i]].currentNumber,
                                //                                         boolean:pFFBOOL_0_i,
                                //                                         which:0,
                                //                                         how:function(   dev_obj   ){
                                                                            
                                                                            
                                //                                             if(   dev_obj.compTo === dev_obj.compAgnI   ){
                                                                                
                                                                                
                                //                                                 if(   ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]][   ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].passOn.proofObject[0]   ].suspects === undefined   ){
                                //                                                 //if we have suspects to determine who belongs in the elements value. this might need to be reset
                                                                                
                                //                                                     ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]][   ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].passOn.proofObject[0]   ].suspects = ultraObject.iterableObject()
                                //                                                     ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]][   ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].passOn.proofObject[0]   ].suspects.add(   {value:dev_obj.index}   )
                                //                                                     //see i wrote for the future here
                                                                                    
                                //                                                 }
                                                                                
                                                                                
                                //                                                 else if(   ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]][   ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].passOn.proofObject[0]   ].suspects !== undefined   ){
                                                                                    
                                                                                
                                //                                                     ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]][   ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].passOn.proofObject[0]   ].suspects.add(   {value:dev_obj.index}   )
                                                                                    
                                                                                    
                                //                                                 }
                                                
                                                
                                //                                             }
                                                                            
                                                                            
                                //                                             console.log(   dev_obj,pFFFL_0_i.forLoop_0_i   )
                                //                                         },
                                //                                         result:'a'
                                //                                     })
                                //                                     //this represents the digits of the NS,which are apparently the same that represents different items in the list however only one in this case should receive the element value here
                                //                                     console.log(   'our suspects',ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]][   ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].passOn.proofObject[0]   ].suspects   )
                                                                    
                                                                    
                                //                                 }
                                //                                 // } /**/
                                                                
                                //                             },
                                //                             'tagName':  {
                                //                                             ultraObject:{
                                //                                                 tagOptions:ultraObject.misc[   ultraObject.scope[pFFMisc_1_i]]
                                //                                             }
                                //                                         },
                                //                             'hidden':{},
                                //                             'className':{
                                //                                             ultraObject:{
                                //                                                 keyword:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].keyword,
                                //                                                 //FIX ME a better way to make meaninguful
                                //                                                 pM_0_i:ultraObject.iterify({
                                //                                                     iterify:{
                                //                                                         range:20,
                                //                                                         spaces:2,
                                //                                                         gap:2,
                                //                                                         trailer:20,
                                //                                                         type:'string',
                                //                                                         cCase:'toLowerCase'
                                //                                                     }
                                //                                                 })
                                //                                             }
                                //                                         },
                                //                             'id':{
                                //                                             ultraObject:{
                                //                                                 keyword:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].keyword,
                                //                                                 //FIX ME a better way to make meaninguful
                                //                                                 pM_0_i:ultraObject.iterify({
                                //                                                     iterify:{
                                //                                                         range:30,
                                //                                                         spaces:3,
                                //                                                         gap:3,
                                //                                                         trailer:30,
                                //                                                         type:'string',
                                //                                                         cCase:'toLowerCase'
                                //                                                     }
                                //                                                 }),
                                //                                                 care:ultraObject.iterify(   {iterify:['yes','no','no']})
                                //                                             }
                                //                                         },
                                //                             }
                                //                         ],
                                //                         ['parents',
                                //                             {
                                //                             'exist':{},
                                //                             'tagName':{
                                //                                             ultraObject:{
                                //                                                   tagOptions:ultraObject.iterify(   {iterify:['label','div']}   ),
                                //                                                 //   care:ultraObject.iterify(   {iterify:['yes','yes','no']})
                                //                                             }
                                //                                         },
                                //                             'className':{
                                //                                             ultraObject:{
                                //                                                 keyword:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].keyword,
                                //                                                 //FIX ME a better way to make meaninguful
                                //                                                 pM_0_i:ultraObject.iterify({
                                //                                                     iterify:{
                                //                                                         range:20,
                                //                                                         spaces:2,
                                //                                                         gap:2,
                                //                                                         trailer:20,
                                //                                                         type:'string',
                                //                                                         cCase:'toLowerCase'
                                //                                                     }
                                //                                                 }),
                                //                                                 // care:ultraObject.iterify(   {iterify:['yes','yes','no']}   )
                                //                                             }
                                //                                         },
                                //                             'id':{
                                //                                             ultraObject:{
                                //                                                 keyword:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].keyword,
                                //                                                 //FIX ME a better way to make meaninguful
                                //                                                 pM_0_i:ultraObject.iterify({
                                //                                                     iterify:{
                                //                                                         range:30,
                                //                                                         spaces:3,
                                //                                                         gap:3,
                                //                                                         trailer:30,
                                //                                                         type:'string',
                                //                                                         cCase:'toLowerCase'
                                //                                                     }
                                //                                                 }),
                                //                                                 // care:ultraObject.iterify(   {iterify:['yes','yes','no']}   )
                                //                                             }
                                //                                 },
                                //                             }
                                //                         ],
                                //                         ['siblings',
                                //                             {
                                //                             'tagName':{
                                //                                 ultraObject:{
                                //                                       tagOptions:ultraObject.iterify({iterify:['label','div']}),
                                //                                     //   care:ultraObject.iterify(   {iterify:['yes','yes','no']})
                                //                                         }
                                //                                     }
                                //                             }
                                //                         ],
                                //                         ['children',
                                //                             {
                                //                             'className':{
                                //                                             ultraObject:{
                                //                                                 keyword:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].keyword,
                                //                                                 //FIX ME a better way to make meaninguful
                                //                                                 pM_0_i:ultraObject.iterify({
                                //                                                     iterify:{
                                //                                                         range:20,
                                //                                                         spaces:2,
                                //                                                         gap:2,
                                //                                                         trailer:20,
                                //                                                         type:'string',
                                //                                                         cCase:'toLowerCase'
                                //                                                     }
                                //                                                 }),
                                //                                                 // care:ultraObject.iterify(   {iterify:['yes','yes','no']}   )
                                //                                             }
                                //                                         },
                                //                             'id':{
                                //                                             ultraObject:{
                                //                                                 keyword:ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].keyword,
                                //                                                 //FIX ME a better way to make meaninguful
                                //                                                 pM_0_i:ultraObject.iterify({
                                //                                                     iterify:{
                                //                                                         range:30,
                                //                                                         spaces:3,
                                //                                                         gap:3,
                                //                                                         trailer:30,
                                //                                                         type:'string',
                                //                                                         cCase:'toLowerCase'
                                //                                                     }
                                //                                                 }),
                                //                                                 // care:ultraObject.iterify(   {iterify:['yes','yes','no']}   )
                                //                                             }
                                //                                 },
                                //                             }
                                //                         ]
                                //                     ],
                                //                 pointValue:'v1',
                                //                 debug:'true'
                                //             })
                                //             ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].debuggerDB.add({
                                //                 value:ultraObject.iterify({
                                //                     iterify:[
                                //                         'total',
                                //                         [],
                                //                         ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].pointValue
                                //                     ]
                                //                 })
                                //             })
                                //             ultraObject.XHR[   ultraObject.scope[pFFXHR_0_i]   ].sending.fn({
                                //                 item:'debuggerDB',
                                //                 data:ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].debuggerDB
                                //             })
                                //             debugger
                                //             chrome.runtime.onMessage.removeListener(   debug_0_i   )
                                //             ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].pointValue = ultraObject.qC[ultraObject.qC.abelast[ultraObject.qC.abelast.length-1]].pointValue // used to deterime if valuePhrasre belongs in the elements value
                                //             console.log(   ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].pointValue   )
                                //             ultraObject.selectTags.minus({
                                //                 index:ultraObject.scope[pFFST_3_i],
                                //
                                //             })
                                //             ultraObject.scope.minus({
                                //                 index:pFFST_3_i,
                                //
                                //             })
                                //           ultraObject.selectTags.minus({
                                //                 index:ultraObject.scope[pFFST_2_i],
                                //
                                //             })
                                //             ultraObject.scope.minus({
                                //                 index:pFFST_2_i,
                                //
                                //             })
                                //             ultraObject.selectTags.minus({
                                //                 index:ultraObject.scope[pFFST_1_i],
                                //
                                //             })
                                //             ultraObject.scope.minus({
                                //                 index:pFFST_1_i,
                                //
                                //             })
                                //             /* debug */
                                //             clearInterval(   setInterval_0_i   )
                                //             delete ultraObject.XHR[   ultraObject.scope[pFFXHR_0_i]   ].sending.response
                                //             /**/
                                //             // throw('e')
                                //             console.log(  'what is the result', ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].keyword  )
                                //             ultraObject.objInvolved(
                                //                 ultraObject.iterify({iterify:
                                //                     [
                                //                         ultraObject.selectTags[ultraObject.scope[pFFST_0_i]][pFFFL_0_i.forLoop_0_i].item    .value,
                                //                         ultraObject.misc[ultraObject.scope[pFFList_0_i]][pFFFL_0_i.forLoop_0_i][1]
                                //                     ]// i probably put it somewhere else
                                //                 })
                                //             )
                                        
                                            
                                //             console.groupEnd()
                                //         console.groupEnd()

                                //         }
                                        
                                        
                                //     },500)

                                // //     // just like when dealing with fs API, setInterval is a nasty little promise, id use wait but idk when the data comes from the background script
                                
                                // } /**/

                                /*  node mode choice thread data visualization by chromelistener*/ //{
                                
                                    if(   dev_obj.changeSending !== 'true'   ){
                                        
                                        
                                        ultraObject.XHR[   ultraObject.scope[pFFXHR_0_i]   ].incoming.fn({
                                            eventListener:debug_0_i
                                        })
                                        ultraObject.XHR[   ultraObject.scope[pFFXHR_0_i]   ].sending.fn(   ultraObject.XHR[     ultraObject.scope[pFFXHR_0_i]   ].sending.body   )
                                        
                                    
                                    }
                                    
                                    else if(   dev_obj.changeSending === 'true'   ){
                                        
                                        
                                        pFFFL_0_i.args.changeSending = 'true'
                                        chrome.runtime.sendMessage(ultraObject.XHR[     ultraObject.scope[pFFXHR_0_i]   ].sending.body, debug_0_i);
                                        
                                        
                                    }
                                    // ultraObject.forLoop(   pFFFL_6_i   )
                                // } /**/
                                    



                            
                        },
                        args:{
                            /*debug*/
                            endpointSendingFn:dev_obj.endpointSendingFn
                            /**/
                        }
                    }
                    ultraObject.forLoop(   pFFFL_0_i   )
                    // debugger
                    
                   
                    
                    /*  node mode choice thread production  */ //{
                    // ultraObject.selectTags.minus(   {index:ultraObject.scope[pFFST_0_i]}   )
                    // ultraObject.numberSystem({
                    //     operation:'decimal',
                    //     conversion:'to',
                    //     nS:ultraObject.scope[   pFFNS_0_i   ],
                    // })
                    // ultraObject.numberSystem({
                    //     operation:'decimal',
                    //     conversion:'from',
                    //     nS:ultraObject.scope[   pFFNS_0_i   ],
                    //     currentNumber:ultraObject.nS[   ultraObject.scope[pFFNS_0_i]   ].decimal.currentNumber + 1
                    // })
                    // ultraObject.numberSystem({
                    //     operation:'update',
                    //     nS:ultraObject.scope[   pFFNS_0_i   ]
                    // })
                    // ultraObject.forLoop(   pFFFL_1_i   )
                    // } /**/
                    

                
                console.groupEnd()
                    ///////////////////////////////////////////////////////////////////////////
                }
                
            
                            
                
                        // preFillForm({
                        //     // allTags : [document.querySelectorAll("body *")[129],document.querySelectorAll("body *")[135],document.querySelectorAll("body *")[140],document.querySelectorAll("body *")[147]],
                        //     allTags:document.querySelectorAll("body *:not(script)"), // bug it just grabs the whole query
                        //     list:{
                        //         'LinkedIn Profile':'https://www.linkedin.com/in/michael-odumosu-a58367b1',
                        //         'Website':'https://ualbanyasist.github.io/',
                        //         'How did you hear about this job?':'Linkedin',
                        //         'Phone': '$80,000',
                        //         'Cover Letter':'as'
                        //         },
                        //     look:{ 'innerHTML':null,'innerText':null,'textContent':null}
                        // })
                    

                

                
                //to remove elements from a page
                function b(   dev_obj   ){
                    ultraObject.allTags = dev_obj.allTags
                    ultraObject.eCSearch({
                        list:dev_obj.list,
                        look:dev_obj.look,
                    })
                    ultraObject.removeCN({rules:'all'})
                }
                
                
                function checkingAllValues(   dev_obj   ){ //
                    var checkingAllValuesBOOL = {0:false}
                    checkingAllValuesBOOL = ultraObject.severalOr({
                                compTo: 'match',
                                compAgn: {0:'do I Match',1:'does they match',2:'does it match',3:'match', length:4},
                                boolean:checkingAllValuesBOOL,
                                which:0
                    })
                    console.log(   checkingAllValuesBOOL   )
                }
                
                function recurisveForLoop(   dev_obj   ){
                                    var recurisveForLoop_0_i = {
                                        forLoop_0_i:0,
                                        forLoopLength:Object.keys(   dev_obj.target   ).length,
                                        fn:function(   dev_obj   ){
                                            console.log(   recurisveForLoop_0_i.forLoop_0_i,'walk in'   )
                                            console.log(   Object.values(   dev_obj.target   )[recurisveForLoop_0_i.forLoop_0_i]   )
                                            var selectCheckpoint =  {}  // when it leave recurison it restore the values
                                            
                                            
                                            if(   ultraObject.isDOMElement(   {type:Object.values(   dev_obj.target   )[recurisveForLoop_0_i.forLoop_0_i]}   )   ){
                                                selectReturn[Object.keys(   selectReturn   ).length] = Object.values(   dev_obj.target   )[recurisveForLoop_0_i.forLoop_0_i]
                                                
                                            }
                                            
                                            
                                            else if(   ultraObject.isObject(   {type:Object.values(   dev_obj.target   )[recurisveForLoop_0_i.forLoop_0_i]}   )   ){
                                                console.group('recursion')
                                                    selectCheckpoint.args = recurisveForLoop_0_i.args
                                                    selectCheckpoint.forLoop_0_i =  recurisveForLoop_0_i.forLoop_0_i
                                                    selectCheckpoint.forLoopLength = recurisveForLoop_0_i.forLoopLength
                                                    recurisveForLoop_0_i.args ={
                                                        target: Object.values(   dev_obj.target   )[recurisveForLoop_0_i.forLoop_0_i]
                                                    }
                                                    recurisveForLoop_0_i.forLoop_0_i = 0
                                                    recurisveForLoop_0_i.forLoopLength = Object.values(   Object.values(   dev_obj.target   )[recurisveForLoop_0_i.forLoop_0_i]   ).length
                                                    ultraObject.forLoop(   recurisveForLoop_0_i   )
                                                console.groupEnd()
                                                recurisveForLoop_0_i.args = selectCheckpoint.args
                                                recurisveForLoop_0_i.forLoop_0_i = selectCheckpoint.forLoop_0_i
                                                recurisveForLoop_0_i.forLoopLength = selectCheckpoint.forLoopLength
                                                
                                            }
                                            
                                        },
                                        args:{target:dev_obj.target}
                                    }
                                    ultraObject.forLoop(   recurisveForLoop_0_i   )
                    }
                
                
                // whats a good rules if parameters are part of the ultraObject or come in as an argument
                // if a function naturally passes arguments to a function, dev params must go to the ultraObject
                
                function increaseObjectLengthByNumKeys(   dev_obj   ){
                ultraObject.objectLength({
                                        val:dev_obj.object,
                                        getLen:function(   dev_obj   ){
                                            
                                            
                                            if(   !isNaN(   Object.keys(   dev_obj.val   )[dev_obj.index]   )   ){
                                                
                                                
                                                return 'true'
                                                
                                                
                                            }
                                            
                                            
                                        },
                                        result:'true'
                                        })
                    }
                    
                function bubbleSort(   dev_obj   ){
                dev_obj.allTags = ultraObject.sort({
                            target: arrayToBubbleSort,
                            algorithm:'bubble',
                            compare:function(   dev_obj   ){
                                
                                
                                if(   dev_obj.val[dev_obj.index].value > dev_obj.val[dev_obj.index+ 1].value    ){
                                    
                                    
                                    return 'true'
                                    
                                    
                                }
                            },
                            result:'true'
                            
                        })
                }
                
                
                function deleteDocument(   dev_obj   ){
                var FL_0_i = {
                                forLoop_0_i:0,
                                forLoopLength:document.all.length,
                                fn:function(   dev_obj   ){
                                    delete document.all[FL_0_i.forLoop_0_i]
                                },
                                args:{}
                            }
                            ultraObject.forLoop(   FL_0_i   )
                            
                            
                    deleteDocumentO = ultraObject.iterableObject()
                    var deleteDocumentFL_0_i = {
                        forLoop_0_i:0,
                        forLoopLength:document.all.length,
                        fn:function(   dev_obj   ){
                            preFillFormO.add(   {value:document.all[preFillFormFL_0_i.forLoop_0_i]}   )
                        },
                        args:{allTags:dev_obj.allTags}
                    }
                    ultraObject.forLoop(   preFillFormFL_0_i   )
                }
                try{
                module.exports  = ultraObject
                }
                catch(e){
                    
                }
        
        (function(){
            return 'it works!!! you did it no matter what i believe in you'
            })