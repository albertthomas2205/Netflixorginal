import axios from "axios";
import {baseUrl} from "../Constans/Constans"
const instance = axios.create({
    baseURL: baseUrl,
})

export default instance