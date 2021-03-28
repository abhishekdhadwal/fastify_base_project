
import * as DAO from '../DAO';
import * as Models from '../models';
import { common_controller } from './index';
import { verify_token } from '../Libs/index';
import { app_constant, error } from '../config/index';

const admin_scope = app_constant.scope.admin;


const admin_login = async (request : any, reply : any) => {
      try {

            let body = request.body;
 
            let query = { email : body.email }
            let projection = { __v : 0 }
            let options = { lean : true }
            let fetch_data : any = await DAO.get_data(Models.Admin, query, projection, options)
            
            if(fetch_data.length) {

                  let password_1 = fetch_data[0].password
                  let password_2 = body.password

                  if(password_1 != password_2) { throw error.invalid_password }
                  else {

                        // generate token 
                        let token_data = { 
                              _id : fetch_data[0]._id,
                              scope : admin_scope,
                              collection : Models.Admin,
                              token_gen_at : +new Date()
                        }
                        let response = await common_controller.fetch_token(token_data)
                        if(response) { common_controller.handle_success(reply, response) }

                  }

            }else {
                  throw error.no_data_found
            }
            
      }
      catch(err) {
            common_controller.handle_catch(reply, err)
      }
}

const access_token_login = async(request : any, reply : any) => {
      try {

            let headers = request.headers;
            let token_result = await verify_token(headers["x-authorization"], admin_scope)
            
            // data to return
            common_controller.handle_success(reply, token_result)

      }
      catch(err) {
            common_controller.handle_catch(reply, err)
      }
}

export {
      admin_login,
      access_token_login
}