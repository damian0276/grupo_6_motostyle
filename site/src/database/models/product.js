module.exports = (sequelize, DataTypes)=>{
let alias = "Product"
    let cols = {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },
        brandId:{
            type: DataTypes.INTEGER,
            foreignKey:true,
            allowNull:false
        },
        model:{
            type: DataTypes.STRING,
            allowNull:false
        },
       colorId:{
            type: DataTypes.INTEGER,
            foreignKey:true,
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
       tableName:"product"  
   }
 
    let Product= sequelize.define(alias, cols, config)
    return Product;
}
