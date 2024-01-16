// domaine/.netlify/1-hello
const items = [ {name:'susan'},{name:'anna'}]
const items2 = require('../assets/data')
exports.handler = async (event,context)=>{
    return {
        statusCode:200,
        body:JSON.stringify(items2),
    }
}