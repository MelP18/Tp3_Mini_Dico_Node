const http = require('http');
var server = require('./server')
/* var server = http.createServer(function(req, res){
    res.writeHead(200,{
        "Content-Type":"application/string",
        Accept:"application/string"
    });

    var dicoTable = require('./dico').TableDICO
    //var filterFunction = require('./dico').setword

    var letter = '';
    var translate;
    req.on('data',function(chunk){
        letter = chunk.toString().toLowerCase().trim()

    })

    var getword = require('./dico').exword
    req.on('end', 
    function(){
        dicoTable.forEach(element=>{

            translate = dicoTable.find(function(item){
                return item.french === letter || item.english === letter 
            })
            

            if(!translate){   
                //res.end('Mot pas disponible') 
                res.writeHead(404);
                res.end('404 Not Found');
                return;
            }

            if(element.french === letter){

                console.log(translate)
                res.end(translate.english) 

            }else if(element.english == letter){

                console.log(translate)
                res.end(translate.french)

            }            
        })
    } 

   

    )
        
           
}); */

server.listen(8030, function(){
    console.log("Server is running at 8030");
})