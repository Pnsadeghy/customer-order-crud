export default interface PromptInterface {
    title: string
    message: string
    theme: "success" | "danger"
    confirmText?: string
    rejectText?: string
    confirm: () => void
    reject?: () => void
}