
import * as DAO from '../DAO/index';
import { generate_token } from '../Libs/index';


const fetch_token = async(function_data : any) => {
      try {

            let fetch_token = await generate_token(function_data)

            // save token in database
            let query = { _id : function_data._id }
            let update_data = { 
                  access_token : <string>fetch_token, 
                  token_gen_at : function_data.token_gen_at 
            }
            let options = { new : true }
            let token_info = await DAO.find_and_update(function_data.collection, query, update_data, options)
            return token_info

      }
      catch(err) {
            throw err;
      }
}

const handle_catch = (reply : any, error : any) => {
      reply.status(200).send({
            success : 400,
            error : error.custom_msg,
      });
}

const handle_success = (reply : any, data_to_return : any) => {
      reply.send({
            success : 200,
            data : data_to_return,
      });
}

const handle_failure = (reply : any, error : any) => {
      reply.status(200).send({
            success : 500,
            error : error.custom_msg,
      });
}


export {
      fetch_token,
      handle_catch,
      handle_success,
      handle_failure
}