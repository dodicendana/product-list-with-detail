import fetchApi from "./fetchApi";

const getProducts = (searchTerm, page) => {
    let urlString = "https://dummyproducts-api.herokuapp.com/api/v1/products";
    const apiKey = "5oIDTjlULgO8";
    const limit = 5; 

    if (searchTerm) {
        urlString += `/search?term=${searchTerm}&limit=${limit}&` + (page ? `page=${page}&` : "");
    } else  {
        urlString += `?limit=${limit}&` + (page ? `page=${page}&` : "");
    }
    
    return fetchApi("get", urlString += `apikey=${apiKey}`);
}

export default getProducts;