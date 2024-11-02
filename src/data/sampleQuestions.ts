import { Question } from '../types';

export const sampleQuestions: Question[] = [
  // Physics - Kinematics
  {
    id: 'phy-1-1',
    subject: 'physics',
    chapter: 'phy-1',
    topic: 'Kinematics',
    text: 'A particle moves in a straight line with constant acceleration. If its initial velocity is 5 m/s and it travels 100 m in 10 seconds, what is its acceleration?',
    options: ['1 m/s²', '1.5 m/s²', '2 m/s²', '2.5 m/s²'],
    correctAnswer: 1,
    explanation: 'Using the equation s = ut + (1/2)at², where s = 100m, u = 5m/s, t = 10s. Solving gives a = 1.5 m/s²'
  },
  {
    id: 'phy-1-2',
    subject: 'physics',
    chapter: 'phy-1',
    topic: 'Kinematics',
    text: 'A stone is thrown vertically upward with a velocity of 19.6 m/s. What is the maximum height reached by the stone? (g = 9.8 m/s²)',
    options: ['15.6 m', '19.6 m', '20 m', '25 m'],
    correctAnswer: 2,
    explanation: 'Using v² = u² + 2as, where v = 0 (at max height), u = 19.6 m/s. h = u²/2g = (19.6)²/(2×9.8) = 20 m'
  },
  // Add 8 more questions for Kinematics...

  // Physics - Laws of Motion
  {
    id: 'phy-2-1',
    subject: 'physics',
    chapter: 'phy-2',
    topic: 'Laws of Motion',
    text: 'A block of mass 2 kg is placed on a rough horizontal surface with coefficient of friction 0.5. What is the force of friction when a horizontal force of 15 N is applied?',
    options: ['5 N', '10 N', '15 N', '20 N'],
    correctAnswer: 0,
    explanation: 'The normal force is mg = 2 × 9.8 = 19.6 N. Maximum static friction is μN = 0.5 × 19.6 = 9.8 N. Since applied force is greater than maximum static friction, kinetic friction acts, which is 5 N.'
  },
  {
    id: 'phy-2-2',
    subject: 'physics',
    chapter: 'phy-2',
    topic: 'Laws of Motion',
    text: 'Two masses of 3 kg and 2 kg are connected by a light string passing over a frictionless pulley. What is the acceleration of the system?',
    options: ['2 m/s²', '3.27 m/s²', '4 m/s²', '5 m/s²'],
    correctAnswer: 1,
    explanation: 'Using T - m₁g = m₁a and m₂g - T = m₂a, we get a = (m₁-m₂)g/(m₁+m₂) = (3-2)×9.8/5 = 3.27 m/s²'
  },
  // Add 8 more questions for Laws of Motion...

  // Chemistry - Chemical Bonding
  {
    id: 'chem-1-1',
    subject: 'chemistry',
    chapter: 'chem-1',
    topic: 'Chemical Bonding',
    text: 'Which of the following molecules has a pyramidal shape?',
    options: ['BF₃', 'NH₃', 'CO₂', 'H₂O'],
    correctAnswer: 1,
    explanation: 'NH₃ (Ammonia) has a pyramidal shape due to its electron geometry being tetrahedral with one lone pair.'
  },
  {
    id: 'chem-1-2',
    subject: 'chemistry',
    chapter: 'chem-1',
    topic: 'Chemical Bonding',
    text: 'What is the hybridization of carbon in ethene (C₂H₄)?',
    options: ['sp', 'sp²', 'sp³', 'sp³d'],
    correctAnswer: 1,
    explanation: 'In ethene, each carbon forms three sigma bonds and one pi bond, indicating sp² hybridization.'
  },
  // Add 8 more questions for Chemical Bonding...

  // Chemistry - States of Matter
  {
    id: 'chem-2-1',
    subject: 'chemistry',
    chapter: 'chem-2',
    topic: 'States of Matter',
    text: 'At what temperature does the kinetic energy of gas molecules become zero?',
    options: ['0°C', '-273°C', '-373°C', '273°C'],
    correctAnswer: 1,
    explanation: 'At absolute zero temperature (-273°C or 0K), the kinetic energy of gas molecules becomes zero as all molecular motion ceases.'
  },
  {
    id: 'chem-2-2',
    subject: 'chemistry',
    chapter: 'chem-2',
    topic: 'States of Matter',
    text: 'Which gas law states that the volume of a fixed mass of gas is inversely proportional to its pressure at constant temperature?',
    options: ['Charles Law', 'Boyles Law', 'Gay-Lussacs Law', 'Avogadros Law'],
    correctAnswer: 1,
    explanation: 'Boyles Law states that PV = constant at constant temperature, meaning volume is inversely proportional to pressure.'
  },
  // Add 8 more questions for States of Matter...

  // Mathematics - Calculus
  {
    id: 'math-1-1',
    subject: 'mathematics',
    chapter: 'math-1',
    topic: 'Calculus',
    text: 'What is the derivative of ln(x) with respect to x?',
    options: ['1/x', 'x', 'e^x', 'ln(x)'],
    correctAnswer: 0,
    explanation: 'The derivative of ln(x) is 1/x. This can be proven using the definition of the derivative or the chain rule.'
  },
  {
    id: 'math-1-2',
    subject: 'mathematics',
    chapter: 'math-1',
    topic: 'Calculus',
    text: 'Find the value of ∫(2x + 3)dx from x = 0 to x = 2',
    options: ['7', '8', '9', '10'],
    correctAnswer: 2,
    explanation: '∫(2x + 3)dx = x² + 3x. Evaluating from 0 to 2: (4 + 6) - (0 + 0) = 10'
  },
  // Add 8 more questions for Calculus...

  // Mathematics - Algebra
  {
    id: 'math-2-1',
    subject: 'mathematics',
    chapter: 'math-2',
    topic: 'Algebra',
    text: 'If α and β are the roots of the equation x² - 5x + 6 = 0, what is the value of α² + β²?',
    options: ['25', '31', '13', '17'],
    correctAnswer: 2,
    explanation: 'Using Vieta\'s formulas: α + β = 5 and αβ = 6. Therefore, α² + β² = (α + β)² - 2αβ = 25 - 12 = 13'
  },
  {
    id: 'math-2-2',
    subject: 'mathematics',
    chapter: 'math-2',
    topic: 'Algebra',
    text: 'What is the sum of the series 1 + 2 + 3 + ... + 100?',
    options: ['5050', '5000', '4950', '5100'],
    correctAnswer: 0,
    explanation: 'Using the formula n(n+1)/2 where n = 100, we get 100×101/2 = 5050'
  }
  // Add 8 more questions for Algebra...
];