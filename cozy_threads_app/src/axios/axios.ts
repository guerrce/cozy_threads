import axios from "axios";
import { DEV_API_URL, PROD_API_URL } from "../constants/urls";

const instance = axios.create({
  baseURL: process.env.REACT_APP_NODE_ENV !== 'dev'
    ? DEV_API_URL
    : PROD_API_URL,
});

export default instance;
