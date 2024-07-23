"use client";
import React from "react";
import { ThemeProvider } from "next-themes";

// create interface for props since its typescript
// The input for this interface is a single property named "children", which is of type React.ReactNode. React.ReactNode is a type that can represent any valid React child, such as elements, strings, numbers, fragments, or arrays of these types. This means the Provider component can accept any valid React content as its children.

interface Props {
  children: React.ReactNode;
}

const Provider = ({ children }: Props) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default Provider;
