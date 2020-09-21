import React, { useState } from 'react';
import './styles.css';
import Card from '../../components/card';

import api from '../../services/api'

import buscar from '../../procurar.svg'
import { Link } from 'react-router-dom';

function Landing() {

  const [medicos, setMedicos] = useState([])

  const [nome, setNome] = useState([])

  const listarMedicos = async (evt) => {

    evt.preventDefault();

    const response = await api.get("buscar", {
      params: {
        nome
      }
    });

    setMedicos(response.data)
  }

  

  return (
    <div>
      <div className="navbar">
        <div className="buscar">
          <form onSubmit={listarMedicos}>
            <input type="text" name="nome" placeholder="Pesquisar médico" onChange={e => setNome(e.target.value)}></input>
            <button type="submit"><img src={buscar} alt="buscar" /></button>
          </form>
        </div>
        <div className="cadastrar">
          <Link to='/cadastro'>
            <button>Cadastrar</button>
          </Link>

        </div>
      </div>
      <div className="container">
        {medicos.map((medico) => {
          return <Card key={medico.id} data={medico} />
        })}
      </div>
    </div>
  );
}

export default Landing;
