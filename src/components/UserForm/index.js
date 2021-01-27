import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Button from '../Button';

export const Form = styled.form`
   display: flex;
   flex-direction: column;
`;
export const InputUser = styled.input`
  background-color: unset;
  outline: none;
  height: 40px;
  padding: 7px 15px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: ${({ theme }) => theme.colors.contrastText};
  margin-bottom: 25px;
`;

function UserForm({ onSubmit, name, setName }) {
  return (
    <Form onSubmit={onSubmit}>
      <InputUser
        type="text"
        placeholder="Digite o seu nome"
        onChange={(e) => setName(e.target.value)}
      />
      <Button type="submit" disabled={name.length === 0}>
        {`Jogar ${name}`}
      </Button>
    </Form>
  );
}

UserForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
};

export default UserForm;
