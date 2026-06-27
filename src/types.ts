export interface TimelineEvent {
  year: number;
  title: string;
  category: 'accumulation' | 'monopoly' | 'power' | 'dissolution';
  description: string;
  stats?: {
    label: string;
    value: string;
    comparison?: string;
  };
  details: string[];
  citationUrl?: string;
  citationLabel?: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export type AppSection = 'overview' | 'competition' | 'accumulation' | 'monopoly' | 'standard_oil' | 'critique_expansion' | 'quiz' | 'references';
