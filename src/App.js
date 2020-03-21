import React from 'react';
import {Route, Switch} from "react-router";
import NavBar from "./components/NavBar/NavBar";
import Container from "reactstrap/lib/Container";
import Registration from "./components/registration/registration";
import Login from "./components/Login/login";
import Products from "./components/Products/Products";
import Product from "./components/Product/Product";
import AddProduct from "./components/addProduct";

function App() {
  return (
      <div>
          <NavBar/>
        <Container>
            <Switch>
                <Route path="/" exact component={Products}/>
                <Route path="/category/:id" exact component={Products}/>
                <Route path="/product/:id" exact component={Product}/>
                <Route path="/addProduct" exact component={AddProduct}/>
                <Route path="/registration" exact component={Registration}/>
                <Route path="/login" exact component={Login}/>
            </Switch>
        </Container>
      </div>
  );
}

export default App;
