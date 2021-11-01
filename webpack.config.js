const path=require("path");
//path.join(__dirname,'public');
module.exports={
    entry: './src/app.js',
    output: {
        path: path.join(__dirname,'public'),
        filename: 'bundle.js'
    },
    module:{
        rules:[//Reglas para filtrar
            {
                test:/\.js$/,//solo los archivos JS
                exclude:/node_modules/,//EXCLUIMOS LA CARPETA QUE NO QUEREMOS
                loader: 'babel-loader'//LIBRERIA PARA INTERPRETAR
            }
        ]
    },
    devServer:{
        static:path.join(__dirname,'public')
    }
}