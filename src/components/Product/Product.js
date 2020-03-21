import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteProduct, getProduct} from "../../actions/product";
import CardImg from "reactstrap/es/CardImg";
import {Button} from "reactstrap";

const Product = props => {
    const dispatch = useDispatch();

    const product = useSelector(state => state.product.product);

    const user = useSelector(state => state.authorization.user);

    useEffect(() => {
        dispatch(getProduct(props.match.params.id, user.token))
    }, [dispatch, props.match.params.id, user.token]);

    return (
        <div>
            <CardImg className='img-thumbnail' style={{width: '250px', float: 'left', marginRight: '10px'}} src={"http://localhost:8000/uploads/"+product.image} alt="Card image cap"/>
            <h2><b>Title: </b>{product.title}</h2>
            <p><b>Description: </b>{product.description}</p>
            {product.category && <p><b>Category: </b>{product.category.name}</p>}
            <p><b>Price: </b>{product.price}</p>
            {product.author && (
                <div className='border rounded d-inline-block p-3'>
                    <p><b>author: </b> {product.author.username}</p>
                    <p><b>phone: </b> {product.author.phone}</p>
                </div>
            )}
            {product.author && user.token === product.author.token && (
                    <Button onClick={() => deleteProduct(product._id, user.token, props.history)} className='d-block' color='danger'>Delete</Button>
                )}
        </div>
    );
};

export default Product;