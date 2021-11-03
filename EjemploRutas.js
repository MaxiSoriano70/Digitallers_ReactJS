const BrowserRouter = window.ReactRouterDOM.BrowserRouter;
const Route =  window.ReactRouterDOM.Route;
const Link =  window.ReactRouterDOM.Link;
const Switch =  window.ReactRouterDOM.Switch;
const NavLink =  window.ReactRouterDOM.NavLink;




function EjemploRutas(){
    return(
        <BrowserRouter>
            <div>
                <ul>
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink exact to="/productos">Productos</NavLink></li>
                    <li><NavLink exact to="/contacto">Contacto</NavLink></li>
                </ul>
                    <hr />
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/productos">
                            <Productos />
                        </Route>
                        <Route exact path="/contacto">
                            <Contacto />
                        </Route>
                    </Switch>
            </div>
        </BrowserRouter>
    )
}

function Home(){
    return(
        <h1>Home del sitio</h1>
    )
}

function Productos(){
    return(
        <h1>Productos del sitio</h1>
    )
}

function Contacto(){
    return(
        <h1>Página de contacto</h1>
    )
}