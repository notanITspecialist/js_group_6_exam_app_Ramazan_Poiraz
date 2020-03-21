import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCategories, getProducts} from "../../actions/products";

import {
    Card, CardBody,
    CardTitle, CardSubtitle, CardImg, Button, ListGroupItem
} from 'reactstrap';
import ListGroup from "reactstrap/es/ListGroup";
import {NavLink as ToLink} from "react-router-dom";

const Products = props => {
    const dispatch = useDispatch();

    const products = useSelector(state => state.products);
    const user = useSelector(state => state.authorization.user.token);

    useEffect(() => {
        dispatch(getProducts(props.match.params.id));
        dispatch(getCategories());
    }, [dispatch, props.match.params.id]);

    const productsCards = products.products.map(e => (
        <Card className='w-25' key={e._id}>
            <CardImg top style={{width: '100%'}} src={"http://localhost:8000/uploads/"+e.image} alt={products.title} />
            <CardBody>
                <CardTitle>{e.title}</CardTitle>
                <CardSubtitle><b>price: </b>{e.price}</CardSubtitle>
                {user && <Button tag={ToLink} to={'/product/'+e._id}>Show more</Button>}
            </CardBody>
        </Card>
    ));

    const categories = products.categories.map(e => (
       <ListGroupItem tag={ToLink} to={'/category/'+e._id} key={e._id}>
            {e.name}
       </ListGroupItem>
    ));

    return (
        <div className='d-flex' >
            <div style={{width: '15%', marginRight: '20px'}}>
                <ListGroup>
                    {categories}
                </ListGroup>
            </div>
            <div className='d-flex' style={{width: '85%'}}>
                {productsCards}
            </div>
        </div>
    );
};

export default Products;