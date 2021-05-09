import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import parse from 'html-react-parser';
import '../CSS/EditorStyle.css';

const TextEditor =({getText})=> {
       
    const [text,setText] = useState('');

    const clackHandler =()=>{
        getText(text);
    }

    return (
            <div className="textEditor">
                <div className="editor">
                <CKEditor
                    editor={ ClassicEditor }
                    data={text}
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setText(data);
                    }}
                />
                </div>
                
                <button className="postBtn" onClick={clackHandler}>POST</button>
            </div>
        );
}

export default TextEditor;