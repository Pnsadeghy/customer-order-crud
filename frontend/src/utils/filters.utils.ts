import {dateFormat} from "@/utils/date.utils";

const appFilters = {
    date: (value: string) => dateFormat(value),
    currency: (value: number) => `$ ${Math.round(value*100)/100}`
}

export default appFilters