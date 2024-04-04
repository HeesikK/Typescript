import React, { InputHTMLAttributes } from "react";

import { Input, InputContainer, Label } from "./style";
import { InputProps, LabelProps } from "../../type/component.type";

type Props = InputProps & LabelProps & InputHTMLAttributes<HTMLInputElement>;

const CustomInput: React.FC<Props> = ({ variant, size, shape, fontSize, children }) => {
  return (
    <InputContainer>
      <Label fontSize={fontSize}>{children}</Label>
      <Input variant={variant} size={size} shape={shape} fontSize={fontSize} />
    </InputContainer>
  );
};

export default CustomInput;
