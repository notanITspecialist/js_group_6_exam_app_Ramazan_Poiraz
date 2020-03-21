import React, {useEffect, useState} from 'react';
import Form from "reactstrap/lib/Form";
import FormGroup from "reactstrap/lib/FormGroup";
import Label from "reactstrap/lib/Label";
import Row from "reactstrap/lib/Row";
import Input from "reactstrap/lib/Input";
import {useDispatch, useSelector} from "react-redux";
import Button from "reactstrap/es/Button";
import {getCategories} from "../actions/products";
import {addProduct} from "../actions/product";

const AddProduct = props => {
    const initialAddPost = {
        title: '',
        description: '',
        image: '',
        category: '',
        price: ''
    };

    const [newProduct, setNewProduct] = useState(initialAddPost);

    const dispatch = useDispatch();

    const categories = useSelector(state => state.products.categories);

    useEffect(() => {
        dispatch(getCategories());
    },[dispatch]);

    const changeForm = e => setNewProduct({...newProduct, [e.target.name]: e.target.value});

    const changeFileForm = e => {
        setNewProduct({...newProduct, [e.target.name]: e.target.files[0]})
    };

    const user = useSelector(state => state.authorization.user);

    const addNewProductClick = e => {
        e.preventDefault();
        const data = new FormData();

        Object.keys(initialAddPost).forEach(e => {
            data.append(e, newProduct[e])
        });

        dispatch(addProduct(data, user.token, props.history, newProduct.category));
    };

    const categoriesSelect = categories.map(e => (
       <option key={e._id} value={e._id} >{e.name}</option>
    ));

    return (
        <Form onSubmit={addNewProductClick}>
            {!user.token && props.history.push('/')}
            <FormGroup row>
                <Label sm={2} for='title'>Title</Label>
                <Row>
                    <Input reqired='true' value={newProduct.title} onChange={changeForm} name='title' id='title'/>
                </Row>
            </FormGroup>
            <FormGroup row>
                <Label sm={2} for='description'>description</Label>
                <Row>
                    <Input reqired='true' value={newProduct.description} onChange={changeForm} name='description' id='description'/>
                </Row>
            </FormGroup>
            <FormGroup row>
                <Label sm={2} for='image'>image</Label>
                <Row>
                    <Input reqired='true' onChange={changeFileForm} name='image' type='file' id='image'/>
                </Row>
            </FormGroup>
            <FormGroup row>
                <Label sm={2} for='price'>price</Label>
                <Row>
                    <Input value={newProduct.price} reqired='true' onChange={changeForm} name='price' id='price'/>
                </Row>
            </FormGroup>
            <FormGroup>
                <Label  for="exampleSelect">Select</Label>
                <Row>
                    <Input reqired='true' type="select" name="category" onChange={changeForm} id="exampleSelect">
                        <option>Set category</option>
                        {categoriesSelect}
                    </Input>
                </Row>
            </FormGroup>
            <FormGroup>
                <Button>Add post</Button>
            </FormGroup>
        </Form>
    );
};

export default AddProduct;