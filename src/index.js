const dotenv = require('dotenv')
const path = require('path')

const env = dotenv.config({
    path: path.join(__dirname,'../.env.production')
});

setInterval(( ) => {
    
    // console.log("teste")
    console.log(process.env.NODE_ENV)
    console.log("Amor")
},1000)
