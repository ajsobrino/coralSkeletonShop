import Mongoose = require('mongoose')
import config = require('../config/config');
export default class ConnectionDB {

    private  static instance : ConnectionDB ;

    constructor(){
        Mongoose.connect(config.urlDB,config.configDBObject, (err) => {
            if (err) throw err;
            console.log('Start connect to mongodb');
        });
    }

    static getInstance(){
        if (!this.instance){
            this.instance = new ConnectionDB();
        }
        return this.instance;
    }

}