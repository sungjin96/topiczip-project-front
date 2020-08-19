import { FC } from 'react';
import Link from 'next/link';

import {
    SignInBodyContainer,
    SignInClose,
    SignInHeaderContainer,
    SignInTitle,
    SignInWrapper,
    SignBlock,
    SignBackgroundImage,
    SigninButton,
} from './Signin.styled';
import { DefaultLoginInputContainer, DefaultLoginInput, DefaultLoginLabel } from '../Login.styled';

type SigninPropsType = {};

const SigninComponent: FC<SigninPropsType> = () => {
    return (
        <SignBlock>
            <SignInWrapper>
                <SignBackgroundImage src="/images/join_background.png" alt="Login Page" />
                <SignInHeaderContainer>
                    <Link href="" as="/login">
                        <SignInClose>X</SignInClose>
                    </Link>
                </SignInHeaderContainer>
                <SignInBodyContainer>
                    <SignInTitle>Join Member</SignInTitle>
                    <DefaultLoginInputContainer>
                        <DefaultLoginInput type="email" />
                        <DefaultLoginLabel>Email</DefaultLoginLabel>
                    </DefaultLoginInputContainer>
                    <SigninButton>Join</SigninButton>
                </SignInBodyContainer>
            </SignInWrapper>
        </SignBlock>
    );
};

export default SigninComponent;
