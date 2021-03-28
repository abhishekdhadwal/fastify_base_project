
import validator from 'fluent-json-schema';

const headers = validator.object()
      .prop('x-authorization', validator.string().required())


export {
      headers
}