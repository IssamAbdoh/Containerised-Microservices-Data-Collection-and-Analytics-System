const express = require( 'express' )
const app = express()
const port = 3000
const mysql = require( 'mysql2' );
const configuration =
{
    host: "mysqldb",
    user: "root",
    password: "123456",
    port: 3306
}


app.use( express.static( __dirname ) );

//parse form data
app.use( express.urlencoded( { extended: false } ) )


function insertAge( age )
{
    var con = mysql.createConnection( configuration );

    con.connect( function ( err )
    {
        if ( !err )
        {
            console.log( "EnterDataWebApp Connected to mysql database successfully !" );

            let sql_statement = "CREATE DATABASE IF NOT EXISTS Data;"
            con.query( sql_statement, function ( err, result )
            {
                if ( !err ) { console.log( "DATABASE tmam !" ); }
                else
                {
                    console.log( "Database Error !\n" + err );
                }
            }
            );

            let sql_statement2 = "CREATE TABLE IF NOT EXISTS Data.Ages (id INT NOT NULL AUTO_INCREMENT, age INT, PRIMARY KEY (id));";
            con.query( sql_statement2, function ( err, result )
            {
                if ( !err ) { console.log( "mysql Table tamam !" ); }
                else
                {
                    console.log( "table Error !\n" + err );
                }
            }
            );

            //insert in Ages table
            var sql = "INSERT INTO Data.Ages (Age) VALUES ('" + age + "')";
            con.query( sql, function ( err, result )
            {
                if ( !err ) { console.log( "mysql New age inserted !" ); }
                else
                {
                    console.log( "Error inserting !\n" + err );
                }
            }
            );
        }
        else
        {
            console.log( "Error connecting !\n" + err );
        }
    } );
}

app.get( '/', ( req, res ) =>
{
    //represent login.html page
    res.sendFile( __dirname + '/login.html' )
} );

app.get( '/EnterData', ( req, res ) =>
{
    //represent EnterData.html page
    res.sendFile( __dirname + '/EnterData.html' );
} );

app.post( '/StoreData', ( req, res ) =>
{
    //store data in mysql database to port 3002
    insertAge( req.body.age );

    //redirect to analytics service
    res.redirect( 'http://localhost:3003/CalculateAnalytics' );
} );

app.listen( port, () =>
{
    console.log( `Enter Data Web App listening on port ${ port }` )
} );
