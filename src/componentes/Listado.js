import ListadoCard from "./ListadoCard";

const Listado= props =>{
    const {estudiantes,deleteEstudiante}=props;
    return(
        <div>
            {estudiantes.map(estudiante=>{
                return(
                    <ListadoCard
                        key={estudiante.id}
                        id={estudiante.id}
                        nombre={estudiante.nombre}
                        materia={estudiante.materia}
                        eliminar={deleteEstudiante}
                    />
                )
            })}
        </div>
    )
}

export default Listado;