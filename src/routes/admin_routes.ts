
import { admin_validator, headers } from '../validators/index';
import { admin_controller } from '../controller/index';


const admin_login : any = {
      method : 'POST',
      url : '/Admin/login',
      schema : {
            body : admin_validator.admin_login,
            response : {}
      },
      config : {
            openapi : {
                  description : 'Admin Login Api',
                  summary : 'Admin Login',
                  tags : [ "Admin" ],
            }
      },
      handler(request : any, reply : any) {
            admin_controller.admin_login(request, reply)
      }
}

const access_token_login : any = {
      method : 'GET',
      url : '/Admin/access_token_login',
      schema : {
            headers : headers,
            response : {}
      },
      config : {
            openapi : {
                  description : 'Admin Access Token Login Api',
                  summary : 'Admin Access Token Login',
                  tags : [ "Admin" ],
            }
      },
      handler(request : any, reply : any) {
            admin_controller.access_token_login(request, reply)
      }
}

export {
      admin_login,
      access_token_login
}