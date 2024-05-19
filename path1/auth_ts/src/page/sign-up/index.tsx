import styled from "styled-components";
import HSButton from "../../component/button";
import HSInput from "../../component/input";
import { useForm } from "react-hook-form";
import { SignUpType } from "../../type/sign.type";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpType>({ mode: "onChange" });

  const onSubmitSignUpForm = () => {
    navigate("/sign-in");
  };

  return (
    <Container noValidate onSubmit={handleSubmit(onSubmitSignUpForm)}>
      <HSInput variant="primary" size="large" shape="shape" type="email" register={register} errors={errors} name="email" placeholder="이메일을 입력해주세요" children="이메일" />
      <HSInput variant="primary" size="large" shape="shape" type="password" register={register} errors={errors} name="password" placeholder="비밀번호를 입력해주세요" children="비밀번호" />
      {/* <HSInput variant="primary" size="large" shape="shape" type="password" name="passwordConfirm" placeholder="비밀번호 확인" children="비밀번호 확인" /> */}
      <HSButton variant="primary" size="large" shape="shape" children="회원가입" />
    </Container>
  );
};

export default SignUpPage;

const Container = styled.form`
  & > * {
    padding-bottom: 20px;
  }
`;
