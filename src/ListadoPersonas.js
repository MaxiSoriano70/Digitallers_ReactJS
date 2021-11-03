import React from 'react';
import './ListadoPersonas.css';
import Reloj from './Reloj';
import Tabla from './Tabla';

class ListadoPersonas extends React.Component{
    constructor(props){
        super(props);
        this.state={
            objPersonas:[
                 {
                     nombre:"Maria Perez",
                     empleo: "Gerente"
                 },
                 {
                    nombre:"Karen Dominguez",
                    empleo: "Vendedor"
                },
                {
                    nombre:"Natalia Natalia",
                    empleo: "Jubilado"
                }
            ],
            titulo: 'Listado de Personas Seteado desde el state',
            mostarReloj:true
        }
        this.cambiarTitulo=this.cambiarTitulo.bind(this);
        this.otroEjemploEventoState=this.otroEjemploEventoState.bind(this);
        this.cambiarEstadoReloj=this.cambiarEstadoReloj.bind(this);
        this.borrarPersona=this.borrarPersona.bind(this);
    }
    borrarPersona(indice){
        const{objPersonas}=this.state;
        this.setState({
            objPersonas: objPersonas.filter((personas,index)=>{
                return index!==indice
            })
        })
    }
    cambiarTitulo(){
        let {titulo}=this.state;
        console.log(titulo);
        this.setState({
            titulo:"Te cambie el titulo desde el SETSTATE"
        })
    }
    otroEjemploEventoState(){
        let {titulo}=this.state;
        console.log(titulo);
        this.setState({
            titulo:"Te cambie el titulo desde el SETSTATE"
        })
    }
    cambiarEstadoReloj(){
        if(this.state.mostarReloj){
            this.setState({
                mostarReloj: false
            })
        }
        else{
            this.setState({
                mostarReloj:true
            })
        }
    }
    render(){
        const relojBool=this.state.mostarReloj;
        let reloj;
        if(relojBool){
            reloj=<Reloj/>
        }
        else{
            reloj=""
        }
        return(
            <React.Fragment>
            <h1 className="tituloprincipal">{this.state.titulo}</h1>
            <button className="btn btn-primary mb-4" onClick={this.otroEjemploEventoState}>Modificar Titulo</button>
            <button className="btn btn-secondary boton-reloj mb-4" onClick={this.cambiarEstadoReloj}>Mostar y ocultar Reloj</button>
            <Tabla personas={this.state.objPersonas} tituloParametroLoco="Que se yo estoy ReLoco" borrarPersona={this.borrarPersona}/>
            <h1>Titulo sin colorear</h1>
            <hr/>
            {reloj}
            </React.Fragment>
        )
    }
}
export default ListadoPersonas;