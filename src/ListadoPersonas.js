import React from 'react';
import './ListadoPersonas.css';

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
            titulo: 'Listado de Personas Seteado desde el state'
        }
        this.cambiarTitulo=this.cambiarTitulo.bind(this);
        this.otroEjemploEventoState=this.otroEjemploEventoState.bind(this);
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
    render(){
        return(
            <React.Fragment>
            <h1 className="tituloprincipal">{this.state.titulo}</h1>
            <button className="btn btn-primary mb-4" onClick={this.otroEjemploEventoState}>Modificar Titulo</button>
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Trabajo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Maria Perez</td>
                        <td>Gerente</td>
                    </tr>
                    <tr>
                        <td>Karen Dominguez</td>
                        <td>Vendedor</td>
                    </tr>
                    <tr>
                        <td>Natalia Natalia</td>
                        <td>Jubilado</td>
                    </tr>
                </tbody>
            </table>
            <h1>Titulo sin colorear</h1>
            </React.Fragment>
        )
    }
}
export default ListadoPersonas;