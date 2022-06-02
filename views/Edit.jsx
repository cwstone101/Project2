const React = require('react');
const myBackground = {backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxshMKMoViI_U7ctFO3y-qLiuNqeIqyB2Ieg&usqp=CAU')"
,backgroundSize: "cover"
}
class Edit extends React.Component{

    render() {

        return(
            <>
            <body style={myBackground}>
                
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
            </body>
            </>
        )
    }
}

module.exports = Edit