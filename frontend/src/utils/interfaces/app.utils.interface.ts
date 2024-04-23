export default interface AppUtilsInterface {
    isLoggedIn: () => boolean
    authToken: () => string|null
    translate: (key: string, params?: object) => string
    logout: () => void
}