export class MemoryStorage<T> {
    private data:  T[] = []
    constructor(data: T[] = []) {
        this.data = data
    }
    add(value:T) {
        this.data.push(value)
    }
    list() {
        return this.data
    }
}