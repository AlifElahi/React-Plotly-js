import axios from "axios";
// import {devBsseUrl} from "../conjig"

const api = axios.create({
    baseURL: "devBsseUrl",
    headers: { 'Content-type': 'application/json; charset=UTF-8' }
});

export const getBarChartData = async () => {
    try {
        let response = await api.get('/')
        if (response.data)
            return response.data
    } catch (error) {

        return error
        //    return {error}

    }
}


export const getSplomData = async () => {
    try {
        let response = await api.get('/')
        if (response.data)
            return response.data
    } catch (error) {

        return error
        //    return {error}

    }
}