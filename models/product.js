module.exports = function(sequelize, DataTypes){
    var Product = sequelize.define("Product",{
        product_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1,60]
            }
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                len:[1,255]
            }
        },
        price: {
            type: DataTypes.DECIMAL(8,2),
            allowNull: false 
        },
        start_date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        end_date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        picture_link: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len:[1,255]
            }
        },
        available: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }

    });

    Product.associate = function(models){
        Product.belongsTo(models.User, {
            foreignKey: "owner_id"
        });
    }

    Product.associate = function(models){
        Product.hasMany(models.Transaction, {
            foreignKey: "product_id"
        })
    }

    return Product;
}