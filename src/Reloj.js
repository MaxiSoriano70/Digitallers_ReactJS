export default function Reloj() {
    const variableLoca="Que se Yo";
    const fecha=new Date();
    return(
        <div>
            <h1>RELOJ LOCO</h1>
            <h2>variableLoca: {variableLoca}</h2>
            <h2>Dia o Hora: {fecha.toLocaleTimeString()}</h2>
        </div>
    )
}