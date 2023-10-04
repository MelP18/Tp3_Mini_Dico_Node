var homeController = require('../controllers/homeController')
var Routes = require('./route2').Routes

var router = require('./route2').router
Routes;
router


/* const routes = {
    /* "/":{
        method : ['GET'],
        handler:(req, res) =>{
            res.end('Welcome to homepage')
        }
    }, *
   
    "/":{
        method:'GET',
        handler:homeController.index,
    },
    "/about":{
        method:'GET',
        handler:homeController.about
    } 
};  */ 


/* const router = (req ,res)=> {
    const {url, method} = req;

    const route = routes[url]

    if(!route){
        res.writeHead(404);
        res.end('404 Not Found');
        return;
    }

    if(method !== route.method){
        res.writeHead(405);
        res.end('405 Method Not Allowed');
        return;
    }

    route.handler(req, res)
}   */






/*====================> TROUVE <=================*/
/* const router = (req ,res)=>{
    const {url, method} = req;

    if(method != Routes['/'].get){
        res.writeHead(405);
        res.end('405 Method Not Allowed');
        return;
    }

    //const route = Routes.GET[url]
    const route = Routes[url]

    if(!route){
        res.writeHead(404);
        res.end('404 Not Found');
        return;
    }

    route.handler(req, res)
}  */
module.exports = {router}