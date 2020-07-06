const sequelize = require('sequelize')

const db = new sequelize('shopdb','shopper','shoppass',{
    host: 'localhost',
    dialect: 'mysql',
    pool: { //pool object basically tells how many users the database can connect to its optional 
        min:0,
        max:5
    }
})

const User = db.define('users', {
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
        //allowNull: false
    },
    name: {
        type: sequelize.STRING,
        allowNull: false
    }
})

const Product = db.define('products', {
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
        //allowNull: false
    },
    name: {
        type: sequelize.STRING,
        allowNull: false,
    },
    manufacturer: sequelize.STRING,
    price:{
        type: sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0.0,
    }
})


db.sync({alter:true}).then(() => {console.log("Database sync complete")}).catch((err) => {console.log(err)})

exports =  module.exports = {
    User,Product
}