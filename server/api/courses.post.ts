import storage from '../storage/courses'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    storage.add(body)
    return body
})
