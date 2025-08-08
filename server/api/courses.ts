import storage from '../storage/courses'

export default defineEventHandler(async (event) => {
    console.log(`fetch courses ${getRequestURL(event).pathname}`)
    await new Promise(r => setTimeout(r, 2000))
    return storage.list()
})
