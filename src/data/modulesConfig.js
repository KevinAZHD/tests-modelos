import { fuzzyQuestions } from './questions/fuzzy-anfis.js';
import { ethicsQuestions } from './questions/legal-ethical.js';
import fuzzyImage from '../assets/fuzzy.png';
import ethicsImage from '../assets/ethics.png';

export const modulesConfig = {
  fuzzy: {
    id: 'fuzzy',
    title: 'Lógica Difusa y ANFIS',
    fullName: 'Lógica Difusa y ANFIS',
    image: fuzzyImage,
    ras: [
      {
        id: 'quiz',
        title: 'Cuestionario',
        quizTitle: 'Cuestionario de Lógica Difusa y ANFIS',
        questions: fuzzyQuestions,
        infoTitle: 'Lógica Difusa y ANFIS — ¿De qué va?',
        info: 'Sistemas de inferencia difusa (FIS), Mamdani vs TSK, funciones de pertenencia, arquitectura ANFIS y entrenamiento híbrido con PyTorch.'
      }
    ]
  },
  ethics: {
    id: 'ethics',
    title: 'Principios Legales y Éticos',
    fullName: 'Principios Legales y Éticos en la IA',
    image: ethicsImage,
    ras: [
      {
        id: 'quiz',
        title: 'Cuestionario',
        quizTitle: 'Cuestionario de Principios Legales y Éticos en la IA',
        questions: ethicsQuestions,
        infoTitle: 'Principios Legales y Éticos en la IA — ¿De qué va?',
        info: 'Regulación EU AI Act, privacidad por diseño, GDPR (minimización, art. 22), aprendizaje federado, SHAP/XAI, ataques adversariales y sesgo histórico.'
      }
    ]
  }
};
