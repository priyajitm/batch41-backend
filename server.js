import { response } from 'express'
import {createServer} from 'http'

const server = createServer(function(request, response) {
  // response.writeHead(200, {'Content-Type': 'text/plain'}) // writing Response Header
  // response.end('Hello Class') // writing Response Body


  const url = request.url

  if (url === '/dashboard') {
    response.writeHead(200, {'Content-Type': 'text/plain'}) 
    response.end('Home Page')
  }

  else if (url === '/login') {
    response.writeHead(200, {'Content-Type': 'text/plain'}) 
    response.end('About Page')
  }

  else if (url === '/register') {
    response.writeHead(200, {'Content-Type': 'text/plain'}) 
    response.end('Contact Page')
  }

  else {
    response.writeHead(404, {'Content-Type': 'text/plain'}) 
    response.end('Error Page')
  }

})



server.listen(4000, () => {
  console.log('Server is running at http://localhost:4000/')
})