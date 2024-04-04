import { ButtonHTMLAttributes, FC } from "react";
import styled, { css } from "styled-components";
import { flexCenter } from "../style/common.style";

// interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
//   variant: "primary" | "secondary" | "error";
//   size: "small" | "medium" | "large";
//   shape: "default" | "shape" | "round";
// }

type ButtonProps = {
  variant: "primary" | "secondary" | "error";
  size: "small" | "medium" | "large";
  shape: "default" | "shape" | "round";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const CustomButton: FC<ButtonProps> = ({ children, variant, size, shape, ...rest }) => {
  return (
    <Button variant={variant} size={size} shape={shape} {...rest}>
      {children}
    </Button>
  );
};

export default CustomButton;

const variantCSS = {
  primary: css`
    background-color: ${({ theme }) => theme.COLORS.primary["yellow"]};
    &:hover {
      background-color: ${({ theme }) => theme.COLORS.primary["beige"]};
    }
  `,

  secondary: css`
    background-color: ${({ theme }) => theme.COLORS.secondary["purple"]};
    &:hover {
      background-color: ${({ theme }) => theme.COLORS.secondary["pink"]};
    }
  `,

  error: css`
    background-color: ${({ theme }) => theme.COLORS.error};
  `,
};

const sizeCSS = {
  small: css`
    width: 48px;
    height: 24px;
    padding: 12px 36px;
    font-size: ${({ theme }) => theme.FONT_SIZE.small};
  `,
  medium: css`
    width: 72px;
    height: 36px;
    padding: 24px 72px;
    font-size: ${({ theme }) => theme.FONT_SIZE.medium};
  `,
  large: css`
    width: 96px;
    height: 48px;
    padding: 48px 144px;
    font-size: ${({ theme }) => theme.FONT_SIZE.large};
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
    border-radius: 50px;
  `,
};

const Button = styled.button<ButtonProps>`
  ${({ variant }) => variantCSS[variant]}
  ${({ size }) => sizeCSS[size]}
  ${({ shape }) => shapeCSS[shape]}
  ${flexCenter}
`;
