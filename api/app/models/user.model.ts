import mongoose, { Schema, Document } from 'mongoose'

export interface UserDocument extends Document {
    username: string;
    email: string;
    password: string;
}

const userSchema: Schema = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
})

const UserModel = mongoose.model<UserDocument>('User', userSchema)

export default UserModel