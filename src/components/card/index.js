import React from "react"
import { Link } from 'react-router-dom'


import './styles.css'

import editar from '../../lapis.svg'

function Card(props) {

    return (
        <div className="card">
            <div className="info">
                <h1>{props.data.nome}</h1>
                <h3>{props.data.crm}</h3>
                <p>{props.data.telefone} <br /><br />
                    {props.data.cidade} - {props.data.estado}<br /><br />
                    {props.data.especialidades.map(especialidade => {
                        return <span className='especialidade'> {especialidade.especialidade}</span>
                    })}
                </p>
            </div>
            <div className="acoes">
                <div className="btn">

                    <Link to={{
                        pathname: "/editar",
                        state: props.data
                    }}>
                        <button><img src={editar} alt="Editar" /></button>
                    </Link></div>
            </div>
        </div>
    )
}

export default Card