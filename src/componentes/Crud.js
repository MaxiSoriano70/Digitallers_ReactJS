import React, { Component } from "react";
import axios from "axios";
import Listado from './Listado';
import CrearEstudiante from "./CrearEstudiante";
import {Grid} from '@material-ui/core';
 
class Crud extends Component{
    constructor(props){
        super(props);
        this.state={
            estudiantes:[],
            error:'',
            nombre:'',
            materia:''
        }
        this.eliminarEstudiantes=this.eliminarEstudiantes.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.guardarEstudiante=this.guardarEstudiante.bind(this);
    }

    obtenerEstudiantes(){
        axios({
            method:'get',
            url:'http://localhost:3001/estudiantes',
            responseType:'json'
        }).then(respuesta=>{
            this.setState({
                estudiantes:respuesta.data
            })
        },
            errorCall=>{
                this.setState({
                    error:errorCall 
                })
            }
        )
    }

    eliminarEstudiantes(id){
        axios({
            method:'delete',
            url:'http://localhost:3001/estudiantes/'+id
        }).then(respuesta=>{
            this.obtenerEstudiantes();
        },
        errorDelete=>{
            this.setState({
                error: errorDelete
            })
        }
        )
    } 

    componentDidMount(){
        this.obtenerEstudiantes();
    }

    handleChange(event){
        this.setState({
            [event.target.name]:event.target.value
            //nombre:"VALOR DEL CAMPO"
        })
    }

    guardarEstudiante(event){
        event.preventDefault();
        const{nombre,materia}=this.state;
        var obj={
            nombre:nombre,
            materia:materia
        }
        var options={
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        axios({
            method:'post',
            url: 'http://localhost:3001/estudiantes',
            data: obj,
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(respuesta=>{
            this.obtenerEstudiantes();
            this.setState({
                nombre:'',
                materia:''
            })
        })
    }

    render(){
        return(
            <Grid container spacing={0}>
                <Grid item ls={6} md={6} sm={12} xs={12}>
                    <CrearEstudiante 
                        manejarCambios={this.handleChange}
                        nuevo={this.guardarEstudiante}
                        nombre={this.state.nombre}
                        materia={this.state.materia}
                    />
                </Grid>
                <Grid item ls={6} md={6} sm={12} xs={12}>
                    <Listado estudiantes={this.state.estudiantes} deleteEstudiante={this.eliminarEstudiantes} />
                </Grid>
            </Grid>
        )
    }
}

export default Crud;