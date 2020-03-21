import {GET_PRODUCT_RES} from "../actions/product";

const initProduct = {
    product: {}
};

const productReducer = (state = initProduct, action) => {
    if(action.type === GET_PRODUCT_RES) return {...state, product: action.data};
    return state
};

export default productReducer;