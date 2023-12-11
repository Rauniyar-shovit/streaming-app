import { FieldErrors, UseFormRegister } from "react-hook-form";

type abc = "" | "";
enum apple {}

export interface CustomContentProps {
  title: string;
  description: string;
  subDescription?: string;
  containerStyles?: string;
  titleStyle?: string;
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

  className?: string;
}

export interface ProfileData {
  profileName: string;
  image: string;
}

export interface BannerProps {
  show: {
    id: string;
    genres: string;
    overview: string;
    last_air_date?: string;
    number_of_episodes?: string;
    number_of_seasons?: string;
    title: string;
    backdrop_path: string;
    release_date?: string;
    runtime?: string;
    mediaType: string;
  };
  videoKey: string;
}

export interface Profile {
  id: string;
  name: string;
  image: string;
  userId: string;
}

export interface ProfileCardProps {
  source: string;
  profileName: string;
  profileId: string;
}

export interface MovieObjType {
  show: {
    id: string;
    genres: string;
    overview: string;
    last_air_date?: string;
    number_of_episodes?: string;
    number_of_seasons?: string;
    title: string;
    backdrop_path: string;
    release_date?: string;
    runtime?: string;
    mediaType: string;
  };
  videoKey: string;
}
