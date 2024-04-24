import type ProductItemInterface from "./interfaces/product.item.interface"
import productApi from "@/app/product/services/product.api"
import { defineStore } from 'pinia'
import {ref} from "vue"

const useProductStore = defineStore("product", () => {
    const products = ref<ProductItemInterface[]>([])

    const getProducts = () => {
        productApi.all().then((res: {data: ProductItemInterface[]}) => {
            products.value = res.data
        })
    }
    const clearProducts = () => {
        products.value = []
    }

    return {
        products,
        getProducts,
        clearProducts
    }
})

export default useProductStore