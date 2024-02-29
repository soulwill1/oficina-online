import { useState } from 'react';
import axios from 'axios';

const Formulario = () => {
  const [nome, setNome] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      await axios.post('http://localhost:8000/', { client_name: nome, client_address: address });
      alert('Usuário criado com sucesso!');
      setNome('');
    } catch (error) {
      alert('Erro ao criar usuário.');
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </label>
      <br/>
      <label>
        Endereço:
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;