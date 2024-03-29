/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
/* eslint-disable import/order */
/* eslint-disable object-shorthand */
/* eslint-disable prettier/prettier */
/* eslint-disable no-alert */
import { useState } from 'react';
import { FormContainer, Input, TextArea, Button } from './styles';
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'

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

        Swal.fire(
          'Mensagem Enviada com Sucesso!',
          'Felipe Holanda, visualizará sua mensagem o mais rápido possivel!',
          'success'
        )
    },
    (err) => {
        console.log('ERRO: ', err);

        Swal.fire({
          icon: 'error',
          title: 'Erro ao enviar mensagem!',
          text: 'Tente novamente mais tarde!',
          footer: '<a href="">Por que eu tenho esse problema?</a>'
        }
        )
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
