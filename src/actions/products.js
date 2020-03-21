import axios from "axios";
import Toast from "light-toast";

export const GET_PRODUCTS_RES = 'GET_PRODUCTS_RES';

export const GET_CATEGORIES_RES = 'GET_CATEGORIES_RES';



const getProductsRes = data => ({type: GET_PRODUCTS_RES, data});

const getCategoriesRes = data => ({type: GET_CATEGORIES_RES, data});



export const getProducts = id => async dispatch => {
    if(id === undefined){
        const data = await axios.get('http://localhost:8000/products');

        Toast.success(`Пробуктов найдено: ${data.data.length}`,500);

        return  dispatch(getProductsRes(data.data));
    }
    const data = await axios.get('http://localhost:8000/products/?category='+id);

    Toast.success(`Пробуктов найдено: ${data.data.length} `,500);

    dispatch(getProductsRes(data.data));
};

export const getCategories = () => async dispatch => {
  const data = await axios.get('http://localhost:8000/products/categories');

  dispatch(getCategoriesRes(data.data))
};