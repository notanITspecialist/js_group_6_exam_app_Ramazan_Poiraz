import axios from "axios";

export const GET_PRODUCT_RES = 'GET_PRODUCT_RES';



const getProductRes = data => ({type: GET_PRODUCT_RES, data});



export const getProduct = id => async dispatch => {
    const data = await axios.get('http://localhost:8000/products/'+id);
    dispatch(getProductRes(data.data));
};

export const addProduct = (data, token, history, category) => async dispatch => {
    await axios.post('http://localhost:8000/products', data, {headers: {'Authorization': 'Token '+token}});
    history.push('/category/'+category);
};