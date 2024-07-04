import axios from "axios";
let api = "";
console.log("VITE", import.meta.env);
console.log("Process", process.env);

if (import.meta.env.MODE === "dev") {
    api = `${import.meta.env.VITE_API_LOCAL}`;
} else {
    api = `${import.meta.env.VITE_API_BACKEND}`;
}
export const req = axios.create({
    baseURL: api,
    withCredentials: true,
});

export const axiosJWT = axios.create({
    baseURL: api,
    withCredentials: true,
});
console.log("API", api);