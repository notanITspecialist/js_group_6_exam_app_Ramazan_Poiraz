import {GET_CATEGORIES_RES, GET_PRODUCTS_RES} from "../actions/products";

const initProducts = {
    products: [],
    categories: []
};

const productsReducer = (state = initProducts, action) => {
    if(action.type === GET_PRODUCTS_RES) return {...state, products: action.data};

    if(action.type === GET_CATEGORIES_RES) return {...state, categories: action.data};
  return state
};

export default productsReducer;