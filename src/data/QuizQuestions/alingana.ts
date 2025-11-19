// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'

export const alingana: Topic = {
  topic: 'Alingana',
  level: 'Beginner',
  totalQuestions: 3,
  totalScore: 25,
  totalTime: 600,
  questions: [
    {
      question: 'Cosa significa Alingana?',
      choices: [
        'SPEA',
        'Cadrega',
        'Abbraccio',
        'Marca di calzini svizzeri',
      ],
      type: 'MCQs',
      correctAnswers: [
        'Abbraccio',
      ],
      score: 10,
    },
    {
      question: 'Vieni al festival più bello del mondo quest anno?',
      choices: ['True', 'False'],
      type: 'boolean',
      correctAnswers: ['True'],
      score: 5,
    },
    {
      question: 'SPEA?',
      choices: [
        'Automatic Test Equipment',
        'Automatic Test... Equipment',
        'Maurizio Sodaro',
        'Calzolaro',
      ],
      type: 'MCQs',
      correctAnswers: ['Automatic Test... Equipment'],
      score: 10,
    },
  ],
}
