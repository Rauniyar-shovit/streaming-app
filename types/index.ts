export interface CustomContentProps {
  title: string;
  description: string;
  subDescription?: string;
  containerStyles?: string;
}

export interface FeatureSectionProps {
  id: number;
  title: string;
  description: string;
  image: string;
  video?: string;
}

export interface FaqProps {
  question: string;
  answer: string;
  onClick: () => void;
  open: boolean;
}
