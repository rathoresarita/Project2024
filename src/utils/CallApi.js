import axios from 'axios'
import { BASE_URL } from '../utils/Constants'

const config = {
    headers: {
        "Conten-Type": "application/json",
        "Accept": "application/json"
    }
}

export const callApi = async (resource) => {


    const { data } = await axios.get(`${BASE_URL}/${resource}`,config)
    return data
}
