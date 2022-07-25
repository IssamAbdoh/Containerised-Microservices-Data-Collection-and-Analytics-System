const express = require( 'express' )
const app = express()
const port = 3000 + 1

app.use( express.static( __dirname ) );

//parse form data
app.use( express.urlencoded( { extended: false } ) )

app.post( '/AutenticateEnterData', ( req, res ) =>
{
    //if the email is "ea@ea.com" and password is "123"
    if ( req.body.email == "ea@ea.com" )
    {
        if ( req.body.password == "123" )
        {
            //redirect to localhost:3000/EnterData page
            res.redirect( 'http://localhost:3000/EnterData' )
        }
    }

    //otherwise redirect to http://localhost:3000 page
    res.redirect( 'http://localhost:3000/' )
} );

app.post( '/AutenticateShowResults', ( req, res ) =>
{
    //if the email is "ea@ea.com" and password is "123"
    if ( req.body.email == "ea@ea.com" )
    {
        if ( req.body.password == "123" )
        {
            //redirect to localhost:3000/EnterData page
            res.redirect( 'http://localhost:3002/ShowResults' )
        }
    }

    //otherwise redirect to http://localhost:3000 page
    res.redirect( 'http://localhost:3002/' )
} );

app.listen( port, () =>
{
    console.log( `Authentication Service listening on port ${ port }` )
} );