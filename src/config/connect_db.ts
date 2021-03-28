
import mongoose from 'mongoose';
import db_config from './db_config';

const connect_to_db = async() => {

      let fetch_url = db_config.URI
      let options = {
            useNewUrlParser : true, 
            useUnifiedTopology : true, 
            useFindAndModify : false
      }

      mongoose.connect(fetch_url, options);
      mongoose.connection.on("connected", (data) => {
          console.log("connected to MongoDb");
      });
      mongoose.connection.on("error", (error) => {
          console.log(error);
      });

}

export default connect_to_db;