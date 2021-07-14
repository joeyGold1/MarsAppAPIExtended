import axios from "axios";

export default async function getFromApi<T>(url: string) : Promise<T> {
    return (await axios.get(url)).data;
}