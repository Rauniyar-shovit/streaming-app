"use client";
import React, { createContext } from "react";

interface SliderContextDefaultValue {
  elementRef: React.MutableRefObject<HTMLDivElement | null> | null;
}

const defaultValue: SliderContextDefaultValue = { elementRef: null };
const SliderContext = createContext(defaultValue);

export default SliderContext;
