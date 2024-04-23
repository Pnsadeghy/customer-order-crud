import type AppUtilsInterface from "./interfaces/app.utils.interface"

const appUtils: AppUtilsInterface = {
    isLoggedIn: () => false,
    authToken: () => null,
    translate: (key: string, params: object = {}) => key,
    logout: () => {}
}

export default appUtils