import { ButtonHTMLAttributes, InputHTMLAttributes } from "react";

// interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
//   variant: "primary" | "secondary" | "error";
//   size: "small" | "medium" | "large";
//   shape: "default" | "shape" | "round";
// }

export type ButtonProps = {
  variant: "primary" | "secondary" | "error";
  size: "small" | "medium" | "large";
  shape: "default" | "shape" | "round";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type InputProps = {
  variant: "primary" | "secondary" | "error";
  size: "small" | "medium" | "large";
  shape: "default" | "shape" | "round";
  fontSize: "small" | "medium" | "large";
} & InputHTMLAttributes<HTMLInputElement>;

export type LabelProps = {
  fontSize: "small" | "medium" | "large";
};

export type CustomInputProps = InputProps & LabelProps;
