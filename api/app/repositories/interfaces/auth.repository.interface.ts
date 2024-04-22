import UserModel, {UserDocument} from "../../models/user.model"
import bcrypt from "bcrypt";

export default interface AuthRepositoryInterface {
    register: (username: string, email: string, password: string) => Promise<UserDocument>
    findUser: (username: string, password: string) => Promise<UserDocument|null>
    findUserById: (id: string) => Promise<UserDocument|null>
    checkUserPassword: (user: UserDocument, password: string) => Promise<boolean>
    updateUserPassword: (user: UserDocument, password: string) => Promise<void>
    isUserRegistered: (username: string, email: string) => Promise<boolean>
}