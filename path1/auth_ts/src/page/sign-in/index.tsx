import styled from "styled-components";
import HSButton from "../../component/button";
import HSInput from "../../component/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInSchema, SignInType } from "../../const/form-schema";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInType>({ mode: "onChange", resolver: zodResolver(SignInSchema) });

  const onSubmitSignInForm = () => {
    navigate("/home");
  };

  return (
    <Container noValidate onSubmit={handleSubmit(onSubmitSignInForm)}>
      <HSInput variant="primary" size="large" shape="shape" type="email" name="email" register={register} errors={errors} placeholder="이메일을 입력해주세요" children="이메일" />
      <HSInput variant="primary" size="large" shape="shape" type="password" name="password" register={register} errors={errors} placeholder="비밀번호를 입력해주세요" children="비밀번호" />
      <HSButton variant="primary" size="large" shape="shape" children="로그인" />
    </Container>
  );
};

export default SignInPage;

const Container = styled.form`
  & > * {
    padding-bottom: 20px;
  }
`;
