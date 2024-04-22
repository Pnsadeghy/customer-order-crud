import AuthRepositoryInterface from "./interfaces/auth.repository.interface"
import UserModel, {UserDocument} from "../models/user.model"
import bcrypt from "bcrypt"

const authRepository: AuthRepositoryInterface = {
    register: async (username: string, email: string, password: string) => {
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = new UserModel({ username, email, password: hashedPassword })
        await newUser.save()
        return newUser
    },

    findUser: async (username: string, password: string) => {
        const user = await UserModel.findOne({ username })
        if (user === null) return null
        return await authRepository.checkUserPassword(user, password)
            ? user : null
    },

    findUserById: async (id: string) => await UserModel.findById(id),

    checkUserPassword: async (user: UserDocument, password: string) => await bcrypt.compare(password, user.password),

    updateUserPassword: async (user: UserDocument, password: string)=> {
        user.password = await bcrypt.hash(password, 10)
        await user.save()
    },

    isUserRegistered: async (username: string, email: string) =>
        !!(await UserModel.findOne({ $or: [{ username }, { email }] }))
}

export default authRepository