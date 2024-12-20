import { ForwardedRef, forwardRef } from "react";
import { styled } from "styled-components";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
    inputType?: "email" | "password" | "text" | "number";
}

const InputText = forwardRef(
    ({ placeholder, inputType, ...props }: Props, ref: ForwardedRef<HTMLInputElement>) => {
        return <InputTextStyle placeholder={placeholder} ref={ref} type={inputType} {...props} />;
    },
);

const InputTextStyle = styled.input`
    padding: 0.25rem 0.75rem;
    border: 1px solid ${({ theme }) => theme.color.border};
    border-radius: ${({ theme }) => theme.borderRadius.default};
    font-size: 1rem;
    line-height: 1.5;
    color: ${({ theme }) => theme.color.text};
`;

export default InputText;
