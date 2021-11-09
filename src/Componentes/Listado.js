import React from 'react';

import {connect} from 'react-redux';


const mapStateToProps = state => {
    return {articulos: state.articulos}
}

const Listado = ({articulos}) => {
    return(
        <ul>
            {
                articulos.map(elemento => (
                    <li key={elemento.id}>{elemento.nombre}</li>
                ))
            }
        </ul>
    )
}


const ListadoConectado = connect(mapStateToProps)(Listado);

export default ListadoConectado;