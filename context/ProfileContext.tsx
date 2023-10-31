"use client";

import { createContext, FC, ReactNode, useState } from "react";

interface profileObj {
  id: string;
  image: string;
  name: string;
  userId: string;
}

interface ContextProps {
  myProfiles: profileObj[];
  setMyProfiles: any;
}

const defaultValue: ContextProps = {
  myProfiles: [],
  setMyProfiles: null,
};

export const MyProfileContext = createContext(defaultValue);

export const MyProfileContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [myProfiles, setMyProfiles] = useState<any | null>(null);

  return (
    <MyProfileContext.Provider value={{ myProfiles, setMyProfiles }}>
      {children}
    </MyProfileContext.Provider>
  );
};
