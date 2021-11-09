
const estadoInicial= {
    articulos: [
        {
            id: 1,
            nombre: 'Artículo 1'
        },
        {
            id: 2,
            nombre: 'Artículo 2'
        },
        {
            id: 3,
            nombre: 'Artículo 3'
        },
        {
            id: 4,
            nombre: 'Artículo 4'
        }
    ]
}


function rootReducer(state = estadoInicial, action){
    switch(action.type){
        case 'AGREGAR_ARTICULO':
            return Object.assign({},state,{
                articulos: state.articulos.concat(action.payload)
            })
        default:
            return state
    }
}

export default rootReducer;