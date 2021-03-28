
import * as DAO from './../DAO/index';
import * as Models from './../models/index';

const create_admin = async() => {
      try {

        // check admin exist or not
        let query = { email:"admin@gmail.com" }
        let projection = { __v : 0 }
        let options = { lean : true }
        let fetch_data : any = await DAO.get_data(Models.Admin, query, projection, options);
        
        if(fetch_data.length == 0) {
            // create admin  
            let save_data = {
                  email : "admin@gmail.com",
                  password : "qwerty"
            }
            await DAO.save_data(Models.Admin, save_data);
        }

      }
      catch(err) {
            throw err;
      }
}

export default create_admin;