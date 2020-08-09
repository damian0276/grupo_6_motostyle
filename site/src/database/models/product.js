let alias = "Product"
    let cols = {
        brandId:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },
        model:{
            type: DataTypes.STRING,
            allowNull:false
        },
       colorId:{
            type: DataTypes.STRING,
            allowNull:false
        },
       CC:{
            brakes:DataTypes.STRING, 
            
        },
        stock:{
            type:DataTypes.STRING,
         
        },
        descrotion:{
            type: DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        coin:{
            type: DataTypes.STRING,
            unique:true
        },
        spacification:{
            type: DataTypes.STRING,
            allowNull:false
        },
        iva: DataTypes.STRING,
        profile: DataTypes.INTEGER,

    }
    let config= {
       tableName:"users"  
   }
 
    let Product= sequelize.define(alias, cols, config)
    return Product;
}
