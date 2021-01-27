import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import GitHubCorner from '../src/components/GitHubCorner';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import UserForm from '../src/components/UserForm';

import db from '../db';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const [name, setName] = useState('');
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push(`/quiz?name=${name}`);
  };

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <UserForm onSubmit={handleSubmit} name={name} setName={setName} />
          </Widget.Content>
        </Widget>
        <Widget>
          <h1>Quizzes da Galera</h1>
          <p>Bla...</p>
        </Widget>

        <Footer />
      </QuizContainer>
      <GitHubCorner />
    </QuizBackground>
  );
}
