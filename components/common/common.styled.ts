import styled from 'styled-components';
import { media } from 'styles/globalStyle';

export const Container = styled.section`
    max-width: 1040px;
    margin: 0 auto;

    ${media(
        1040,
        `
        padding: 0 20px;    
    `,
    )}
`;
