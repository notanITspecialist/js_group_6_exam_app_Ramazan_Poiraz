import axios from "axios";
import Toast from "light-toast";

export const GET_PRODUCT_RES = 'GET_PRODUCT_RES';



const getProductRes = data => ({type: GET_PRODUCT_RES, data});



export const getProduct = (id, token) => async dispatch => {
    const data = await axios.get('http://localhost:8000/products/'+id,{headers: {'Authorization': 'Token '+token}});
    dispatch(getProductRes(data.data));
};

export const addProduct = async (data, token, history, category)  => {
    await axios.post('http://localhost:8000/products', data, {headers: {'Authorization': 'Token '+token}});
    Toast.success('Product added!',500);
    history.push('/category/'+category);
};

export const deleteProduct = async (id, token, history) => {
    await axios.delete('http://localhost:8000/products/'+id, {headers: {'Authorization': 'Token '+token}});
    Toast.success('Product deleted!',500);
    history.push('/')
};