const React = require('react')

class Show extends React.Component {
    render() {
        const Products = this.props;   
        // .Products;
        console.log(Products);
        return (
            <div>
                <h1>{Products.name}</h1>

                <a href="/home">Back to Home</a>
                <br />
                <br />
                <h3>The {Products.Products.name}{' '}costs:{' '} ${Products.Products.price}</h3>
                <br />
                <img src={Products.Products.img}></img>
                <br />
                <a href={`/home/${Products.id}/delete`}>Press to Delete</a>
                {/* <a href="/home/:id/delete">Delete a book from menu</a> */}
                
            </div>
        );
    }
}

module.exports = Show;

