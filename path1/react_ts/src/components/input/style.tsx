import styled, { css } from "styled-components";
import { InputProps } from "../../type/component.type";
import { flexCenter } from "../../style/common.style";

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
    width: 280px;
    height: 40px;
    padding: 14px;
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

export const Input = styled.input<InputProps>`
  margin-left: 10px;
  ${({ variant }) => variantCSS[variant]}
  ${({ size }) => sizeCSS[size]}
  ${({ shape }) => shapeCSS[shape]}
  border: 1px solid black;
`;

export const InputContainer = styled.div`
  ${flexCenter}
`;
