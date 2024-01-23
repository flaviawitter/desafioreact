import React, { useState } from 'react';

const FormularioCadastro = () => {
    const [nome, setNome] = useState('');
    const [curso, setCurso] = useState('');
    const [estado, setEstado] = useState('');
    const [cidade, setCidade] = useState('');

    const cursos = ['Matemática', 'Letras', 'Geografia'];
    const estados = ['São Paulo', 'Rio de Janeiro', 'Minas Gerais'];

    const cidadesPorEstado = {
        'São Paulo': ['Mogi das Cruzes', 'Suzano', 'Poá', 'Guararema'],
        'Rio de Janeiro': ['Angra dos Reis', 'Niterói', 'Itaboraí'],
        'Minas Gerais': ['Belo Horizonte', 'Monte Azul', 'Muzambinho'],
    };

    const handleEstadoChange = (estadoSelecionado) => {
        setEstado(estadoSelecionado);
        // Limpar a cidade ao trocar o estado
        setCidade('');
    }

    const handleVoltar = () => {
        // Lógica para voltar
        console.log('Voltar');
    }

    return (
        <div>
            <form style={{ textAlign: 'center' }}>
                <label>
                    Nome
                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} style={{ border: '2px solid #3498db', borderRadius: '10px' }} />
                </label>
                <br />
                <label>
                    Curso    
                    <select value={curso} onChange={(e) => setCurso(e.target.value)} style={{ border: '2px solid #3498db', borderRadius: '10px' }}>
                        <option selected disabled></option>
                        {cursos.map((opcao) => (
                            <option key={opcao} value={opcao}>
                                {opcao}
                            </option>
                        ))}
                    </select>
                </label>
                <br />
                <label>
                    Estado
                    <select value={estado} onChange={(e) => handleEstadoChange(e.target.value)} style={{ border: '2px solid #3498db', borderRadius: '10px' }}>
                    <option selected disabled></option>
                        {estados.map((opcao) => (
                            <option key={opcao} value={opcao}>
                                {opcao}
                            </option>
                        ))}
                    </select>
                </label>
                <br />
                <label>
                    Cidade
                    <select value={cidade} onChange={(e) => setCidade(e.target.value)} style={{ border: '2px solid #3498db', borderRadius: '10px' }}>
                    <option selected disabled></option>
                        {estado && cidadesPorEstado[estado].map((opcao) => (
                            <option key={opcao} value={opcao}>
                                {opcao}
                            </option>
                        ))}
                    </select>
                </label>
                <br />

                <button type="button" onClick={handleVoltar} style={{ backgroundColor: '#f1c40f', color: 'white', borderRadius: '10px', border: '2px solid #f1c40f' }}>
                    Voltar
                </button>
                <button type="submit" style={{ backgroundColor: '#2ecc71', color: 'white', borderRadius: '10px', border: '2px solid #2ecc71' }}>
                    Gravar
                </button>
            </form>
        </div>
    );
};

export default FormularioCadastro;