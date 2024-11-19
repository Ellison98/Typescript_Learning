import React from "react";
import Title from "../components/Title";
import styled from "styled-components";

const Signup = () => {
  return (
    <>
      <Title size="large">회원가입</Title>
      <SignupStyle>
        <form>
            <fieldset>
                <input type="email" />
            </fieldset>
            <fieldset> 
            <input type="email" />
            </fieldset>
            <fieldset> 
                <button>
                    회원가입
                </button>
            </fieldset>
        </form>
      </SignupStyle>
    </>
  );
};

const SignupStyle = styled.div``;

export default Signup;
