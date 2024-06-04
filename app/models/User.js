import {Schema,models,model} from 'mongoose'
import bcrypt from 'bcrypt'
const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        validate: pass => {
          if (!pass?.length || pass.length < 8  )  {
            throw new Error('Password must be at least 8 characters')
          }
        }
    },

},{timestamps: true})


UserSchema.post("validate", function (user) {

 const notHashedPass = user.password
 const salt = bcrypt.genSaltSync(10);

 user.password = bcrypt.hashSync(notHashedPass, salt)

});

export const User = models?.User || model('User', UserSchema)