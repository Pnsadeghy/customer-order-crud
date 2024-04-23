import {apiInstance} from "@/utils/api.utils";

const productApi = {
    all: () => apiInstance.get("product")
}

export default productApi