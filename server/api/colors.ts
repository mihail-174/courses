import {Color} from '../types'

type ColorResponse = {
  items: Color[]
}

export default defineEventHandler(async (event) => {
  const res = await $fetch<ColorResponse>('https://vue-study.skillbox.cc/api/colors')
  return res.items.map(({id, code}) => ({id, code}))
})
