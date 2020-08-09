// module.exports = (sequelize,DataType) =>{
//     let alias = 'Brand';
//     let cols ={
//         id: {
//             type: DataType.INTEGER,
//             primaryKey : true,
//             autoIncrement:true,
//             allowNull:false
//         },
//         name:{
//             type: DataType.STRING(100),
//             allowNull:false
//         },

//     }
//     let config = {
//         tableName: 'brands'
//     }
//     //Asocio tabla brands con la tabla products
//     const Brand = sequelize.define(alias,cols,config)
//     Brand.associate = function(models){
//         Brand.hasMany(models.Product,
//             {
//                 as:'brands',
//                 foreugnKey:'brandId'
//             }
//             )        
//     }
//     return Brand;
// }