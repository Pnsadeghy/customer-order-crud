import type LoaderInterface from "../interfaces/loader.interface"
import {reactive} from "vue"
export const generateLoader = () => reactive<LoaderInterface>({
  loading: true,
  loaded: false,
  error: '',
  startLoading() {
      this.loading = true
      this.error = ''
  },
  onSuccess() {
      this.loading = false
      this.loaded = true
  },
  onFail(e: any) {
      this.loading = false
      this.error = e.message
  }
})