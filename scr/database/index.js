import cls from 'cls-hooked';
import { Sequelize } from 'sequelize';

export default class Database {
    constructor(envirement, dbConfig){
        this.envirement = envirement;
        this.dbConfig = dbConfig;
        this.isTestEnvirement = this.envirement === 'test';
    }

    async connect(){

        // Set up transaction namespace
        const namespace = cls.createNamespace('transections-namespace');
        Sequelize.useCLS(namespace);

        //Create the connection
        const{username, password, host, port, database, dialect} =
        this.dbConfig[this.envirement];
        this.connect = new Sequelize({
            username,
            password,
            host,
            port,
            database,
            dialect,
            logging: this.isTestEnvirement ? false:console.log,
        })

        //Check if we connected successfully

        await this.connect.authenticate({
            logging:false
        });
        
        if(!this.isTestEnvirement){
            console.log('Connection has ben established successfully');
        }

        //Register the moduls
        //registermoduls(this.connect)

        //sync the modules

        await this.sync();

    }

    async disconnect(){
        await this.connect.close();
    }

    async sync(){
        await this.connect.sync({
            logging: false,
            force:this.isTestEnvirement,
        });

        if(!this.isTestEnvirement){
            console.log("Connection synced successfuly");
        }
    }
}