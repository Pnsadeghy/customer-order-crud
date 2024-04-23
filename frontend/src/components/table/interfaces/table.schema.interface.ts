import type TableSchemaColumnInterface from "./table.schema.column.interface"
import TableOrderTypeEnum from "../enums/TableOrderTypeEnum"
import {type ComponentOptions} from "vue"

export default interface TableSchemaInterface {
    api?: (values: object) => Promise<object>
    deleteApi?: (item: object) => Promise<object>
    pagination?: boolean
    columns: TableSchemaColumnInterface[]
    hasActionColumn?: boolean,
    recordComponent: ComponentOptions
    searchComponent?: ComponentOptions
    order?: {
        key: string
        type?: TableOrderTypeEnum
    }
}