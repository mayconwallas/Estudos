export const handlesStatus = res => 
    res.ok ? res.json() : Promise.reject(res.statusText);