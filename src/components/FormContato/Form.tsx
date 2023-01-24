/* eslint-disable no-console */
/* eslint-disable import/order */
/* eslint-disable object-shorthand */
/* eslint-disable prettier/prettier */
/* eslint-disable no-alert */
import { useState } from 'react';
import { FormContainer, Input, TextArea, Button } from './styles';
import emailjs from '@emailjs/browser'

export default function Form() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  function sendEmail(e) {
    e.preventDefault();

    if (nome === '' || email === '' || mensagem === '') {
      alert('Preencha todos os campos');
      return;
    }

    const templateParams = {
      from_name: nome,
      message: mensagem,
      email: email
    }

    emailjs.send("service_tmns12f", "template_8qxeqhz", templateParams, "w0cxDDOuwsHQmyk41")
    .then((response) => {
        console.log('EMAIL ENVIADO', response.status, response.text);
        setNome('')
        setEmail('')
        setMensagem('')
    },
    (err) => {
        console.log('ERRO: ', err);
    })
  }

  return (
    <FormContainer>
      <form className="form" onSubmit={sendEmail}>
        <Input
          placeholder="Nome"
          value={nome}
          onChange={e => setNome(e.target.value)}
          required
        />
        <Input
          placeholder="E-mail"
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <TextArea
          placeholder="Mensagem"
          required
          value={mensagem}
          onChange={e => setMensagem(e.target.value)}
        />
        <Button className="button" type="submit" value="Enviar">
          Enviar
        </Button>
      </form>
    </FormContainer>
  );
}
