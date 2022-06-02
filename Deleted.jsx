const React = require('react');

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
            
            <nav><br />
                <a href="/home"> Home </a>
                <br />
            </nav>
            <br />
            <div style={myBody}>
                Deleted
            </div>
            
            </>
        )
    }
}

module.exports = Deleted