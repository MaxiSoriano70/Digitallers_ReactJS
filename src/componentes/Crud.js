import React, { Component } from "react";
import axios from "axios";

class Crud extends Component{
    constructor(props){
        super(props);
        this.state={
            estudiantes:[],
            error:''
        }
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

    componentDidMount(){
        this.obtenerEstudiantes();
    }

    render(){
        return(
            <h1>COMPONENTE CRUD </h1>
        )
    }
}

export default Crud;