const React = require('react');

class Edit extends React.Component{

    render() {

        return(
            <>
            
            <nav>,<br />
                <a href="/home"> Home </a>
            </nav>
            <form action="/home" method= 'POST'>
                Product Name: <input type="text" name='name' placeholder='type..'></input>
                <br />
                Product Price: <input type="text" name='price' placeholder='cost ?..'></input>
                <br />
                <input type="submit" name='' value="Edit Product"/>

            
            </form>
            
            </>
        )
    }
}

module.exports = Edit