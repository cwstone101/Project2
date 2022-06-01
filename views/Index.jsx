// Importing React
const React = require('react');
const Products = require('../models/books');

class Index extends React.Component{

    render() {
        const {Products} = this.props;
        return(

            <div>
                    <h1>Welcome to the Book Store</h1>
                    <a href="/">Back to Welcome</a>
                    <h3>Choose Item Below</h3>
                        <ul>

                            {Products.map(( Products, i) =>{
                                return (
                                    <li>
                                        <a href={`/product/${i}`}> <h3>{Products.name}</h3></a><h4>Price:{`
                                        `}${Products.price}</h4> <br />
                                        <br />
                                        
                                        </li>
                                    
                                );
                            })}
                        
                        </ul>
                        <h3>Add New Product to Catalog</h3>
                        <nav>
                            <a href='/home/new'>Create a New Product</a>
                            <br />
                            <a href="/home/edit">Edit a Product</a>
                            <br />
                            <a href="/home/delete">Delete a Product</a>
                            <br />
                        </nav>
            </div>
    
        );

}}

module.exports = Index;
