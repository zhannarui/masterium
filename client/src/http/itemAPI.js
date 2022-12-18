import { $host } from ".";


export const getCategoties = async () => {
    const {data} = await $host.get('api/category')
    return data
}

export const getItems = async (categoryId) => {
    const {data} = await $host.get('api/item', {params: {categoryId}})
    return data
}

export const getOneItem = async (id) => {
    const {data} = await $host.get('api/item/' + id)
    return data
}

export const getColors = async (itemId) => {
    const {data} = await $host.get('api/color', {params: {itemId}})
    return data
}


