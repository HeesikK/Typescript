import styled from "styled-components";
import HSButton from "../../component/button";
import HSInput from "../../component/input";

const SignUpPage = () => {
  return (
    <Container>
      <HSInput variant="primary" size="large" shape="shape" type="email" placeholder="이메일을 입력해주세요" children="이메일" />
      <HSInput variant="primary" size="large" shape="shape" type="password" placeholder="비밀번호를 입력해주세요" children="비밀번호" />
      <HSButton variant="primary" size="large" shape="shape" children="회원가입" />
    </Container>
  );
};

export default SignUpPage;

const Container = styled.div`
  & > * {
    padding-bottom: 20px;
  }
`;
