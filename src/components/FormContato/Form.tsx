import { useState } from 'react';
import { FormContainer, Input, TextArea, Button } from './styles';

export default function Form() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  
  function sendEmail(e){
    e.preventDefault();
    alert("TESTE")
  }

  return (
    <FormContainer>
      <form className="form" onSubmit={sendEmail}>
        <Input
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <Input
          placeholder="E-mail"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextArea
          placeholder="Mensagem"
          required
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
        />
        <input className="button" type="submit" value="Enviar"/>
        </form>
      
        
    </FormContainer>
  );
}
