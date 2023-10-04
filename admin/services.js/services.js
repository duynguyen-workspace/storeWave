const BASE_URL = "https://65184b26582f58d62d358ffe.mockapi.io/products";

function getProductslist(){
    return axios({
        url: BASE_URL, method: "GET",
    });
}

function delProductslist(id){
    return axios({
        url: `${BASE_URL}/${id}`, method: "DELETE",
    });
}

function AddProductslist(){
    return axios({ 
        url: BASE_URL, METHOD: "POST", data: sp,
    })
}

function getProductID(id){
    return axios({
        url: `${BASE_URL}/${id}`, method: "GET",
    });
}

function UpdateProductslist(id, sp){
    return axios({
        url: `${BASE_URL}/${id}`, method: "PUT", data: sp,
    });
}

