const useRouter = require('./routes').router
const handler = (req, res) =>{
   /*  res.writeHead(200,{
        "Content-Type":"application/string",
        Accept:"application/string" 
    });

    req.on('data',function(chunk){

    })

    req.on('end', function(){
        res.end(

        )
    }) */
    useRouter(req, res);

    //res.end('Hello word')

};

module.exports = handler