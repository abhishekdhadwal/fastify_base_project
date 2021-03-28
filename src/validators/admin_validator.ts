
import validator from 'fluent-json-schema';

const admin_login = validator.object()
      .prop('email', validator.string().required())
      .prop('password', validator.string().required())


export {
      admin_login
}