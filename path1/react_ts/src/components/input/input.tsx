import React from "react";

import { Input, InputContainer } from "./style";
import { InputProps } from "../../type/component.type";

const CustomInput: React.FC<InputProps> = ({ variant, size, shape, fontSize }) => {
  return (
    <InputContainer>
      <Input variant={variant} size={size} shape={shape} fontSize={fontSize} />
    </InputContainer>
  );
};

export default CustomInput;
