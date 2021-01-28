import React from 'react';
import PropTypes from 'prop-types';

import Widget from '../Widget';

function QuizAnswers({
  answers,
  rightOption,
  correctAnswers,
  setCorrectAnswers,
}) {
  const setResponse = (event) => {
    const response = event.target.value;
    if (parseInt(response, 10) === rightOption) {
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setCorrectAnswers(correctAnswers);
    }
  };

  return answers.map((answer, answerIndex) => {
    const answerId = `answer__${answerIndex}`;
    return (
      <Widget.Topic as="label" htmlFor={answerId}>
        <input
          id={answerId}
          name={rightOption}
          value={answerIndex}
          type="radio"
          onClick={(event) => setResponse(event)}
        />
        {answer}
      </Widget.Topic>
    );
  });
}

QuizAnswers.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.string).isRequired,
  rightOption: PropTypes.number.isRequired,
};

export default QuizAnswers;
