import { FC } from "react";
import { InputProps } from "../../type/component.type";
import styled, { css } from "styled-components";
import { flexCenter } from "../../style/common.style";

const HSInput: FC<InputProps> = ({ children, variant, size, shape, ...rest }) => {
  return (
    <InputContainer>
      <Label>{children}</Label>
      <Input variant={variant} size={size} shape={shape} {...rest} />
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
    /* height: 40px;
    padding: 14px; */
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

const Input = styled.input<InputProps>`
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

const InputContainer = styled.div`
  ${flexCenter}
  flex-direction:column;
`;
