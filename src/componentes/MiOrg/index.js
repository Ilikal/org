import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) => {
    //Estado - hooks = funciones que nos ayudan a trabajar con el comportamiento de React
    //hook que utilizaremos: "useState" y se usa como función:
    //const [nombreVariable, funcionActualiza] = useState(valorInicial) --- Esta es la forma de usar el estado
    //Se puede usar la cantidad de estados que sean necesarios

    console.log(props)

    //const [mostrar,actualizarMostrar] = useState(true)
    //const manejarClick = () => {
    //    console.log("Mostrar/Ocultar elemento", !mostrar)
    //    actualizarMostrar(!mostrar)
    //}

    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg