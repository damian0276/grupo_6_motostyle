// module.exports=(sequelize,DataType)=>{
//     let alias = 'ImageProduct';
//     let cols = {
//             id:{
//                 type: DataType.INTEGER,
//                 primaryKey : true,
//                 autoIncrement:true,
//                 allowNull:false
//                 },
//             productId:{
//                 type: DataType.INTEGER,
//                 allowNull:false
//                 },
//             imageId:{
//                 type: DataType.INTEGER,
//                 allowNull:false
//                 }           
//         }
//     let config = {
//             tableName = 'imageProduct'
//         }  

//     let ImageProduct = sequelize.define(alias,cols, config)
//     ImageProduct.associate = function(models){
//         ImageProduct.hasMany(models.image,{
//             as:'image',
//             foreignKey: 'imageId'
//         })
//     }
//     ImageProduct.associate = function(models){
//         ImageProduct.hasMany(models.Product,{
//             as:'product',
//             foreignKey: 'productId'
//         })
//     }

//     return ImageProduct;

// }