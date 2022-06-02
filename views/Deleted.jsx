const React = require('react');
const myBackground = {backgroundImage: "url('https://media.istockphoto.com/photos/delete-key-picture-id157287738?b=1&k=20&m=157287738&s=170667a&w=0&h=4g3OX1x18PJWDfb9d7UY0qOCVcO0R1p4MYuIJbP3bGE=')"}
const myBody = {
    border: "double 6px black",
    padding: "15px",
    width: "50%",
    marginTop: "15px"
}
class Deleted extends React.Component{

    render() {

        return(
            <>
            <body style={myBackground}>
                
                        <nav><br />
                <a href="/home"> Home </a>
                <br />
            </nav>
            <br />
            <div style={myBody}>
                Deleted
            </div>
            </body>
            </>

        )
    }
}

module.exports = Deleted