import axios from 'axios';

const API_URL = 'api/items/'

const createItem = async (itemData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }

    const response = await axios.post(API_URL, itemData, config)

    return response.data
}

const deleteItem = async (id, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }

    const response = await axios.delete(API_URL + id, config)
    return response.data
}

const getItems = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }

    const response = await axios.get(API_URL, config)

    return response.data
}

const itemService = {
    createItem,
    getItems,
    deleteItem,
}

export default itemService