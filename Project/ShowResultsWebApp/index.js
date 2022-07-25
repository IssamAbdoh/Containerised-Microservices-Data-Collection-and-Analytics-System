const express = require( 'express' )
const app = express()
const port = 3000 + 2
const mongodb = require( 'mongodb' );

//parse form data
app.use( express.static( __dirname ) );
app.use( express.urlencoded( { extended: false } ) )

// Set EJS as templating engine 
app.set( 'view engine', 'ejs' );

function getAgeAvg( cb )
{
    let ans = -101;

    var MongoClient = mongodb.MongoClient;
    //var url = "mongodb://localhost:27017/analyticsdb";
    var url = "mongodb://mongodb:27017/";

    //from age_avg collection get the document with the max id
    MongoClient.connect( url, function ( err, db ) 
    {
        if ( err )
        {
            console.log( "Error connecting to the mongodb database !\n" + err );
            return ans + 1;
        }
        console.log( "Connected to the MongoDB database !" );

        var dbo = db.db( "analyticsdb" );

        //get the document with the max id
        dbo.collection( "age_avg" ).find( {} ).sort( { _id: -1 } ).limit( 1 ).toArray( function ( err, result ) 
        {
            if ( err ) 
            {
                console.log( err );
                return ans + 2;
            }
            console.log( "the document with the max id is " + result );
            ans = result[ 0 ].avg;
            //ans = result[0]['avg'];
            cb( ans );
            db.close();
        } );
    } );
}

app.get( '/', ( req, res ) =>
{
    //represent login.html page
    res.sendFile( __dirname + '/login.html' );
} );

app.get( '/ShowResults', ( req, res ) =>
{
    getAgeAvg( ( a ) =>
    {
        let avg = a;
        console.log( "Average that will be displayed to the user is : " + avg );

        res.render( __dirname + '/ShowResults.ejs', { age_avg: avg } );
    } );
} );

app.listen( port, () =>
{
    console.log( `Show Results listening on port ${ port }` )
} );
