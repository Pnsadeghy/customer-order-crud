export default interface LoaderInterface {
    loading: boolean
    loaded: boolean
    error?: string
    startLoading: () => void
    onSuccess: () => void
    onFail: (e: any) => void
}