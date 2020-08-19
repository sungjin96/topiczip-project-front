import styled from 'styled-components';
import CKEditor from '@ckeditor/ckeditor5-react';

export const Editor = styled(CKEditor)`
    min-height: 600px;
    padding: 24px;
    font-size: ${({ theme }) => theme.size.h6};
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

    &:focus {
        outline-color: #fff !important;
    }
`;

export const TitleInput = styled.input`
    font-size: ${({ theme }) => theme.size.h6};
    padding: 24px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

    width: 100%;
    margin: 30px 0;
`;
