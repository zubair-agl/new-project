import axios from "axios";
import { LOGIN_URL } from "./constants";

export async function login(body) {
    const res = await axios.post(`${LOGIN_URL}`, body )
    console.log('response in services', res.data)
    return res.data
}