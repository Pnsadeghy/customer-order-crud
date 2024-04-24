import type TableSchemaInterface from "@/components/table/interfaces/table.schema.interface"
import type OrderItemInterface from "../interfaces/order.item.interface"
import {ClipboardDocumentListIcon} from "@heroicons/vue/24/outline"
import OrderTableRecord from "../OrderTableRecord.vue"
import orderApi from "../services/order.api"

const orderTableSchema: TableSchemaInterface = {
    api: orderApi.index,
    deleteApi: (order: OrderItemInterface) => orderApi.destroy(order.id),
    pagination: true,
    hasActionColumn: true,
    recordComponent: OrderTableRecord,
    columns: [
        {
            name: "order.list.code"
        },
        {
            name: "order.list.customer"
        },
        {
            name: "order.list.totalPrice"
        },
        {
            name: "order.list.date"
        }
    ],
    empty: {
        icon: ClipboardDocumentListIcon,
        text: "order.empty"
    }
}

export default orderTableSchema