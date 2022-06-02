const React = require('react');
// const myColor = {backgroundColor: "#fcba03"};

const myColor = {backgroundImage: "url('https://images.unsplash.com/photo-1593430980369-68efc5a5eb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3NoZWxmfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60')",
                 backgroundSize: "cover", color:"white"}
const h1Style = {color:"white"}
const txtColor = {textColor: "white"}

class Welcome extends React.Component {

    render() {

        return(

            <div style={h1Style}><body style={myColor} >
                   <h1>Welcome to the Bookstore</h1> Welcome
                    <br />

                    <h3>Click here to see what we have</h3>
                    <a href="/home" style={h1Style}>All Products</a>
                    </body>    
            </div>
        )
    }
}

module.exports = Welcome;
