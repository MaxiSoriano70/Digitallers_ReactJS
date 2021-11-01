import React from "react";
import EjemploDos from './EjemploDos';
import EjemploTres from "./EjemploTres";
import Reloj from "./Reloj";

class Ejemplo extends React.Component{
    render(){
        return(
            <React.Fragment>
                <p>Hola mundo desde un componente Ejemplo de React. Celeste Severich</p>
                <EjemploDos/>
                <EjemploTres/>
                <Reloj/>
            </React.Fragment>
        )
    }
}

export default Ejemplo;//HACEMOS LA CLASE PUBLICA