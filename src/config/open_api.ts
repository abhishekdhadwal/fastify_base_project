
const port = process.env.SERVER_PORT_DEV;

const openapi_options = {
      openapi : {
            openapi : '3.0.3',
            info : {
                  title : 'Fastify Base Project',
                  description : 'Fastify Base Project Api Documentation',
                  version : '1.0.0',
            },
            servers : [ { url : `http://127.0.0.1:${port}/` } ],
            tags : [],
      }
}


export default openapi_options