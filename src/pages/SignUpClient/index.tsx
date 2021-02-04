import React, { useCallback, useRef } from 'react';
import {
  FiArrowLeft,
  FiMail,
  FiLock,
  FiUser,
  FiPhone,
  FiArchive,
  FiBell,
} from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
// import * as Yup from 'yup';
import { Link } from 'react-router-dom';

// import api from '../../services/apiClient';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  Content,
  AnimationContainer,
  SectionArea,
  GreatSection,
} from './styles';

interface SignUpData {
  name: string;
  email: string;
  password: string;
  cpf: string;
  phone: string;
  address?: string;
}

const SignUpClient: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: SignUpData) => {
    try {
    } catch (err) {}
  }, []);

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <Form ref={formRef} onSubmit={() => {}}>
            <h1>Faça seu cadastro</h1>

            <GreatSection>
              <SectionArea>
                <Input icon={FiUser} name="name" placeholder="Nome" />
                <Input icon={FiMail} name="email" placeholder="E-mail" />
                <Input icon={FiPhone} name="phone" placeholder="Telefone" />
              </SectionArea>
              <SectionArea>
                <Input icon={FiArchive} name="cpf" placeholder="CPF" />
                <Input icon={FiBell} name="address" placeholder="Endereço" />
                <Input
                  icon={FiLock}
                  name="password"
                  type="password"
                  placeholder="Senha"
                />
              </SectionArea>
            </GreatSection>

            <Button type="submit">Cadastrar</Button>
          </Form>

          <Link to="/">
            <FiArrowLeft />
            Voltar para logon
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignUpClient;
