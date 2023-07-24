import axios from "axios";

const http = axios.create({ baseURL: "https://pokeapi.co/" });

http.all = axios.all;

export default http;
