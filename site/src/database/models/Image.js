// module.exports = (sequelize, DataType)=>{
//     let alias = 'Image';
//     let cols = {
//        id: {
//             type: DataType.INTEGER,
//             primaryKey : true,
//             autoIncrement:true,
//             allowNull:false
//            },
//         name:{
//             type: DataType.STRING(500),
//             allowNull:false
//             },
//     }
//     let config = {
//         tableName ='images'
//     };
//     const Image = sequelize.difine(alias,cols,config)
//     Image.associate = function(models){
//         Imge.hasMany(models.imagePoduct,{
//             as:'imagePoduct',
//             foreignKey: 'imageId'
//         })
//     }
    
//     return Image;

// }