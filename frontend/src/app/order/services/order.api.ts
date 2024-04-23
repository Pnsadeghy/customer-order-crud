import {apiInstance} from "@/utils/api.utils"

const orderApi = {
    index: (params: object) => apiInstance.get("order", {params}),
    store: (data: object) => apiInstance.post("order", data),
    destroy: (id: string) => apiInstance.delete(`order/${id}`)
}

export default orderApi