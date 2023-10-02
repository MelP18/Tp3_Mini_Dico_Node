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
        }
    ]

    var letter = '';
    req.on('data',function(chunk){
        letter = chunk.toString().trim();

        const translate = dicoTable.find(function(item){
            return item.french ===  letter 
        })

        if(translate){   
            console.log(translate.french)
            res.end(translate.english)            
        }

        res.end(
            res.end('Mot pas disponible')
        )   
    })


});
server.listen(8030, function(){
    console.log("Server is running at 8030");
})
 




