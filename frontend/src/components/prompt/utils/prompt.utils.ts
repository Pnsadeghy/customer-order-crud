import type PromptInterface from "../interfaces/prompt.interface"
import eventUtils from "@/utils/event.utils"
import appUtils from "@/utils/app.utils"

export const PROMPT_OPEN_EVENT = "PROMPT_OPEN_EVENT"

export const openDeletePrompt = (confirm: () => void) => {
    openPrompt({
        title: appUtils.translate("message.confirm.delete.title"),
        message: appUtils.translate("message.confirm.delete.message"),
        confirmText: appUtils.translate("button.delete"),
        theme: "danger",
        confirm
    } as PromptInterface)
}

export const openPrompt = (prompt: PromptInterface): void => {
    if (!prompt.confirmText) prompt.confirmText = appUtils.translate("button.yes")
    if (!prompt.rejectText) prompt.rejectText = appUtils.translate("button.no")
    eventUtils.emit(PROMPT_OPEN_EVENT, prompt)
}