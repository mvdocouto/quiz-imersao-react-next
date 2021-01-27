import React from 'react';
import { useRouter } from 'next/router';

import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import QuizLogo from '../src/components/QuizLogo';
import GitHubCorner from '../src/components/GitHubCorner';
import Footer from '../src/components/Footer';

import db from '../db';
import QuizQuestions from '../src/components/QuizQuestions';

function quiz() {
  // const router = useRouter();
  // const { name } = router.query;
  const question = db.questions[0];
  const questionIndex = 0;
  const totalQuestions = db.questions.length;

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <QuizQuestions
          question={question}
          questionIndex={questionIndex}
          totalQuestions={totalQuestions}
        />
        <Footer />
      </QuizContainer>
      <GitHubCorner />
    </QuizBackground>
  );
}

export default quiz;
