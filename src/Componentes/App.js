import React from 'react';

import ListadoConectado from './Listado';


function App(){
    return(
        <React.Fragment>
            <div className="container">
                <h1>Ejemplo Redux</h1>
                <ListadoConectado />
            </div>
        </React.Fragment>
    )
}

export default App;
