import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2)
    }
}))

export default function Header(){
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        Estudiantes
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
