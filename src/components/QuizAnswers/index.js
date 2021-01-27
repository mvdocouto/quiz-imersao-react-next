import React from 'react';
import PropTypes from 'prop-types';

import Widget from '../Widget';

function QuizAnswers({ answers, correctAnswers }) {
  return (
    answers.map((answer, answerIndex) => {
      const answerId = `answer__${answerIndex}`;
      return (
        <Widget.Topic as="label" htmlFor={answerId}>
          <input
            id={answerId}
            name={correctAnswers}
            type="radio"
          />
          {answer}
        </Widget.Topic>
      );
    })
  );
}

QuizAnswers.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.string).isRequired,
  correctAnswers: PropTypes.number.isRequired,
};

export default QuizAnswers;
