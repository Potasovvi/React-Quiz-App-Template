// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'

export const PULP: Topic = {
  topic: 'PULP',
  level: 'Beginner',
  totalQuestions: 3,
  totalScore: 25,
  totalTime: 600,
  questions: [
    {
      question: 'Dove si trova il PULP?',
      choices: [
        'Boh',
        'Helsinki',
        'Settimo',
        'Il PULP ?',
      ],
      type: 'MCQs',
      correctAnswers: [
        'Settimo',
      ],
      score: 10,
    },
    {
      question: 'Gerry Scotti?',
      choices: ['True', 'False'],
      type: 'boolean',
      correctAnswers: ['True'],
      score: 5,
    },
    {
      question: '7x8?',
      choices: [
        '7x8',
        '5x6',
        '56',
        'Calzolaro',
      ],
      type: 'MCQs',
      correctAnswers: ['56'],
      score: 10,
    },
  ],
}
