import React, { useState } from 'react';
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

  label {
    &[data-selected="true"] {
      background-color: ${({ theme }) => theme.colors.secondary};

      &[data-status="SUCCESS"] {
        background-color: ${({ theme }) => theme.colors.success};
      }
      &[data-status="ERROR"] {
        background-color: ${({ theme }) => theme.colors.wrong};
      }
    }
    /* &:focus {
      opacity: 1;
    } */
  }

  button {
    margin-top: 15px;
  }
`;

function QuizQuestions({
  question,
  questionIndex,
  onSubmit,
  totalQuestions,
  correctAnswers,
  setCorrectAnswers,
}) {
  const [selectedAternative, setSelectedAlternative] = useState(undefined);
  const isCorrect = selectedAternative === question.answer;
  const hasSelectedAlternative = selectedAternative !== undefined;

  const handleSubmit = (event) => {
    event.preventDefault();

    setCorrectAnswers([...correctAnswers, isCorrect]);
    setSelectedAlternative(undefined);
    onSubmit();
  };

  return (
    <Widget>
      <Widget.Header>
        <h3>{`Pergunta ${questionIndex + 1} de ${totalQuestions}`}</h3>
      </Widget.Header>
      <Widget.Image>
        <img src={question.image} alt="Descrição" />
      </Widget.Image>
      <Widget.Content>
        <h2>{question.title}</h2>
        <p>{question.description}</p>
        <Form onSubmit={handleSubmit}>
          <QuizAnswers
            answers={question.alternatives}
            questionIndex={questionIndex}
            selectedAternative={selectedAternative}
            setSelectedAlternative={setSelectedAlternative}
            isCorrect={isCorrect}
          />

          {hasSelectedAlternative && isCorrect && <div>Você acertou</div>}
          {hasSelectedAlternative && !isCorrect && <div>Você errou</div>}

          <Button type="submit" disabled={!hasSelectedAlternative}>
            Confirmar
          </Button>
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
  onSubmit: PropTypes.func.isRequired,
  totalQuestions: PropTypes.number.isRequired,
  correctAnswers: PropTypes.arrayOf(PropTypes.bool).isRequired,
  setCorrectAnswers: PropTypes.func.isRequired,
};

export default QuizQuestions;
