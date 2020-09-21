import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import api from '../../services/api'
import './styles.css'

function Cadastro() {

    const history = useHistory()

    const [nome, setNome] = useState('')
    const [crm, setCrm] = useState('')
    const [telefone, setTelefone] = useState('')
    const [estado, setEstado] = useState('')
    const [cidade, setCidade] = useState('')
    const [especialidades, setEspecialidades] = useState([1])

    const addEspecialidade = () => {
        setEspecialidades([
            ...especialidades, 1
        ])
    }

    const setValorEspecialidade = (posicao, valor) => {
        const especialidadesAtualizadas = especialidades.map((especialidade, index) => {
            if (index === posicao) {
                return valor;
            }

            return especialidade
        });

        setEspecialidades(especialidadesAtualizadas)
    }

    const cadastrar = async (evt) => {
        evt.preventDefault()

        console.log(especialidades)

        await api.post('cadastro', {
            nome,
            crm,
            telefone,
            estado,
            cidade,
            especialidades
        }).then(() => {
            alert('Cadastro efetuado com sucesso');
            history.push("/")
        }).catch(() => { alert("Erro no cadastro") })
    }

    return (
        <div className="container">
            <h1>Cadastro</h1>
            <form onSubmit={cadastrar}>
                <label>Nome: </label>
                <input name='nome' type='text' onChange={e => setNome(e.target.value)} /><br />
                <label>CRM: </label>
                <input name='crm' type='text' onChange={e => setCrm(e.target.value)} /><br />
                <label>Telefone</label>
                <input name='telefone' type='text' onChange={e => setTelefone(e.target.value)} /><br />
                <label>Estado</label>
                <select name='estado' onChange={e => setEstado(e.target.value)}>
                    <option value="AC">Acre</option>
                    <option value="AL">Alagoas</option>
                    <option value="AP">Amapá</option>
                    <option value="AM">Amazonas</option>
                    <option value="BA">Bahia</option>
                    <option value="CE">Ceará</option>
                    <option value="DF">Distrito Federal</option>
                    <option value="ES">Espírito Santo</option>
                    <option value="GO">Goiás</option>
                    <option value="MA">Maranhão</option>
                    <option value="MT">Mato Grosso</option>
                    <option value="MS">Mato Grosso do Sul</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="PA">Pará</option>
                    <option value="PB">Paraíba</option>
                    <option value="PR">Paraná</option>
                    <option value="PE">Pernambuco</option>
                    <option value="PI">Piauí</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="RN">Rio Grande do Norte</option>
                    <option value="RS">Rio Grande do Sul</option>
                    <option value="RO">Rondônia</option>
                    <option value="RR">Roraima</option>
                    <option value="SC">Santa Catarina</option>
                    <option value="SP">São Paulo</option>
                    <option value="SE">Sergipe</option>
                    <option value="TO">Tocantins</option>
                </select><br />
                <label>Cidade</label>
                <input name='cidade' type='text' onChange={e => setCidade(e.target.value)} /><br />
                <label>Marque suas Especialidades</label> 
                <button type="button" onClick={addEspecialidade}>Adicionar especialidade</button> <br/>
                {especialidades.map((especialidade, index) => {
                    return (
                        <select name='especialidades' onChange={e => setValorEspecialidade(index, e.target.value)}>
                            <option value='1'>Alergologia</option>
                            <option value='2'>Angiologia</option>
                            <option value='3'>Buco Maxilo</option>
                            <option value='4'>Cardiologia Clínica</option>
                            <option value='5'>Cardiologia Infantil</option>
                            <option value='6'>Cirurgia Cabeça e Pescoço</option>
                            <option value='7'>Cirurgia Cardíaca</option>
                            <option value='8'>Cirurgia de Torax</option>
                            <option value='9'>Cirurgia Geral</option>
                            <option value='10'>Cirurgia Pediátrica</option>
                            <option value='11'>Cirurgia Plástica</option>
                            <option value='12'>Cirurgia Vascular</option>
                            <option value='13'>Clínica Médica</option>
                        </select>
                    )
                })}


                <br /><br />
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}

export default Cadastro