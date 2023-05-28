const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

class Database{
    static instance;
    #connection;

    constructor(){
        if (Database.instance) {
            return Database.instance;
        }
        Database.instance = this;
    }

    static async getInstance() {
        if (!Database.instance) {
            const instance = new Database();
            Database.instance = instance;
            await instance.connect();
        }
        return Database.instance;
    }

    async connect(){
        try {
            this.#connection = await mysql.createConnection({
                host: process.env.DB_HOST,
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME,
            });
            console.log('Connexion à la base de données réussie !');
        } catch (error) {
            console.error('Erreur lors de la connexion à la base de données :', error);
            throw error;
        }
    }

    async disconnect() {
        try {
            await this.#connection.end();
            console.log('Déconnexion à la base de données réussie');
        } catch (error) {
            console.error('Erreur lors de la déconnexion à la base de données :', error);
            throw error;
        }
    }

    async query(query, values){
        try {
            try {
                await this.#connection.query('SELECT 1');
            } catch (testError) {
                console.log('La connexion à la base de données est fermée ou inactive.');
                await this.connect();
            }
            const [rows] = await this.#connection.query(query, values);
            return rows;
        } catch (error) {
            console.error('Erreur lors de la requête :', error);
            throw error;
        }
    }
}

module.exports = Database;