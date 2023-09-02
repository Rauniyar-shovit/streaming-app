"use client";

import {
  createContext,
  FC,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface ContextProps {
  email: string | null;
  setEmail: Dispatch<SetStateAction<string | null>>;
}

const defaultValue: ContextProps = {
  email: "",
  setEmail: () => {},
};

export const EmailContext = createContext(defaultValue);

export const EmailContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [email, setEmail] = useState<string | null>(null);

  return (
    <EmailContext.Provider value={{ email, setEmail }}>
      {children}
    </EmailContext.Provider>
  );
};
