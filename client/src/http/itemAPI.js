import { $authHost, $host } from ".";


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

export const addFavItem = async (userId, itemId) => {
    await $authHost.put('api/favorite/user/' + userId + '/add/' + itemId)
}

export const deleteFavItem = async (id, itemId) => {
    await $authHost.put('api/favorite/user/' + id + '/delete/' + itemId)
}

export const getFavorite = async(id) => {
    const {data} = await $authHost.get('api/favorite/' + id)
    return data.favorites_items
}

export const addBasketItem = async (id, itemId, color, item_count) => {
    await $authHost.post('api/basket/item/' + id, {itemId, color, item_count})
}

export const deleteBasketItem = async (basketId, itemId)=>{
    await $authHost.put('api/basket/' + basketId + '/delete/' + itemId)
}

export const getBasket = async (id) => {
    const {data} = await $authHost.get('api/basket/' + id)
    return data.basket_items
}

export const createOrder = async (
    id,
    name,
    surname,
    email,
    address,
    phone,
    items,
    total_price
) => {
    console.log('items', items)
    console.log(id, name, surname, email, address, phone, items, total_price)
    const {data} = await $authHost.post('api/orders/user/' + id, {
        name,
        surname,
        email,
        address,
        phone,
        items,
        total_price
    })
    console.log('data', data)
}

export const getOrders = async (id) => {
    console.log(id)
    const {data} = await $authHost.get('api/orders/user/' + id)
    console.log('data', data)
    return data
}