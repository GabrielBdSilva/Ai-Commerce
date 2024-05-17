import axios from "axios";

const client = axios.create({
    baseURL: "https://6646b1e651e227f23aaf9578.mockapi.io/aicommerce",
});
export default client;