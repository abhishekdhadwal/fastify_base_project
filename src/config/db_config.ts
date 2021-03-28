
import { config } from 'dotenv';
config();

let db_config : any = {}

if(process.env.NODE_ENV == 'local') {
      
      db_config = {
            PORT : process.env.SERVER_PORT_DEV,
            URI : 'mongodb://localhost:27017/fastify_base_project'    
      }

} 
else if(process.env.NODE_ENV == 'server') {

      db_config = {
            PORT : process.env.SERVER_PORT_PROD,
            URI : 'mongodb://localhost:27017/fastify_base_project'    
      }

}


export default db_config