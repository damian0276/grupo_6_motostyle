module.exports = (sequelize, DataTypes)=>{
let alias = "Product"
    let cols = {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },
        model:{
            type: DataTypes.STRING, 
            allowNull:false
        },
        CC:{
            brakes:DataTypes.STRING, 
            allowNull:false
        },
        stock:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        description:{
            type: DataTypes.STRING,
            allowNull:false, 
        },
        coin:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        spacification:{
            type: DataTypes.STRING,
            allowNull:false
        },
        iva: DataTypes.INTEGER,
    }
    let config= {
       tableName:"products"  
   }
 
    let Product= sequelize.define(alias, cols, config)

    Product.associate=function(models){
        Product.belongsTo(models.Color,{
            as:"Color",
            foreingKey:"colorId"
        }),
        Product.belongsTo(models.Brand,{
        as:"brand",
        foreingKey:"brandId"
        }),    
        Product.belongsToMany(models.Image,{
        as:"image",
        through:"imagenProduct",
        foreingKey:"productId",
        otherKey:"imageId"
        })      
}
return Product;
}

