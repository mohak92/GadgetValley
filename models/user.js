module.exports = function (sequelize, Sequelize) {

    var User = sequelize.define('user', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        firstname: {
            type: Sequelize.STRING,
            notEmpty: true
        },

        lastname: {
            type: Sequelize.STRING,
            notEmpty: true
        },

        username: {
            type: Sequelize.TEXT
        },

        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            }
        },

        password: {
            type: Sequelize.STRING,
            allowNull: false
        },

        last_login: {
            type: Sequelize.DATE
        },

        isAdmin: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        }


    });

    User.associate = function(models){
        User.hasMany(models.Product, {
            foreignKey: "owner_id",
            onDelete: "cascade"
        });
    };

    User.associate = function(models){
        User.hasMany(models.Transaction, {
            foreignKey: "renter_id"
        });
    };

    return User;

}