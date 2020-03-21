import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getProduct} from "../../actions/product";

const Product = props => {
    const dispatch = useDispatch();

    const product = useSelector(state => state.product.product);

    const user = useSelector(state => state.authorization.user);

    useEffect(() => {
        dispatch(getProduct(props.match.params.id))
    }, [dispatch, props.match.params.id]);
    return (
        <div>
            <img className='img-thumbnail' style={{width: '250px', float: 'left', marginRight: '10px'}} src={"http://localhost:8000/uploads/"+product.image} alt="Card image cap"/>
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
            {' '}
            {console.log(user, product.author)}
            {/*{product.author.token === user.token && (*/}
            {/*    <Button color='danger'>Delete</Button>*/}
            {/*)}*/}
        </div>
    );
};

export default Product;