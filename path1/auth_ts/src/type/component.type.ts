import { ButtonHTMLAttributes, InputHTMLAttributes } from "react";

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
