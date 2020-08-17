import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        color: {
            primary: string;
            lightPrimary: string;
            darkPrimary: string;

            info: string;
            lightInfo: string;
            darkInfo: string;

            basic: string;
            lightBasic: string;
            darkBasic: string;

            white: string;
            black: string;

            gray: string;
            lightGray: string;

            line: string;
        };

        size: {
            h1: string;
            h2: string;
            h3: string;
            h4: string;
            h5: string;
            h6: string;
        };
    }
}
