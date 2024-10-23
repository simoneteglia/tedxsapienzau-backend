import mysql from "mysql";
import * as dotenv from "dotenv";
dotenv.config();

const configuration = {
  host: process.env.HOST,
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  port: "3306",
  database: process.env.DATABASE,
  connectionLimit: 10,  
};

export var db = mysql.createPool(configuration);

db.on("error", function (err) {
  console.error("Database error:", err);
  if (err.code === "PROTOCOL_CONNECTION_LOST") {
    console.log("Connection lost. Attempting to reconnect...");
    handleReconnect();
  } else {
    throw err;
  }
});

function handleReconnect() {
  db.getConnection(function (err, connection) {
    if (err) {
      console.error("Error getting a connection from the pool:", err);
      setTimeout(handleReconnect, 2000);
    } else if (connection) {
      console.log("Successfully reconnected to the database!");
      connection.release();
    }
  });
}

function keepAlive() {
  db.query('SELECT 1', (err, results) => {
    if (err) {
      console.error('Error pinging database:', err);
    } else {
      console.log('Database connection is alive');
    }
  });
}
setInterval(keepAlive, 60000); 
