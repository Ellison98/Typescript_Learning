import React from "react";
import Title from "../components/Title";
import Button from "../components/Button";
import InputText from "../components/InputText";

const Home = () => {
  return (
    <>
      <Title size="medium" color="background">
        제목
      </Title>
      <Button size="large" scheme="primary">
        버튼 테스트
      </Button>
      <InputText placeholder="여기 입력"></InputText>
      <div>home body</div>
    </>
  );
};

export default Home;
