import axios from "axios";
import { APIPath } from "../constants/APIPath";

export const api = axios.create({
    baseURL: APIPath.API
})