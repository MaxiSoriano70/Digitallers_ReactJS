import React from "react";

class Reloj extends React.Component{
    constructor(props){
        super(props);
        this.state={
            time: new Date().toLocaleTimeString(),
            internalID: 0
        }
    }
    componentDidMount(){
        let internal=setInterval(() => {
            this.updateReloj()
        },1000)
        this.setState({
            internalID: internal
        })
    }
    componentWillUnmount(){
        clearInterval(this.state.internalID);
    }
    updateReloj(){
        this.setState({
            time: new Date().toLocaleTimeString()
        })
    }
    render(){
        return(
            <p><b>Hora Actual: </b>{this.state.time}</p>
        )
    }
}

export default Reloj;