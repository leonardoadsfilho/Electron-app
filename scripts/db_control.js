const mysql = require('mysql');

const db_control = class DB_Control{

    constructor(host_, user_, password_, database_){
        this.mysql = mysql;
        this.connection = mysql.createConnection({
            host: host_,
            user: user_,
            password: password_,
            database: database_
        });
    }

    Connect(){
        try{
            this.connection.connect();
            if(!this.ConnectionState()){  
                throw 'DB_Error';
            }
        }catch(e){
            console.log(e);
        }
    }
    Disconnect(){
        this.connection.end();
    }
    ConnectionState(){
        return (this.connection.state === 'connected');
    }
    SelectAll(){
        this.connection.query(
            'SELECT * FROM clientes',
            (error, result, fields) =>{
                if (error) throw 'DB_Error';  
        });
    }
}

module.exports = db_control;