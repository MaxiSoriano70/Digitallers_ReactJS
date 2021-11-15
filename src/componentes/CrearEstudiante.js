import { withStyles, TextField, Button } from "@material-ui/core";
import Styles from "../styles/Styles";

const CrearEstudiante= props =>{
    const{
        classes,
        manejarCambios,
        nuevo,
        nombre,
        materia
    }=props;
    return(
        <div className={classes.formWrapper}>
          <form onSubmit={nuevo}>
            <TextField
                id="nombre-id"
                name="nombre"
                label="nombre"
                fullWidth
                onChange={manejarCambios}
                value={nombre}
            />
            <TextField
                id="materia-id"
                name="materia"
                label="materia"
                fullWidth
                onChange={manejarCambios}
                value={materia}
            />
            <Button
                type="submit"
                variant="outlined"
                className={classes.button}
            >
                ENVIAR
            </Button>
          </form>
        </div>
    )
}

export default withStyles(Styles)(CrearEstudiante);