const express = require( "express" );
const app = express();
const port = 3000 + 3;
const mysql = require( "mysql2" );
const mongodb = require( "mongodb" );
const configuration = {
    host: "mysqldb",
    user: "root",
    password: "123456",
    port: 3306,
};

app.use( express.static( __dirname ) );

//parse form data
app.use( express.urlencoded( {
    extended: false
} ) );

function getAge( cb )
{
    let ans = 0;
    var con = mysql.createConnection( configuration );
    con.connect( function ( err )
    {
        if ( err ) throw err;
        con.query(
            "SELECT AVG(age) FROM Data.Ages;",
            function ( err, result, fields )
            {
                if ( err ) throw err;
                console.log( "From MySQL age avg is : " + result[ 0 ][ "AVG(age)" ] );
                ans = result[ 0 ][ "AVG(age)" ];
                cb( ans );
            }
        );
    } );
}

function saveAgeAvg()
{
    var MongoClient = mongodb.MongoClient;

    //var url = "mongodb://localhost:27017/analyticsdb";
    var url = "mongodb://mongodb:27017/";

    MongoClient.connect( url, function ( err, db )
    {
        if ( err )
        {
            console.log( "Error connecting to the mongodb database !\n" + err );
        } else
        {
            console.log( "We are connected to mongodb !" );
            var dbo = db.db( "analyticsdb" );

            getAge( ( a ) =>
            {
                console.log( "out: " + a );
                let age_avg = a;
                console.log( "The Age avg that is going to be inserted in mongodb is : " + age_avg );

                //here insert the avg age in the mongodb database
                var myobj = {
                    avg: age_avg
                };

                dbo.collection( "age_avg" ).insertOne( myobj, function ( err, res )
                {
                    if ( err )
                    {
                        console.log( "Error inserting the document !\n" + err );
                        throw err;
                    }
                    else
                    {
                        console.log( "1 document inserted successfully !" );
                    }
                    db.close();
                } );
            } );
        }
    } );
}

app.get( "/CalculateAnalytics", ( req, res ) =>
{
    saveAgeAvg();

    //redirect again to enter data page
    res.redirect( "http://localhost:3000/EnterData" );
} );

app.listen( port, () =>
{
    console.log( `Analytics Service listening on port ${ port }` );
} );