import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import { useRouter } from 'next/router';

import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import QuizLogo from '../src/components/QuizLogo';
import GitHubCorner from '../src/components/GitHubCorner';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';

import db from '../db';
import QuizQuestions from '../src/components/QuizQuestions';

const LoadingWidget = () => (
  <Widget>
    <Widget.Header>
      <h1>Carregando...</h1>
    </Widget.Header>
    <Widget.Content>
      <p>Carregando listagem de perguntas.</p>
    </Widget.Content>
  </Widget>
);

const ResultWidget = ({ correct, total }) => (
  <Widget>
    <Widget.Header>
      <h1>Resultado</h1>
    </Widget.Header>
    <Widget.Content>
      <h1>{`Você acertou ${correct} questões em ${total}, parabéns!`}</h1>
    </Widget.Content>
  </Widget>
);

ResultWidget.propTypes = {
  correct: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,

};

const screenStates = {
  LOADING: 'LOADING',
  QUIZ: 'QUIZ',
  RESULT: 'RESULT',
};

function quiz() {
  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const question = db.questions[questionIndex];
  const totalQuestions = db.questions.length;

  useEffect(() => {
    setScreenState(screenStates.QUIZ);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextIndex = questionIndex + 1;
    if (nextIndex < totalQuestions) {
      setQuestionIndex(nextIndex);
    } else {
      setScreenState(screenStates.RESULT);
    }
  };

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        {screenState === screenStates.LOADING && <LoadingWidget />}
        {screenState === screenStates.QUIZ && (
          <QuizQuestions
            question={question}
            questionIndex={questionIndex}
            onSubmit={handleSubmit}
            totalQuestions={totalQuestions}
            correctAnswers={correctAnswers}
            setCorrectAnswers={setCorrectAnswers}
          />
        )}
        {screenState === screenStates.RESULT && (
          <ResultWidget
            correct={correctAnswers}
            total={totalQuestions}
          />
        )}
        <Footer />
      </QuizContainer>
      <GitHubCorner />
    </QuizBackground>
  );
}

export default quiz;
