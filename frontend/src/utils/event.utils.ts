const eventUtils: {
    events: {[key: string]: ((data?: object)=>void)[]},
    emit: (key: string, data: any) => void,
    on: (key: string, callback: any) => void,
    off: (key: string, callback: any) => void
} = {
    events: {},
    emit(key: string, data: object = {}) {
        if (!this.events[key]) return
        for (const callback of this.events[key])
            callback(data)
    },
    on(key: string, callback: (data?: object) => void) {
        if (!this.events[key]) this.events[key] = []
        this.events[key].push(callback)
    },
    off(key: string, callback: (data?: object) => void = null) {
        if (!this.events[key]) return

        if (callback === null) {
            delete this.events[key]
            return
        }

        this.events[key] = this.events[key].filter((i: any) => i !== callback)
        if (this.events[key].length === 0)
            delete this.events[key];
    }
}

export default eventUtils