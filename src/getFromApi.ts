import axios from "axios";

export default async function getFromApi<T>(url: string) : Promise<T> {
    return new Promise<T>((resolve,reject)=>{axios
        .get(url)
        .then((result:{data:T})=>{
            resolve(result.data)
        })
        .catch(()=>{
            reject();
        });
    });
}