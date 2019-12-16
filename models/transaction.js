module.exports = function(sequelize, DataTypes) {
    var Transaction = sequelize.define("Transaction",{
        start_date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        end_date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        total_cost: {
            type: DataTypes.DECIMAL(12,2),
            allowNull: false 
        }
    });

    Transaction.associate = function(models){
        Transaction.belongsTo(models.User, {foreignKey: "renter_id"});
    }

     Transaction.associate = function(models){
        Transaction.belongsTo(models.Product, {foreignKey: "products_id"});
    }

    return Transaction;
}