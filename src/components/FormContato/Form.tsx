import { useState } from 'react';
import { FormContainer, Input, TextArea } from './styles';

export default function Form() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  return (
    <FormContainer>
      <form action="mailto:teste@mail.com" method="get" id="contatoForm" target="_blank">
        <Input
          placeholder="Nome"
          value={nome}
          onChange={({ target }) => setNome(target.value)}
          required
        />
        <Input
          placeholder="E-mail"
          type="email"
          required
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <TextArea
          placeholder="Mensagem"
          required
          value={mensagem}
          onChange={({ target }) => setMensagem(target.value)}
        />
      </form>
      <button type="button" id="enviar">ENVIAR</button>
    </FormContainer>
  );
}

<script>
  document.getElementById('contatoForm').addEventListener('submit', function () {
    var nome = this.querySelector('input[name=nome]'), nome = nome.value;
    var email = this.querySelector('input[name=email]'), email = email.value;
    var texto = 'Olá destinatário, \nMeu nome é '+ nome +' e meu email é '+ email;
    this.querySelector('input[name=Body]').setAttribute('value', texto);
});
  </script>
