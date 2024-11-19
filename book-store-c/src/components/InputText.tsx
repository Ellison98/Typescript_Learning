import React, { forwardRef } from "react";
import styled from "styled-components";

interface Props {
  placeholder?: string;
}

const InputText = forwardRef<HTMLInputElement, Props>(
  ({ placeholder }, ref) => {
    return <InputTextStyle placeholder={placeholder} ref={ref} />;
  }
);

const InputTextStyle = styled.input.attrs({ type: "text" })`
  padding: 0.25rem 0.75rem;
  color: ${({ theme }) => theme.color.text};
  border: 1px solid ${({ theme }) => theme.borderRadius.default};
  font-size: 1rem;
  line-height: 1.5;
`;

export default InputText;
