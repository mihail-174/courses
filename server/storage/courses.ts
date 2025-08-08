import {MemoryStorage} from "./storage";
import {Course} from "../types"

export default new MemoryStorage<Course>([
    {
        id: 1,
        name: 'Кройка для начинающий',
        categoryId: 1
    },
    {
        id: 2,
        name: 'Кройка',
        categoryId: 2
    },
    {
        id: 3,
        name: 'Шитье',
        categoryId: 3
    },
    {
        id: 4,
        name: 'Дизайн',
        categoryId: 2
    }
])