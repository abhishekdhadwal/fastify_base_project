
import { createSchema, Type, typedModel } from 'ts-mongoose';

const AdminSchema = createSchema({
      access_token : Type.string({ default : null }),
      email : Type.string({ default : null }),
      password : Type.string({ default : null }),
      token_gen_at : Type.string({ default : null }),
      created_at : Type.string({ default : +new Date() }),
})

const Admin = typedModel('admins', AdminSchema);

export default Admin