import fetchApi from "./fetchApi";

const getProductDetails = (productId) => {
    let urlString = `https://dummyproducts-api.herokuapp.com/api/v1/products/${productId}`;
    let apiKey = "5oIDTjlULgO8";
    return fetchApi("get", urlString += `?apikey=${apiKey}`);
}

export default getProductDetails;