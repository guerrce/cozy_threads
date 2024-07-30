import axios from "axios";
import { STRIPE_API_URL } from "../constants/urls";

const instance = axios.create({
  baseURL: STRIPE_API_URL,
});

export default instance;
