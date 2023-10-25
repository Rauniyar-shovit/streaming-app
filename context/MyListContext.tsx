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
  myList: any;
  setMyList: any;
}

const defaultValue: ContextProps = {
  myList: {},
  setMyList: null,
};

export const MyListContext = createContext(defaultValue);

export const MyListContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [myList, setMyList] = useState<any | null>(null);

  return (
    <MyListContext.Provider value={{ myList, setMyList }}>
      {children}
    </MyListContext.Provider>
  );
};
