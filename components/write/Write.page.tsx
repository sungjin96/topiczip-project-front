import { FC, useEffect, useRef, useState } from 'react';

import BalloonEditor from '@ckeditor/ckeditor5-build-balloon';

import { Container } from '../common/common.styled';
import { Editor, TitleInput } from './Write.styled';
import Button from 'components/common/button/Button.component';

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
            <Editor
                editor={BalloonEditor}
                data={body}
                onInit={(editor) => {
                    // You can store the "editor" and use when it is needed.
                    console.log('Editor is ready to use!', editor);
                }}
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
