import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/globalStyle';
import { theme } from 'styles/theme';
import Head from 'next/head';
import configs from 'configs';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <title>{configs.APP_NAME} | All the topic in the world </title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta
                    name="description"
                    content={`세상의 모든 이야기의 모음집 입니다. 당신의 이야기로 더욱 채워주세요.`}
                />
                <link rel="canonical" href={`${configs.DOMAIN}`} />
                <meta property="og:title" content={`All the topic in the world | ${configs.APP_NAME}`} />
                <meta
                    property="og:description"
                    content={`세상의 모든 이야기의 모음집 입니다. 당신의 이야기로 더욱 채워주세요.`}
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`${configs.DOMAIN}`} />
                <meta property="og:site_name" content={`${configs.APP_NAME}`} />

                <meta property="og:image" content={`${configs.DOMAIN}/static/images/my_image.png`} />
                <meta property="og:image:secure_url" content={`${configs.DOMAIN}/static/images/my_image.png`} />
                <meta property="og:image:type" content="image/png" />
                <meta property="fb:app_id" content={`${configs.FB_APP_ID}`} />
            </Head>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
};

export default MyApp;
