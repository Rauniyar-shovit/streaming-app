"use client";
import { MovieObjType } from "@/types";
import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface modalCtxProps {
  isOpen: boolean | undefined;
  setIsOpen: Dispatch<SetStateAction<boolean | undefined>>;
  currentMovie: MovieObjType | null;
  setCurrentMovie: Dispatch<SetStateAction<MovieObjType | null>>;
}

const defaultValue: modalCtxProps = {
  isOpen: false,
  setIsOpen: () => {},
  currentMovie: null,
  setCurrentMovie: () => {},
};

export const MovieModalContext = createContext(defaultValue);

export const MovieModalContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState<boolean | undefined>(false);
  const [currentMovie, setCurrentMovie] = useState<MovieObjType | null>(null);
  return (
    <MovieModalContext.Provider
      value={{ isOpen, setIsOpen, currentMovie, setCurrentMovie }}
    >
      {children}
    </MovieModalContext.Provider>
  );
};
