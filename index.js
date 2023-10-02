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
            return item.french === letter || item.english ===  letter
            
        })

        if(translate){   
            const letterIndex = dicoTable.findIndex(function(element){
                return element === translate
            }) 
            console.log(translate)
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
 


/* if(dicoTableItem){  
    const letterIndex = dicoTable.findIndex(function(element){
        return element === dicoTableItem
    }) 

    if(letterIndex !== -1){
        var translate = dicoTable[letterIndex === 1 ? 0 : 0]
        res.end(translate)   
    }
}
 */

