import Embed from '@editorjs/embed';
import Table from '@editorjs/table';
import Paragraph from '@editorjs/paragraph';
import List from '@editorjs/list';
import Warning from '@editorjs/warning';
import Code from '@editorjs/code';
import LinkTool from '@editorjs/link';
import Image from '@editorjs/image';
import Raw from '@editorjs/raw';
import Header from '@editorjs/header';
import Quote from '@editorjs/quote';
import Marker from '@editorjs/marker';
import CheckList from '@editorjs/checklist';
import Delimiter from '@editorjs/delimiter';
import InlineCode from '@editorjs/inline-code';
import SimpleImage from '@editorjs/simple-image';

export const EDITOR_JS_TOOLS = {
    embed: {
        class: Embed,
        inlineToolbar: false,
        config: {
            services: {
                youtube: true,
                coub: true,
            },
        },
    },
    table: {
        class: Table,
        inlineToolbar: true,
    },
    paragraph: {
        class: Paragraph,
        inlineToolbar: true,
    },
    list: {
        class: List,
        inlineToolbar: true,
    },
    warning: {
        class: Warning,
        inlineToolbar: true,
    },
    code: Code,
    linkTool: {
        class: LinkTool,
        inlineToolbar: true,
        config: {
            endpoint: 'http://localhost:8008/fetchUrl', // Your backend endpoint for url data fetching
        },
    },
    image: Image,
    raw: {
        class: Raw,
        inlineToolbar: true,
    },
    header: {
        class: Header,
        inlineToolbar: true,
    },
    quote: {
        class: Quote,
        inlineToolbar: true,
    },
    marker: {
        class: Marker,
        inlineToolbar: true,
    },
    checklist: CheckList,
    delimiter: Delimiter,
    inlineCode: InlineCode,
    simpleImage: SimpleImage,
};
