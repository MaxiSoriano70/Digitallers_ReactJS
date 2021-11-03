import React,{Component} from 'react';
function CabeceraTabla() {
    return(
        <thead>
            <tr>
               <th>Nombre</th>
               <th>Trabajo</th>
               <th>Eliminar</th>
            </tr>
        </thead>
    )
}
function BodyTabla(props) {
    const {borrarPersonaRef} = props;
    const filas=props.personasTabla.map((personas,indice)=>{
        return(
            <tr key={indice}>
                <td>{personas.nombre}</td>
                <td>{personas.empleo}</td>
                <td><button className="btn btn-danger" onClick={()=>borrarPersonaRef(indice)}>x</button></td>
            </tr>
        )
    })
    return <tbody>
                {filas}
           </tbody>
}

class Tabla extends Component{
    constructor(props){
        super(props);
        this.state=Object.assign({},this.props)
    }
    render(){
        const{personas,borrarPersona}=this.props;
        return(
            <table className="table table-bordered table-hover">
                <CabeceraTabla/>
                <BodyTabla personasTabla={personas} borrarPersonaRef={borrarPersona}/>
            </table>
        )
    }
}
export default Tabla;