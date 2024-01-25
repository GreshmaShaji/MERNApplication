const http = require('http');


const server = http.createServer((req,res)=>{
    if(req.url === '/'){

        res.end('Welcome to the home page!')
   
    }
    if(req.url === '/about'){
        res.end('Here is the story')
    }

    res.end(
        `<h1>Oops!</h1>
        <p>The page you are looking for is not available</p>
        <a href="/">back home</a>`
    )
})

server.listen(5004);