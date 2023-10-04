var homeController = require('../controllers/homeController')

//Router.get('path', controller.function)

var Routes = {
    "GET": {

        "/":{    
            homeController:homeController.index
        },

        "/about":{
            homeController:{
                about:homeController.about
            }

        },
    
    },
    "POST":{

        "/contact":{
            homeController:homeController.contact
        },

        "/translate":{
            homeController:homeController.translate
        }
    }
}
    
const router = (req ,res)=>{
    const {url, method} = req;

    const methodRoute = Routes[method]
    
    if(!methodRoute){
        res.writeHead(405);
        res.end('405 Method Not Allowed');
        return;
    }
   
    const route  = methodRoute[url]

    if(!route){
        res.writeHead(404);
        res.end('404 Not Found');
        return;
    }

    
    route.homeController(req, res)

    //Routes.GET("/", homeController.index(req,res));

    //Routes.GET("/about", homeController.about(req,res));

    //Routes.POST("/", homeController.contact(req,res));

    //Routes.POST("/", homeController.translate(req,res));
    
} 

module.exports = {Routes, router}