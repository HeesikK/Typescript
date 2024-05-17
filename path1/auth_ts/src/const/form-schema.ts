import { z } from "zod";
import { regex } from "./regex";

export const SignInSchema = z.object({
  email: z.string().nonempty("이메일은 필수입니다.").regex(regex.email, { message: "이메일 형식에 맞지 않습니다." }),
  password: z
    .string()
    .nonempty("비밀번호는 필수입니다.")
    .min(8, { message: "비밀번호는 8자리 이상이어야 합니다." })
    .regex(regex.password, { message: "비밀번호는 대소문자, 특수문자를 포함하여야 합니다." }),
});

export type SignInType = z.infer<typeof SignInSchema>;
