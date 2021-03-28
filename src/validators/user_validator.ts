
import validator from 'fluent-json-schema';

const test_api = validator.object()
      .prop('name', validator.string())
      .prop('email', validator.string())


export {
      test_api
}