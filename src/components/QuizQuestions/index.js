import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Widget from '../Widget';
import QuizAnswers from '../QuizAnswers';
import Button from '../Button';

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  input[type="radio"] {
    display: none;
  }

  > button {
    margin-top: 15px;
  }
`;

function QuizQuestions({ question, questionIndex, totalQuestions }) {
  return (
    <Widget>
      <Widget.Header>
        <h3>{`Pergunta ${questionIndex + 1} de ${totalQuestions}`}</h3>
      </Widget.Header>
      <img
        src={question.image}
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
      />
      <Widget.Content>
        <h2>{question.title}</h2>
        <p>{question.description}</p>
        <Form>
          <QuizAnswers
            answers={question.alternatives}
            correctAnswers={question.answer}
          />
          <Button type="submit">Confirmar</Button>
        </Form>
      </Widget.Content>
    </Widget>
  );
}

QuizQuestions.propTypes = {
  question: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    answer: PropTypes.number,
    alternatives: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  questionIndex: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired,
};

export default QuizQuestions;
