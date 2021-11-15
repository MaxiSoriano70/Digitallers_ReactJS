import React from "react";
import { withStyles, Card, CardContent, Typography, IconButton} from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";
import Styles from "./../styles/Styles";

const ListadoCard=props=>{
    const{
        classes,
        id,
        nombre,
        materia,
        eliminar
    }=props;
    return(
        <Card className={classes.card} key={id}>
            <CardContent>
                <Typography variant="h5" className={classes.body}>
                    {nombre}
                </Typography>
                <Typography variant="h6" className={classes.body}>
                    {materia}
                </Typography>
                <IconButton
                    aria-label="Delete"
                    className={classes.delete}
                    onClick={()=>eliminar(id)}
                >
                    <DeleteOutlined/>
                </IconButton>
            </CardContent>
        </Card>
    )
}

export default withStyles(Styles)(ListadoCard);