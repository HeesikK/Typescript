import { FC } from "react";
import { Input, InputContainer } from "./style";
import { InputProps } from "../../type/component.type";

const CustomInput: FC<InputProps> = ({ variant, size, shape }) => {
  return (
    <InputContainer>
      <label>아이디</label>
      <Input variant={variant} size={size} shape={shape} />
    </InputContainer>
  );
};

export default CustomInput;
