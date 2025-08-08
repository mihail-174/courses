import storage from '../storage/categories'

export default defineEventHandler((event) => {
    return storage.list()
})
