const http = require('http');

var server = http.createServer(function(req, res){
    res.writeHead(200,{
        "Content-Type":"application/string",
        Accept:"application/string"
    });

    const dicoTable = [
        {
            french:'manger',
            english:'eat'
        },
        {
            french:'citation',
            english:'quote'
        },
        {
            french:'aimer',
            english:'love'
        },
        {
            french:'parler',
            english:'speak'
        },
        {
            french:'danser',
            english:'dance'
        },
        {
            french:'chanter',
            english:'sing'
        }
    ]

    var letter = '';
    req.on('data',function(chunk){
        letter = chunk.toString().toLowerCase().trim()

        dicoTable.forEach(element=>{
            const translate = dicoTable.find(function(item){
                return item.french === letter || item.english ===  letter 
            })

            if(!translate){   
                res.end(res.end('Mot pas disponible')) 
            }

            if(element.french === letter){

                console.log(translate)
                res.end(translate.english) 

            }else if(element.english == letter){

                console.log(translate)
                res.end(translate.french)

            }            
       })
           
    }) 

});
server.listen(8030, function(){
    console.log("Server is running at 8030");
})