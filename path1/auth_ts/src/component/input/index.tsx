import { FC } from "react";
import { InputProps } from "../../type/component.type";
import styled, { css } from "styled-components";
import { flexCenter } from "../../style/common.style";
import { FieldValues } from "react-hook-form";
import { validate } from "../../utils/validate";

const HSInput = <T extends FieldValues>({ children, variant, size, shape, register, name, errors, ...rest }: InputProps<T>) => {
  const errorMessage = errors[name]?.message as unknown as string;

  return (
    <InputContainer>
      <Label>{children}</Label>
      <Input variant={variant} size={size} shape={shape} {...register(name, validate[name])} {...rest} />
      {errorMessage && <ErrorMessageBox>{errorMessage}</ErrorMessageBox>}
    </InputContainer>
  );
};

export default HSInput;

const variantCSS = {
  primary: css`
    background-color: ${({ theme }) => theme.COLORS.primary["beige"]};
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.COLORS.secondary["mint"]};
  `,
  error: css`
    background-color: ${({ theme }) => theme.COLORS.error};
  `,
};

const sizeCSS = {
  small: css`
    width: 140px;
    height: 20px;
    padding: 10px;
  `,
  medium: css`
    width: 210px;
    height: 30px;
    padding: 12px;
  `,
  large: css`
    width: 340px;
    padding: 10px;
    height: 30px;
  `,
};

const shapeCSS = {
  default: css`
    border-radius: 0;
  `,
  shape: css`
    border-radius: 8px;
  `,
  round: css`
    border-radius: 32px;
  `,
};

const Input = styled.input<{ variant: "primary" | "secondary" | "error"; size: "small" | "medium" | "large"; shape: "default" | "shape" | "round" }>`
  ${({ variant }) => variantCSS[variant]}
  ${({ size }) => sizeCSS[size]}
  ${({ shape }) => shapeCSS[shape]}
  border: 1px solid black;
`;

const Label = styled.label`
  width: 360px;
  display: flex;
  justify-content: flex-start;
  padding-bottom: 5px;
`;

const ErrorMessageBox = styled.span`
  width: 360px;
  display: flex;
  justify-content: flex-start;
  color: red;
  padding-top: 3px;
  font-size: 12px;
`;

const InputContainer = styled.div`
  ${flexCenter}
  flex-direction: column;
`;
