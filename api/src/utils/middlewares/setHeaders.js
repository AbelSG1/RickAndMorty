const  setHeader  = (req, res, next) => {
    res.header("Access-Control-Allow-Origin","http:localhost:3001")
    res.header("Access-Control-Allow-Credentials",true)
    res.header("Access-Control-Allow-Headers","Origien, X-Requested-With, Content-Type, Accept")
    res.header("Access-Control-Allow-Methods","GET, POST, OPTIONS, PUT, DELETE")
    next()
}

module.exports = setHeader;