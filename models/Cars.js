const { Model, DataTypes, } = require('sequelize');
const sequelize = require('../config/connection');


class Cars extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

Cars.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        make: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },
        model: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        year: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8],
            },
        },
         photoURL:{
             type: DataTypes.STRING,
             allowNull: true,
         },
        forSale: {
            type: DataTypes.BOOLEAN,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },


    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'cars',
    }
);

module.exports = Cars;
