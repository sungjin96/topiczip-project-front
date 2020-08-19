import { FC, useCallback, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Container } from '../common/common.styled';
import {
    Icon,
    DefaultLoginContainer,
    DefaultLoginForm,
    DefaultLoginInput,
    DefaultLoginInputContainer,
    DefaultLoginLabel,
    LoginTitle,
    LoginTitleContainer,
    LoginWrapper,
    SignInButton,
    SignInContainer,
    SNSLoginButton,
    SNSLoginContainer,
    LoginBodyContainer,
    LoginButton,
    BackgroundImage,
} from './Login.styled';
import SigninComponent from 'components/login/signin/Signin.component';

type LoginPagePropsType = {};

const LoginPage: FC<LoginPagePropsType> = () => {
    const router = useRouter();

    console.log(router);

    return (
        <Container>
            <LoginWrapper>
                <BackgroundImage src="/images/login_background.png" alt="Login-Background" />
                <LoginTitleContainer>
                    <LoginTitle>Wlcome to Blog</LoginTitle>
                </LoginTitleContainer>
                <LoginBodyContainer>
                    <DefaultLoginContainer>
                        <DefaultLoginForm>
                            <DefaultLoginInputContainer>
                                <DefaultLoginInput type="email" />
                                <DefaultLoginLabel>Email</DefaultLoginLabel>
                            </DefaultLoginInputContainer>
                            <SignInContainer>
                                <Link href="" as="/join">
                                    <SignInButton>Sign In</SignInButton>
                                </Link>
                            </SignInContainer>
                            <LoginButton>Login</LoginButton>
                        </DefaultLoginForm>
                    </DefaultLoginContainer>
                    <SNSLoginContainer>
                        <SNSLoginButton type={'inline'}>
                            <Icon />
                            Sign in with Google
                        </SNSLoginButton>
                        <SNSLoginButton type={'inline'}>
                            <Icon />
                            Sign in with Facebook
                        </SNSLoginButton>
                        <SNSLoginButton type={'inline'}>
                            <Icon />
                            Sign in with Github
                        </SNSLoginButton>
                        <SNSLoginButton type={'inline'}>
                            <Icon />
                            Sign in with Twitter
                        </SNSLoginButton>
                    </SNSLoginContainer>
                </LoginBodyContainer>
            </LoginWrapper>
            {router.asPath === '/join' && <SigninComponent />}
        </Container>
    );
};

export default LoginPage;
