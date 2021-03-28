
import fastify from 'fastify'
import { config } from 'dotenv';
config();
import { openapi_options, connect_to_db, bootstrap } from './src/config/index';
import { admin_routes } from './src/routes/index';

const server = fastify()
const node_env = process.env.NODE_ENV;
const production_port = process.env.SERVER_PORT_PROD;
const local_port = process.env.SERVER_PORT_DEV;
let port : any = 2021;

if(node_env == 'local') { port = local_port }
else if(node_env == 'server') { port = production_port }

// resgister plugins
server.register(require('fastify-multipart'), { addToBody : true })
server.register(require('fastify-formbody'))
server.register(require('fastify-cors'),{origin : "*" })
server.register(require('fstfy_openapi'), openapi_options)

server.route(admin_routes.admin_login)
server.route(admin_routes.access_token_login)


server.listen(port, (err, address) => {
      if(err) {
            console.error(err)
            process.exit(1)
      }
      console.log(`Server listening at ${address}/docs`)
})

connect_to_db();
bootstrap();




