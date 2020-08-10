module.exports = (sequelize,DataTypes) =>{
    let alias = 'Color';
    let cols ={
        id: {
            type: DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement:true,
            allowNull:false
        },
        name:{
            type: DataTypes.STRING,
            allowNull:false
        },
        
    }
    let config = {
        tableName: 'colors'
    }
    //Asocio tabla colors con la tabla products
    const color = sequelize.define(alias,cols,config)
    
    color.associate = function(models){
        color.hasMany(models.Product,
            {
                as:'products',
                foreignKey:'colorId'
            }
            )        
        }
        return color;
    }