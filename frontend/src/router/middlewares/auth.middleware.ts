import {LOGIN_PAGE} from "@/router/names"
import appUtils from "@/utils/app.utils"

const authMiddleware = () => {
    if (!appUtils.isLoggedIn())
        return { name: LOGIN_PAGE }
}

export default authMiddleware