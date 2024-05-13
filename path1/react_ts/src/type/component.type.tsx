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
} & Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "style">;
