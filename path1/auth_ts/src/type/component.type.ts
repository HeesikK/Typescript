import { ButtonHTMLAttributes, InputHTMLAttributes } from "react";
import { FieldErrors, FieldValues, Path, UseFormRegister } from "react-hook-form";

export type ButtonProps = {
  variant: "primary" | "secondary" | "error";
  size: "small" | "medium" | "large";
  shape: "default" | "shape" | "round";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type InputProps<T extends FieldValues> = {
  variant: "primary" | "secondary" | "error";
  size: "small" | "medium" | "large";
  shape: "default" | "shape" | "round";
  name: Path<T>;
  errors: FieldErrors<T>;
  register: UseFormRegister<T>;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "size">;
