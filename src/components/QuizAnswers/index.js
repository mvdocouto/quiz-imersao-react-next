import React from 'react';
import PropTypes from 'prop-types';

import Widget from '../Widget';

function QuizAnswers({
  answers,
  questionIndex,
  selectedAternative,
  setSelectedAlternative,
  isCorrect,
}) {
  return answers.map((answer, answerIndex) => {
    const answerId = `answer__${answerIndex}`;
    const questionNumber = `question__${questionIndex}`;
    const isSelected = selectedAternative === answerIndex;
    const answerStatus = isCorrect ? 'SUCCESS' : 'ERROR';

    return (
      <Widget.Topic
        as="label"
        htmlFor={answerId}
        key={answerId}
        data-selected={isSelected}
        data-status={answerStatus}
      >
        <input
          id={answerId}
          name={questionNumber}
          type="radio"
          onChange={() => setSelectedAlternative(answerIndex)}
        />
        {answer}
      </Widget.Topic>
    );
  });
}

QuizAnswers.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.string).isRequired,
  questionIndex: PropTypes.number.isRequired,
  selectedAternative: PropTypes.number.isRequired,
  isCorrect: PropTypes.number.isRequired,
  setSelectedAlternative: PropTypes.func.isRequired,
};

export default QuizAnswers;
