const BrowserRouter = window.ReactRouterDOM.BrowserRouter;
const Route =  window.ReactRouterDOM.Route;
const Link =  window.ReactRouterDOM.Link;
const Switch =  window.ReactRouterDOM.Switch;
const NavLink =  window.ReactRouterDOM.NavLink;
const useLocation=window.ReactRouterDOM.useLocation;

function EjemploQueryString(){
    return(
        <BrowserRouter>
            <QueryStringsDemo/>
        </BrowserRouter>
    )
}

function useQuery(){
    //console.log(useLocation);
    //console.log(useLocation().search);
    const parametros=new URLSearchParams(useLocation().search);
    return parametros;
}

function QueryStringsDemo(){
    let quety=useQuery();
    return(
        <div>
            <h1>Hola Mundo</h1>
            <h2>Cuentas</h2>
            <ul>
                <li>
                    <link to="/ceunta?nombre=nextflix&id=1">Netflix</link>
                </li>
                <li>
                    <link to="/ceunta?nombre=Facebook&id=2">Facebook</link>
                </li>
                <li>
                    <link to="/ceunta?nombre=Google&id=3">Google</link>
                </li>
                <li>
                    <link to="/ceunta?nombre=Twitter&id=4">Twitter</link>
                </li>
            </ul>
            <Child nombreCuenta={query.get('nombre')} id_usuario={query.get('id')}/>
        </div>
    )
}
function Child({nombreCuenta,id_usuario}){
    console.log(nombreCuenta);
    console.log(id_usuario);
    return(
        <div>
            {
                nombreCuenta?(
                    <h3>
                        El nombre de la cuenta del QueryString es {nombreCuenta} y tu numero de usuario es {id_usuario}
                    </h3>
                ):(
                    <h3>
                        No se Recibio nada
                    </h3>
                )
            }
        </div>
    )
}

ReactDOM.render(<EjemploQueryString/>,document.getElementById("main"));