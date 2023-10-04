

const index = (req, res)=>{
    res.end('Welcome to homepage');
};

const about = (req, res)=>{
    res.end('This is about page')
};

const contact = (req,res)=>{
    res.end('This is contact page')
}

const translate = (req, res)=>{
    //res.end('This is the translate page')
   res.writeHead(200,{
        "Content-Type":"application/string",
        Accept:"application/string"
    });

    var dicoTable = require('../dico').TableDICO
    var filterFunction = require('../dico').setword

    var letter = '';
    var translate;
    req.on('data',function(chunk){
        letter = chunk.toString().toLowerCase().trim()

    })

    //var getword = require('./dico').exword
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
    } )

}

module.exports = {index, about, contact, translate}