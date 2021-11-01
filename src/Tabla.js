import React,{Component, component, useState} from 'react';
function CabeceraTabla() {
    return(
        <thead>
            <tr>
               <th>Nombre</th>
               <th>Trabajo</th>
            </tr>
        </thead>
    )
}
function BodyTabla(props) {
    const filas=props.personasTabla.map((personas,indice)=>{
        return(
            <tr key={indice}>
                <td>{personas.nombre}</td>
                <td>{personas.empleo}</td>
            </tr>
        )
    })
    return <tbody>
                {filas}
           </tbody>
}

class Tabla extends Component{
    constructor(props){
        console.log("Parametros recibidos por el componente tabla.");
        console.log(props.personas);
        console.log(props.tituloParametroLoco);
        super(props);
    }
    render(){
        const{personas}=this.props;
        return(
            <table className="table table-bordered table-hover">
                <CabeceraTabla/>
                <BodyTabla personasTabla={personas}/>
            </table>
        )
    }
}
export default Tabla;