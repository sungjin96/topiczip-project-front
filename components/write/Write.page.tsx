import { FC, useEffect, useRef, useState } from 'react';
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import CKEditor from '@ckeditor/ckeditor5-react';

import { EditorConfig } from 'utils/editor.utils';

import { Container } from '../common/common.styled';
import { TitleInput } from './Write.styled';

type WritePagePropsType = {};

const WritePage: FC<WritePagePropsType> = () => {
    const [values, setValues] = useState({
        body: '',
        title: '',
    });

    const { body, title } = values;

    return (
        <Container>
            <TitleInput type="text" placeholder="제목을 입력해 주세요." name="title" />
            <CKEditor
                editor={ClassicEditor}
                data={body}
                onInit={(editor) => {
                    // You can store the "editor" and use when it is needed.
                    console.log('Editor is ready to use!', editor);
                }}
                config={EditorConfig}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    console.log({ event, editor, data });

                    setValues({ ...values, body: data });
                }}
            />
        </Container>
    );
};

export default WritePage;
