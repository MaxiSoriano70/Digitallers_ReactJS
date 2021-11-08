/*
Un store va a contener todo el estado de nuestra aplicación
No voy a tener un método setState() => Actions

1- Estado General (store)
2- Action => objetos literales que describen los cambios que se van a realizar sobre el store
3- Reducers => Funciones que llevan a cabo los cambios en el estado dependiendo de la accion definida.
*/

const redux = require('redux');
const VENDER_RULEMAN = 'VENDER_RULEMAN';
const VENDER_TUERCA = 'VENDER_TUERCA';


function comprarRuleman(){
    return {
        type: VENDER_RULEMAN
    }
}

function comprarTuerca(numero){
    return {
        type: VENDER_TUERCA,
        payload: numero
    }
}

const estadoInicialRuleman = {
    numeroDeRulemanes: 50
}

const estadoInicialTuercas = {
    numeroDeTuercas : 100
}

const reducerRuleman = (state = estadoInicialRuleman,action) => {
    switch(action.type){
        case VENDER_RULEMAN: 
            return {
                ...state,
                numeroDeRulemanes: state.numeroDeRulemanes - 1
            }
        default:
                return state;
    }
}

const reducerTuerca = (state = estadoInicialTuercas,action) => {
    switch(action.type){
        case VENDER_TUERCA:
            return {
                ...state,
                numeroDeTuercas: state.numeroDeTuercas - action.payload
            }
        default:
            return state
    }
}


const rootReducer = redux.combineReducers({
    ruleman: reducerRuleman,
    tuerca: reducerTuerca
})

const store = redux.createStore(rootReducer)

/*
    subscribe => Haya un cambio en el store
*/

store.subscribe(()=> console.log('Store actualizado', store.getState())) 

console.log('Estado Inicial: ', store.getState())
store.dispatch(comprarRuleman());
store.dispatch(comprarRuleman());
store.dispatch(comprarRuleman());
store.dispatch(comprarRuleman());
store.dispatch(comprarRuleman());
store.dispatch(comprarTuerca(15));
store.dispatch(comprarTuerca(20));