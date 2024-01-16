// domaine/.netlify/1-hello
exports.handler = async (event,context)=>{
    return {
        statusCode:200,
        body:'hello abdallah',
    }
}