// utils/validate.jsx

import { regex } from "../const/regex";

export const validate = {
  email: {
    required: "이메일은 필수입니다.",
    pattern: {
      value: regex.email,
      message: "이메일 형식에 맞지 않습니다.",
    },
  },
  password: {
    required: "비밀번호는 필수입니다.",
    pattern: {
      value: regex.password,
      message: "비밀번호는 대소문자, 특수문자를 포함하여 8자 이상이어야 합니다.",
    },
    minLength: {
      value: 8,
      message: "비밀번호는 8자리 이상이어야 합니다.",
    },
  },
};
