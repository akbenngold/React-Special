const API_BASE_URL = 'https://fakestoreapi.com'

export const fetchProducts = async () =>{
try {
    const response = await fetch ( `${API_BASE_URL}/products`);
    if(!response.ok){
        throw new Error ("Network request was not okay")
    }
    const data = response.json();
    return data;
}
catch(error){throw error}
}