import {MemoryStorage} from "./storage";
import {Category} from "../types"

export default new MemoryStorage<Category>([
    {
        id: 1,
        name: 'Простые',
        colorId: 2
    },
    {
        id: 2,
        name: 'Средние',
        colorId: 1
    },
    {
        id: 3,
        name: 'Продвинутые',
        colorId: 8
    }
])