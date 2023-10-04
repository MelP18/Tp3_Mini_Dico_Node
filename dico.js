 const TableDICO =  [
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

var letter = "manger";
function enterword (chunk){
    letter = chunk.toString().toLowerCase().trim()
   return letter
}

function exword(){
    var translate;
    TableDICO.forEach(element=>{

        translate = TableDICO.find(function(item){
            return item.french === letter || item.english ===  letter 
        })

        if(!translate){   
            return 'Mot pas disponible'
        }

        if(element.french === letter){

            console.log(translate)
           return translate.english

        }else if(element.english == letter){

            console.log(translate)
            return translate.french

        }            
   })
}
module.exports =  {TableDICO, exword, letter,enterword};