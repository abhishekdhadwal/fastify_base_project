
import { common_controller } from './index';

const test_api = async(request : any, reply : any) => {
      try {

            let body = request.body

            let data_to_return = {
                  name : body.name,
                  email : body.email
            }
            common_controller.handle_success(reply, data_to_return)

      }
      catch(err) {
            common_controller.handle_catch(reply, err)
      }
}


export {
      test_api
}