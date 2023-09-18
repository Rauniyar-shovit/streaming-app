import { FieldErrors, UseFormRegister } from "react-hook-form";

type abc = "" | "";
enum apple {}

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

export interface FormData {
  email: string;
  password: string;
  name?: string;
}

interface ValidationPattern {
  value: RegExp;
  message: string;
}

export interface FormInputProps {
  id: string;
  value?: string | number | readonly string[] | undefined;
  type: string;
  placeHolder: string;
  errors: FieldErrors<FormData>;
  register: UseFormRegister<FormData>;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  required: boolean;
  validation?:
    | { pattern: ValidationPattern }
    | {
        validate: (value: string) => string | boolean;
      };
}

export interface ProfileData {
  name: string;
  image: string;
}

export interface BannerDetailProps {
  title: string;
  description: string;
}

export interface BannerVideoProps {
  videoKey: string;
  children?: React.ReactNode;
}
