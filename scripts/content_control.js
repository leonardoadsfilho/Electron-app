const DB_Control = require('../scripts/db_control.js');

const content_control = class ContentControl{

    constructor(){
        this.main = document.getElementById('main');
        this.client = document.getElementById('client');
        this.product = document.getElementById('product');
        this.delivery = document.getElementById('delivery');

        this.db_control = new DB_Control('localhost', 'root', '', 'controle_comun');
    }

    load_main(){
        this.CreateView('main');
    }
    load_client(){
        console.log('client');
    }
    load_product(){
        console.log('product');
    }
    load_delivery(){
        console.log('delivery');
    }
}

module.exports = content_control;