import { FormEvent, useEffect, useState } from 'react';

import registerLogo from './assets/register.svg'
import './App.css'
import RegisterService from './services/Register.service';
import ColorsService from './services/Colors.service';

const Formulario = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [color, setColor] = useState('');
  const [obs, setObs] = useState('');
  const [error, setError] = useState('');
  const [msg, setMsg] = useState('');
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);
  const [isInvalidCpf, setIsInvalidCpf] = useState(false);
  const [colors, setColors] = useState<{ id: number; color: string }[]>([]);

  const validateEmail = (email: string) => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return !!email?.match(regexEmail);
  };

  useEffect(() => {
    async function fetchColors() {
      try {
        const response = await ColorsService.get('/colors');
        if (!response) {
          console.error('API: Erro ao carregar Cores')
          throw new Error('API: Erro ao carregar Cores');
        }
        setColors(response.data.colors);
        console.log(response.data.colors)
      } catch (error) {
        console.error(error);
      }
    }

    fetchColors();
  }, []);

  const validateCpf = (cpf: string) => {
    const regexCpf = /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}-?[0-9]{2})|([0-9]{11})$/;
    return !!cpf?.match(regexCpf);
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('')
    if(!color) { setError('É obrigatório escolher uma cor preferida') }
    if(isInvalidCpf) { setError('Revise o CPF preenchido incorretamente') }
    if(!cpf) { setError('É obrigatório o preenchimento do CPF') }
    if(!email) { setError('É obrigatório o preenchimento correto do E-mail') }
    if(!name) { setError('É obrigatório o preenchimento do Nome') }

    if(!error && name && cpf && email) {
      let result
      try {
        result = await RegisterService.post('/users', {
          name,
          email,
          cpf: cpf.replace(/[^\d]/g, ""),
          color,
          obs
        });
        if (result.status === 201) {
          setName('')
          setEmail('')
          setCpf('')
          setColor('')
          setObs('')
        }
        setMsg(result.data)
      } catch(err) {
        console.log(err)
        setError('Falha na API')
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <div>
          <img src={registerLogo} className="logo" alt="Cadastro" />
        </div>
        <h1>Formulário de Cadastro</h1>
          <div className="form-group">
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                setIsInvalidEmail(!validateEmail(event.target.value));
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="cpf">CPF:</label>
            <input
              type="text"
              id="cpf"
              name="cpf"
              value={cpf}
              onChange={(event) => {
                setCpf(event.target.value);
                setIsInvalidCpf(!validateCpf(event.target.value))
              }}
            />
          </div>
          <div>
            <select
              id="color"
              name="color"
              value={color}
              onChange={(event) => {
                setColor(event.target.value);
              }}
            >
              <option value="">Selecione uma cor</option>
              {
                colors && colors.map((item) => (
                  <option key={item.id} value={item.color}>
                    {item.color}
                  </option>
                ))
              }
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="obs">Observação:</label>
            <input
              type="text"
              id="observacao"
              name="observacao"
              value={obs}
              onChange={(event) => {
                setObs(event.target.value);
              }}
            />
          </div>
          <button type="submit" disabled={isInvalidEmail && isInvalidCpf} className="submit-button">Enviar</button>
          { error && <div className="error-message">{error}</div> }
          { msg && <div className="success-message">{msg}</div> }
        </form>
    </>
  )
}
export default Formulario;