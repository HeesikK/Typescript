import { FC } from "react";
import styled, { css } from "styled-components";
import { flexCenter } from "../../style/common.style";
import { ButtonProps } from "../../type/component.type";
import { Button } from "./style";

const CustomButton: FC<ButtonProps> = ({ children, variant, size, shape, ...rest }) => {
  return (
    <Button variant={variant} size={size} shape={shape} {...rest}>
      {children}
    </Button>
  );
};

export default CustomButton;
