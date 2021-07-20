const http = require('http');

const port = 1999

const server = http.createServer((req, res) => {
    // console.log(res)
    res.end(`
    <html>
    <head>
        <title>About Node js</title>
    </head>
    <body>
    <h1>About Node js</h1>
        <h3>Understanding</h3> 
        <p>
        By my understanding, Node js is a more backend tools for web development.
        Which is more about control server and data request. It's runtime of javascript and
        let us write code server side code.
        </p>   
        <h3>Expectations</h3> 
        <p>
        I am excited to have the course about Node js because before that I just learn the tools
        which more front-end side only. This is the first time for me to have chance to jump into the back-end
        environment. Node.js is very popular and I wish I can become full-stack developer by learning Node js.
        </p>      
    </body>
    </html>
`);
})

server.listen(port, () => {
    console.log(`server is now listening from port${port}`)
    console.log(`This is my first node server!`)
})